import { describe, test, expect, afterEach, vi } from 'vitest';
import { BaseEntity } from '../../entities/base-entity.js';
import { Prompt } from '../../entities/prompt.js';
import { GalileoConfig } from '../../lib/galileo-config.js';
import {
  listPromptTemplateResponseFixture,
  listPromptTemplateVersionResponseFixture,
  promptTemplateResponseFixture,
  promptVersionResponseFixture,
} from './_fixtures.js';

const {
  mockCreateProjectTemplate,
  mockGetGlobalTemplate,
  mockUpdateGlobalTemplate,
  mockDeleteGlobalTemplate,
  mockQueryTemplates,
  mockGetProjectTemplates,
  mockGetProjects,
  mockGetProject,
  mockQueryVersions,
  mockCreateGlobalVersion,
  mockSetSelectedVersion,
} = vi.hoisted(() => ({
  mockCreateProjectTemplate: vi.fn(),
  mockGetGlobalTemplate: vi.fn(),
  mockUpdateGlobalTemplate: vi.fn(),
  mockDeleteGlobalTemplate: vi.fn(),
  mockQueryTemplates: vi.fn(),
  mockGetProjectTemplates: vi.fn(),
  mockGetProjects: vi.fn(),
  mockGetProject: vi.fn(),
  mockQueryVersions: vi.fn(),
  mockCreateGlobalVersion: vi.fn(),
  mockSetSelectedVersion: vi.fn(),
}));

vi.mock('../../index.js', () => ({
  GalileoGenerated: vi.fn().mockImplementation(() => ({
    prompts: {
      createPromptTemplateWithVersionProjectsProjectIdTemplatesPost:
        mockCreateProjectTemplate,
      getGlobalTemplateTemplatesTemplateIdGet: mockGetGlobalTemplate,
      updateGlobalTemplateTemplatesTemplateIdPatch: mockUpdateGlobalTemplate,
      deleteGlobalTemplateTemplatesTemplateIdDelete: mockDeleteGlobalTemplate,
      queryTemplatesTemplatesQueryPost: mockQueryTemplates,
      getProjectTemplatesProjectsProjectIdTemplatesGet: mockGetProjectTemplates,
      queryTemplateVersionsTemplatesTemplateIdVersionsQueryPost:
        mockQueryVersions,
      createGlobalPromptTemplateVersionTemplatesTemplateIdVersionsPost:
        mockCreateGlobalVersion,
      setSelectedTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionPut:
        mockSetSelectedVersion,
    },
    projects: {
      getProjectsProjectsGet: mockGetProjects,
      getProjectProjectsProjectIdGet: mockGetProject,
    },
  })),
  SDKOptions: {},
}));

