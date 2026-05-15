import { describe, test, expect, afterEach, vi } from 'vitest';
import {
  resolveOptionalProjectId,
  resolveProjectId,
} from '../../entities/resolve-project.js';
import { GalileoConfig } from '../../lib/galileo-config.js';

const { mockGetProjects } = vi.hoisted(() => ({
  mockGetProjects: vi.fn(),
}));

vi.mock('../../index.js', () => ({
  GalileoGenerated: vi.fn().mockImplementation(() => ({
    projects: {
      getProjectsProjectsGet: mockGetProjects,
      getProjectProjectsProjectIdGet: vi.fn(),
    },
  })),
  SDKOptions: {},
}));

describe('resolveProjectId', () => {
  afterEach(() => {
    vi.clearAllMocks();
    GalileoConfig.reset();
  });

  test('test returns explicit projectId verbatim', async () => {
    GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'k' });
    const result = await resolveProjectId({ projectId: 'proj-abc' });
    expect(result).toBe('proj-abc');
    expect(mockGetProjects).not.toHaveBeenCalled();
  });

  test('test empty-string projectId throws TypeError', async () => {
    GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'k' });
    await expect(resolveProjectId({ projectId: '' })).rejects.toThrow(
      'projectId must be a non-empty string'
    );
    expect(mockGetProjects).not.toHaveBeenCalled();
  });

  test('test empty-string projectId does not fall through to projectName', async () => {
    GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'k' });
    await expect(
      resolveProjectId({ projectId: '', projectName: 'fallback' })
    ).rejects.toThrow('projectId must be a non-empty string');
    expect(mockGetProjects).not.toHaveBeenCalled();
  });

  test('test empty-string projectName throws TypeError', async () => {
    GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'k' });
    await expect(resolveProjectId({ projectName: '' })).rejects.toThrow(
      'projectName must be a non-empty string'
    );
    expect(mockGetProjects).not.toHaveBeenCalled();
  });

  test('test projectName resolves via Project.get', async () => {
    GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'k' });
    mockGetProjects.mockResolvedValue([
      { id: 'proj-xyz', name: 'my-project' },
    ]);
    const result = await resolveProjectId({ projectName: 'my-project' });
    expect(result).toBe('proj-xyz');
  });

  test('test projectName not found throws Error', async () => {
    GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'k' });
    mockGetProjects.mockResolvedValue([]);
    await expect(
      resolveProjectId({ projectName: 'missing' })
    ).rejects.toThrow("Project 'missing' not found");
  });

  test('test no opts and no env throws TypeError', async () => {
    GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'k' });
    await expect(resolveProjectId({})).rejects.toThrow(
      'projectId or projectName must be provided'
    );
  });

  test('test falls back to GALILEO_PROJECT when neither opt provided', async () => {
    GalileoConfig.get({
      apiUrl: 'https://api.example.com',
      apiKey: 'k',
      projectName: 'env-proj',
    });
    mockGetProjects.mockResolvedValue([
      { id: 'proj-env', name: 'env-proj' },
    ]);
    const result = await resolveProjectId({});
    expect(result).toBe('proj-env');
  });
});

describe('resolveOptionalProjectId', () => {
  afterEach(() => {
    vi.clearAllMocks();
    GalileoConfig.reset();
  });

  test('test returns explicit projectId verbatim', async () => {
    GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'k' });
    const result = await resolveOptionalProjectId({ projectId: 'proj-abc' });
    expect(result).toBe('proj-abc');
    expect(mockGetProjects).not.toHaveBeenCalled();
  });

  test('test returns null when neither projectId nor projectName provided', async () => {
    GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'k' });
    const result = await resolveOptionalProjectId({});
    expect(result).toBeNull();
    expect(mockGetProjects).not.toHaveBeenCalled();
  });

  test('test ignores GALILEO_PROJECT env var (returns null instead)', async () => {
    GalileoConfig.get({
      apiUrl: 'https://api.example.com',
      apiKey: 'k',
      projectName: 'env-proj',
    });
    const result = await resolveOptionalProjectId({});
    expect(result).toBeNull();
    expect(mockGetProjects).not.toHaveBeenCalled();
  });

  test('test empty-string projectId throws TypeError (not silent null)', async () => {
    GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'k' });
    await expect(
      resolveOptionalProjectId({ projectId: '' })
    ).rejects.toThrow('projectId must be a non-empty string');
  });

  test('test empty-string projectName throws TypeError (not silent null)', async () => {
    GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'k' });
    await expect(
      resolveOptionalProjectId({ projectName: '' })
    ).rejects.toThrow('projectName must be a non-empty string');
  });

  test('test projectName not found still throws Error', async () => {
    GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'k' });
    mockGetProjects.mockResolvedValue([]);
    await expect(
      resolveOptionalProjectId({ projectName: 'missing' })
    ).rejects.toThrow("Project 'missing' not found");
  });

  test('test projectName resolves via Project.get', async () => {
    GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'k' });
    mockGetProjects.mockResolvedValue([
      { id: 'proj-xyz', name: 'my-project' },
    ]);
    const result = await resolveOptionalProjectId({ projectName: 'my-project' });
    expect(result).toBe('proj-xyz');
  });
});