describe('Prompt', () => {
  afterEach(() => {
    vi.clearAllMocks();
    GalileoConfig.reset();
    BaseEntity.resetForTesting();
  });

  describe('constructor', () => {
    test('test new Prompt starts LOCAL_ONLY', () => {
      const p = new Prompt({ name: 'p', messages: 'hi' });
      expect(p.isLocalOnly()).toBe(true);
      expect(p.name).toBe('p');
      expect(p.id).toBeNull();
    });

    test('test new Prompt without name throws', () => {
      expect(
        () => new Prompt({ name: '', messages: 'hi' })
      ).toThrow(TypeError);
    });

    test('test new Prompt without messages throws', () => {
      expect(
        () =>
          new Prompt({ name: 'p', messages: null as unknown as string })
      ).toThrow(TypeError);
    });
  });

  describe('state machine', () => {
    test('test setting name on SYNCED flips DIRTY', () => {
      const p = Prompt._fromApi(promptTemplateResponseFixture());
      p.name = 'renamed';
      expect(p.isDirty()).toBe(true);
    });

    test('test setting same name keeps SYNCED', () => {
      const p = Prompt._fromApi(
        promptTemplateResponseFixture({ name: 'same' })
      );
      p.name = 'same';
      expect(p.isSynced()).toBe(true);
    });
  });

  describe('_fromApi', () => {
    test('test _fromApi hydrates version fields', () => {
      const p = Prompt._fromApi(
        promptTemplateResponseFixture({
          id: 'p-x',
          totalVersions: 5,
          maxVersion: 4,
          allAvailableVersions: [1, 2, 3, 4],
          selectedVersionId: 'ver-4',
          selectedVersion: promptVersionResponseFixture({
            id: 'ver-4',
            version: 4,
          }),
        })
      );
      expect(p.id).toBe('p-x');
      expect(p.totalVersions).toBe(5);
      expect(p.maxVersion).toBe(4);
      expect(p.selectedVersionId).toBe('ver-4');
      expect(p.selectedVersionNumber).toBe(4);
      expect(p.allAvailableVersions).toEqual([1, 2, 3, 4]);
    });

    test('test _fromApi sets projectId to null (limitation)', () => {
      const p = Prompt._fromApi(promptTemplateResponseFixture());
      expect(p.projectId).toBeNull();
      expect(p.projectName).toBeNull();
    });
  });

  describe('static get', () => {
    test('test get by id calls global getter', async () => {
      mockGetGlobalTemplate.mockResolvedValue(
        promptTemplateResponseFixture({ id: 'p-xx' })
      );
      const p = await Prompt.get({ id: 'p-xx' });
      expect(mockGetGlobalTemplate).toHaveBeenCalledWith(
        {},
        { templateId: 'p-xx' }
      );
      expect(p!.id).toBe('p-xx');
    });

    test('test get with both id and name throws', async () => {
      await expect(
        Prompt.get({ id: 'a', name: 'b' })
      ).rejects.toThrow('provide exactly one');
    });

    test('test get with neither throws', async () => {
      await expect(Prompt.get({})).rejects.toThrow('provide either');
    });

    test('test get by name filters list', async () => {
      mockQueryTemplates.mockResolvedValue(
        listPromptTemplateResponseFixture({
          templates: [
            promptTemplateResponseFixture({ id: 'p-1', name: 'foo' }),
            promptTemplateResponseFixture({ id: 'p-2', name: 'bar' }),
          ],
        })
      );
      const p = await Prompt.get({ name: 'bar' });
      expect(p!.id).toBe('p-2');
    });
  });

  describe('static list', () => {
    test('test list returns Prompt[] from query endpoint', async () => {
      mockQueryTemplates.mockResolvedValue(
        listPromptTemplateResponseFixture({
          templates: [
            promptTemplateResponseFixture({ id: 'p-1' }),
            promptTemplateResponseFixture({ id: 'p-2' }),
          ],
        })
      );
      const list = await Prompt.list();
      expect(list).toHaveLength(2);
      expect(list[0]).toBeInstanceOf(Prompt);
    });

    test('test list with nameFilter sends filters array with eq operator', async () => {
      mockQueryTemplates.mockResolvedValue(listPromptTemplateResponseFixture());
      await Prompt.list({ nameFilter: 'pref' });
      expect(mockQueryTemplates).toHaveBeenCalledWith(
        {},
        {
          body: {
            filters: [{ name: 'name', operator: 'eq', value: 'pref' }],
          },
        }
      );
    });

    test('test list with empty-string nameFilter sends filter with empty value (global path)', async () => {
      mockQueryTemplates.mockResolvedValue(listPromptTemplateResponseFixture());
      await Prompt.list({ nameFilter: '' });
      expect(mockQueryTemplates).toHaveBeenCalledWith(
        {},
        {
          body: {
            filters: [{ name: 'name', operator: 'eq', value: '' }],
          },
        }
      );
    });

    test('test list with limit forwards limit on global path', async () => {
      mockQueryTemplates.mockResolvedValue(listPromptTemplateResponseFixture());
      await Prompt.list({ limit: 25 });
      expect(mockQueryTemplates).toHaveBeenCalledWith(
        {},
        expect.objectContaining({ limit: 25 })
      );
    });

    test('test list with projectId routes to project-scoped endpoint', async () => {
      mockGetProjectTemplates.mockResolvedValue([
        promptTemplateResponseFixture({ id: 'p-1', name: 'a' }),
        promptTemplateResponseFixture({ id: 'p-2', name: 'b' }),
      ]);
      const list = await Prompt.list({ projectId: 'proj-9' });
      expect(mockGetProjectTemplates).toHaveBeenCalledWith(
        {},
        { projectId: 'proj-9' }
      );
      expect(mockQueryTemplates).not.toHaveBeenCalled();
      expect(list).toHaveLength(2);
      expect(list[0]!.id).toBe('p-1');
    });

    test('test list with projectId and nameFilter filters client-side', async () => {
      mockGetProjectTemplates.mockResolvedValue([
        promptTemplateResponseFixture({ id: 'p-1', name: 'foo' }),
        promptTemplateResponseFixture({ id: 'p-2', name: 'bar' }),
      ]);
      const list = await Prompt.list({
        projectId: 'proj-9',
        nameFilter: 'bar',
      });
      expect(list).toHaveLength(1);
      expect(list[0]!.name).toBe('bar');
    });

    test('test list with projectName resolves to projectId then routes scoped', async () => {
      mockGetProjects.mockResolvedValue([
        { id: 'proj-x', name: 'my-project' },
      ]);
      mockGetProjectTemplates.mockResolvedValue([
        promptTemplateResponseFixture({ id: 'p-9' }),
      ]);
      const list = await Prompt.list({ projectName: 'my-project' });
      expect(mockGetProjects).toHaveBeenCalled();
      expect(mockGetProjectTemplates).toHaveBeenCalledWith(
        {},
        { projectId: 'proj-x' }
      );
      expect(list[0]!.id).toBe('p-9');
    });

    test('test list with unknown projectName throws', async () => {
      mockGetProjects.mockResolvedValue([]);
      await expect(
        Prompt.list({ projectName: 'missing' })
      ).rejects.toThrow("Project 'missing' not found");
    });
  });

  describe('create', () => {
    test('test create on prompt with projectId calls project create endpoint', async () => {
      mockCreateProjectTemplate.mockResolvedValue(
        promptTemplateResponseFixture({ id: 'p-new', name: 'new' })
      );
      const p = new Prompt({
        name: 'new',
        messages: 'hello',
        projectId: 'proj-1',
      });
      await p.create();
      expect(mockCreateProjectTemplate).toHaveBeenCalledWith(
        {},
        {
          projectId: 'proj-1',
          body: { name: 'new', template: 'hello' },
        }
      );
      expect(p.id).toBe('p-new');
      expect(p.isSynced()).toBe(true);
    });

    test('test create without projectId throws', async () => {
      const p = new Prompt({ name: 'p', messages: 'm' });
      await expect(p.create()).rejects.toThrow(
        'Prompt projectId is not set'
      );
    });
  });

  describe('save', () => {
    test('test save on DIRTY PATCHes name', async () => {
      mockGetGlobalTemplate.mockResolvedValue(promptTemplateResponseFixture());
      mockUpdateGlobalTemplate.mockResolvedValue(
        promptTemplateResponseFixture({ name: 'renamed' })
      );
      const p = await Prompt.get({ id: 'prompt-123' });
      p!.name = 'renamed';
      await p!.save();
      expect(mockUpdateGlobalTemplate).toHaveBeenCalledWith(
        {},
        { templateId: 'prompt-123', body: { name: 'renamed' } }
      );
      expect(p!.isSynced()).toBe(true);
    });
  });

  describe('refresh', () => {
    test('test refresh hydrates updated fields', async () => {
      mockGetGlobalTemplate
        .mockResolvedValueOnce(
          promptTemplateResponseFixture({ totalVersions: 1 })
        )
        .mockResolvedValueOnce(
          promptTemplateResponseFixture({ totalVersions: 3 })
        );
      const p = await Prompt.get({ id: 'prompt-123' });
      await p!.refresh();
      expect(p!.totalVersions).toBe(3);
    });

    test('test refresh on LOCAL_ONLY throws', async () => {
      const p = new Prompt({ name: 'a', messages: 'b' });
      await expect(p.refresh()).rejects.toThrow('Prompt ID is not set');
    });
  });

  describe('delete', () => {
    test('test delete transitions DELETED', async () => {
      mockGetGlobalTemplate.mockResolvedValue(promptTemplateResponseFixture());
      mockDeleteGlobalTemplate.mockResolvedValue(undefined);
      const p = await Prompt.get({ id: 'prompt-123' });
      await p!.delete();
      expect(mockDeleteGlobalTemplate).toHaveBeenCalledWith(
        {},
        { templateId: 'prompt-123' }
      );
      expect(p!.isDeleted()).toBe(true);
    });

    test('test delete on backend 404 is idempotent and ends in DELETED', async () => {
      mockGetGlobalTemplate.mockResolvedValue(promptTemplateResponseFixture());
      mockDeleteGlobalTemplate.mockRejectedValue(
        Object.assign(new Error('not found'), { statusCode: 404 })
      );
      const p = await Prompt.get({ id: 'prompt-123' });
      await expect(p!.delete()).resolves.toBeUndefined();
      expect(p!.isDeleted()).toBe(true);
      expect(p!.hasFailed()).toBe(false);
    });
  });

  describe('createVersion', () => {
    test('test createVersion POSTs new version and refreshes', async () => {
      mockGetGlobalTemplate.mockResolvedValue(promptTemplateResponseFixture());
      mockCreateGlobalVersion.mockResolvedValue(
        promptVersionResponseFixture({ version: 2 })
      );
      const p = await Prompt.get({ id: 'prompt-123' });
      mockGetGlobalTemplate.mockResolvedValue(
        promptTemplateResponseFixture({ totalVersions: 2 })
      );
      await p!.createVersion({ messages: 'new content' });
      expect(mockCreateGlobalVersion).toHaveBeenCalledWith(
        {},
        { templateId: 'prompt-123', body: { template: 'new content' } }
      );
      expect(p!.totalVersions).toBe(2);
    });

    test('test createVersion on local-only throws', async () => {
      const p = new Prompt({ name: 'p', messages: 'm' });
      await expect(p.createVersion()).rejects.toThrow(
        'Prompt ID is not set'
      );
    });
  });

  describe('listVersions', () => {
    test('test listVersions returns PromptVersion[] sorted desc', async () => {
      mockGetGlobalTemplate.mockResolvedValue(promptTemplateResponseFixture());
      mockQueryVersions.mockResolvedValue(
        listPromptTemplateVersionResponseFixture({
          versions: [
            promptVersionResponseFixture({ id: 'v1', version: 1 }),
            promptVersionResponseFixture({ id: 'v3', version: 3 }),
            promptVersionResponseFixture({ id: 'v2', version: 2 }),
          ],
        })
      );
      const p = await Prompt.get({ id: 'prompt-123' });
      const versions = await p!.listVersions();
      expect(versions).toHaveLength(3);
      expect(versions.map((v) => v.version)).toEqual([3, 2, 1]);
    });
  });

  describe('selectVersion', () => {
    test('test selectVersion without projectId throws', async () => {
      mockGetGlobalTemplate.mockResolvedValue(promptTemplateResponseFixture());
      const p = await Prompt.get({ id: 'prompt-123' });
      await expect(p!.selectVersion({ version: 2 })).rejects.toThrow(
        'projectId are required'
      );
    });
  });
});
