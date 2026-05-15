import { describe, test, expect, afterEach, vi } from 'vitest';
import { BaseEntity } from '../../entities/base-entity.js';
import { Project } from '../../entities/project.js';
import { SyncState } from '../../entities/stateful-entity.js';
import { GalileoConfig } from '../../lib/galileo-config.js';
import {
  datasetDBFixture,
  experimentResponseFixture,
  listDatasetResponseFixture,
  logStreamResponseFixture,
  projectCreateResponseFixture,
  projectDBFixture,
  projectUpdateResponseFixture,
  promptTemplateResponseFixture,
} from './_fixtures.js';

const {
  mockCreateProject,
  mockGetProject,
  mockUpdateProject,
  mockDeleteProject,
  mockGetProjects,
  mockListDatasets,
  mockListLogStreams,
  mockListExperiments,
  mockQueryTemplates,
  mockGetProjectTemplates,
} = vi.hoisted(() => ({
  mockCreateProject: vi.fn(),
  mockGetProject: vi.fn(),
  mockUpdateProject: vi.fn(),
  mockDeleteProject: vi.fn(),
  mockGetProjects: vi.fn(),
  mockListDatasets: vi.fn(),
  mockListLogStreams: vi.fn(),
  mockListExperiments: vi.fn(),
  mockQueryTemplates: vi.fn(),
  mockGetProjectTemplates: vi.fn(),
}));

vi.mock('../../index.js', () => ({
  GalileoGenerated: vi.fn().mockImplementation(() => ({
    projects: {
      createProjectProjectsPost: mockCreateProject,
      getProjectProjectsProjectIdGet: mockGetProject,
      updateProjectProjectsProjectIdPut: mockUpdateProject,
      deleteProjectProjectsProjectIdDelete: mockDeleteProject,
      getProjectsProjectsGet: mockGetProjects,
    },
    datasets: {
      listDatasetsDatasetsGet: mockListDatasets,
    },
    logStream: {
      listLogStreamsProjectsProjectIdLogStreamsGet: mockListLogStreams,
    },
    experiment: {
      listExperimentsProjectsProjectIdExperimentsGet: mockListExperiments,
    },
    prompts: {
      queryTemplatesTemplatesQueryPost: mockQueryTemplates,
      getProjectTemplatesProjectsProjectIdTemplatesGet: mockGetProjectTemplates,
    },
  })),
  SDKOptions: {},
}));

describe('Project', () => {
  afterEach(() => {
    vi.clearAllMocks();
    GalileoConfig.reset();
    BaseEntity.resetForTesting();
  });

  describe('constructor', () => {
    test('test new Project starts in LOCAL_ONLY', () => {
      const project = new Project({ name: 'hello' });
      expect(project.isLocalOnly()).toBe(true);
      expect(project.name).toBe('hello');
      expect(project.id).toBeNull();
      expect(project.createdAt).toBeNull();
      expect(project.updatedAt).toBeNull();
    });

    test('test new Project without name throws TypeError', () => {
      expect(() => new Project({ name: '' })).toThrow(TypeError);
      expect(() => new Project({ name: '' })).toThrow('Project requires a name');
    });
  });

  describe('state machine', () => {
    test('test setting name on SYNCED project flips to DIRTY', async () => {
      mockGetProject.mockResolvedValue(projectDBFixture());
      const project = await Project.get({ id: 'proj-123' });
      expect(project).not.toBeNull();
      expect(project!.isSynced()).toBe(true);
      project!.name = 'renamed';
      expect(project!.isDirty()).toBe(true);
    });

    test('test setting same name leaves state SYNCED', async () => {
      mockGetProject.mockResolvedValue(projectDBFixture());
      const project = await Project.get({ id: 'proj-123' });
      project!.name = 'test-project';
      expect(project!.isSynced()).toBe(true);
    });

    test('test setting name on LOCAL_ONLY project stays LOCAL_ONLY', () => {
      const project = new Project({ name: 'a' });
      project.name = 'b';
      expect(project.isLocalOnly()).toBe(true);
    });
  });

  describe('_fromApi', () => {
    test('test _fromApi produces SYNCED instance with all fields hydrated', () => {
      const raw = projectDBFixture({
        id: 'proj-abc',
        name: 'fixture-project',
        createdBy: 'user-9',
        bookmark: true,
      });
      const project = Project._fromApi(raw);
      expect(project.isSynced()).toBe(true);
      expect(project.id).toBe('proj-abc');
      expect(project.name).toBe('fixture-project');
      expect(project.createdBy).toBe('user-9');
      expect(project.bookmark).toBe(true);
      expect(project.createdAt).toEqual(raw.createdAt);
      expect(project.updatedAt).toEqual(raw.updatedAt);
    });
  });

  describe('static get', () => {
    test('test get by id calls getProjectProjectsProjectIdGet', async () => {
      mockGetProject.mockResolvedValue(projectDBFixture({ id: 'proj-xyz' }));
      const project = await Project.get({ id: 'proj-xyz' });
      expect(mockGetProject).toHaveBeenCalledWith({}, { projectId: 'proj-xyz' });
      expect(project!.id).toBe('proj-xyz');
      expect(project!.isSynced()).toBe(true);
    });

    test('test get by name filters paginated list by name', async () => {
      mockGetProjects.mockResolvedValue([
        projectDBFixture({ id: 'proj-1', name: 'foo' }),
        projectDBFixture({ id: 'proj-2', name: 'bar' }),
      ]);
      const project = await Project.get({ name: 'bar' });
      expect(mockGetProjects).toHaveBeenCalledWith({}, { projectName: 'bar' });
      expect(project!.id).toBe('proj-2');
      expect(project!.name).toBe('bar');
    });

    test('test get by name returns null when no match', async () => {
      mockGetProjects.mockResolvedValue([
        projectDBFixture({ id: 'proj-1', name: 'foo' }),
      ]);
      const project = await Project.get({ name: 'missing' });
      expect(project).toBeNull();
    });

    test('test get by id returns null on 404', async () => {
      const err = Object.assign(new Error('not found'), { statusCode: 404 });
      mockGetProject.mockRejectedValue(err);
      const project = await Project.get({ id: 'proj-none' });
      expect(project).toBeNull();
    });

    test('test get with both id and name throws', async () => {
      await expect(
        Project.get({ id: 'a', name: 'b' })
      ).rejects.toThrow('provide exactly one of id or name');
    });

    test('test get with neither id nor name throws', async () => {
      await expect(Project.get({})).rejects.toThrow(
        'provide either id or name'
      );
    });
  });

  describe('static list', () => {
    test('test list returns array of Project instances', async () => {
      mockGetProjects.mockResolvedValue([
        projectDBFixture({ id: 'proj-1', name: 'one' }),
        projectDBFixture({ id: 'proj-2', name: 'two' }),
      ]);
      const projects = await Project.list();
      expect(projects).toHaveLength(2);
      expect(projects[0]).toBeInstanceOf(Project);
      expect(projects[0]!.id).toBe('proj-1');
      expect(projects[1]!.name).toBe('two');
    });

    test('test list returns empty array when API returns empty', async () => {
      mockGetProjects.mockResolvedValue([]);
      const projects = await Project.list();
      expect(projects).toEqual([]);
    });
  });

  describe('create', () => {
    test('test create POSTs name and hydrates from response', async () => {
      mockCreateProject.mockResolvedValue(
        projectCreateResponseFixture({ id: 'proj-new', name: 'new-name' })
      );
      const project = new Project({ name: 'new-name' });
      const result = await project.create();
      expect(result).toBe(project);
      expect(mockCreateProject).toHaveBeenCalledWith(
        {},
        { name: 'new-name', type: 'gen_ai' }
      );
      expect(project.id).toBe('proj-new');
      expect(project.isSynced()).toBe(true);
    });

    test('test create failure transitions to FAILED_SYNC', async () => {
      mockCreateProject.mockRejectedValue(new Error('boom'));
      const project = new Project({ name: 'x' });
      await expect(project.create()).rejects.toThrow('boom');
      expect(project.hasFailed()).toBe(true);
      expect(project.lastError?.message).toBe('boom');
    });
  });

  describe('refresh', () => {
    test('test refresh hydrates from latest GET response', async () => {
      mockGetProject
        .mockResolvedValueOnce(projectDBFixture({ name: 'initial' }))
        .mockResolvedValueOnce(projectDBFixture({ name: 'refreshed' }));
      const project = await Project.get({ id: 'proj-123' });
      expect(project!.name).toBe('initial');
      await project!.refresh();
      expect(project!.name).toBe('refreshed');
      expect(project!.isSynced()).toBe(true);
    });

    test('test refresh on LOCAL_ONLY project throws', async () => {
      const project = new Project({ name: 'a' });
      await expect(project.refresh()).rejects.toThrow(
        'Project ID is not set'
      );
    });
  });

  describe('save', () => {
    test('test save on LOCAL_ONLY delegates to create', async () => {
      mockCreateProject.mockResolvedValue(
        projectCreateResponseFixture({ id: 'proj-1' })
      );
      const project = new Project({ name: 'x' });
      await project.save();
      expect(mockCreateProject).toHaveBeenCalled();
      expect(project.isSynced()).toBe(true);
    });

    test('test save on DIRTY calls update endpoint', async () => {
      mockGetProject.mockResolvedValue(projectDBFixture());
      mockUpdateProject.mockResolvedValue(
        projectUpdateResponseFixture({ name: 'renamed-via-save' })
      );
      const project = await Project.get({ id: 'proj-123' });
      project!.name = 'renamed-via-save';
      expect(project!.isDirty()).toBe(true);
      await project!.save();
      expect(mockUpdateProject).toHaveBeenCalledWith(
        {},
        { projectId: 'proj-123', body: { name: 'renamed-via-save' } }
      );
      expect(project!.isSynced()).toBe(true);
      expect(project!.name).toBe('renamed-via-save');
    });

    test('test save on SYNCED is a no-op', async () => {
      mockGetProject.mockResolvedValue(projectDBFixture());
      const project = await Project.get({ id: 'proj-123' });
      await project!.save();
      expect(mockUpdateProject).not.toHaveBeenCalled();
    });

    test('test save on DELETED throws', async () => {
      mockGetProject.mockResolvedValue(projectDBFixture());
      mockDeleteProject.mockResolvedValue({ message: 'ok' });
      const project = await Project.get({ id: 'proj-123' });
      await project!.delete();
      await expect(project!.save()).rejects.toThrow('Cannot save a deleted');
    });
  });

  describe('delete', () => {
    test('test delete calls DELETE and transitions to DELETED', async () => {
      mockGetProject.mockResolvedValue(projectDBFixture());
      mockDeleteProject.mockResolvedValue({ message: 'ok' });
      const project = await Project.get({ id: 'proj-123' });
      await project!.delete();
      expect(mockDeleteProject).toHaveBeenCalledWith(
        {},
        { projectId: 'proj-123' }
      );
      expect(project!.isDeleted()).toBe(true);
      expect(project!.syncState).toBe(SyncState.Deleted);
    });

    test('test delete on local-only project throws', async () => {
      const project = new Project({ name: 'x' });
      await expect(project.delete()).rejects.toThrow(
        'Project ID is not set'
      );
    });

    test('test delete failure transitions to FAILED_SYNC', async () => {
      mockGetProject.mockResolvedValue(projectDBFixture());
      mockDeleteProject.mockRejectedValue(new Error('cannot delete'));
      const project = await Project.get({ id: 'proj-123' });
      await expect(project!.delete()).rejects.toThrow('cannot delete');
      expect(project!.hasFailed()).toBe(true);
    });

    test('test delete after successful delete throws and keeps DELETED state', async () => {
      mockGetProject.mockResolvedValue(projectDBFixture());
      mockDeleteProject.mockResolvedValue({ message: 'ok' });
      const project = await Project.get({ id: 'proj-123' });
      await project!.delete();
      expect(project!.isDeleted()).toBe(true);
      mockDeleteProject.mockClear();
      await expect(project!.delete()).rejects.toThrow(
        'Cannot perform operation on deleted entity'
      );
      expect(mockDeleteProject).not.toHaveBeenCalled();
      expect(project!.isDeleted()).toBe(true);
    });
  });

  describe('relationships', () => {
    test('test listLogStreams on local-only throws', async () => {
      const project = new Project({ name: 'x' });
      await expect(project.listLogStreams()).rejects.toThrow(
        'Project ID is not set'
      );
    });

    test('test listLogStreams returns LogStream[] for this project', async () => {
      mockGetProject.mockResolvedValue(projectDBFixture({ id: 'proj-rel' }));
      mockListLogStreams.mockResolvedValue([
        logStreamResponseFixture({ id: 'ls-1', projectId: 'proj-rel' }),
      ]);
      const project = await Project.get({ id: 'proj-rel' });
      const streams = await project!.listLogStreams();
      expect(mockListLogStreams).toHaveBeenCalledWith(
        {},
        { projectId: 'proj-rel' }
      );
      expect(streams).toHaveLength(1);
      expect(streams[0]!.id).toBe('ls-1');
    });

    test('test listDatasets returns Dataset[]', async () => {
      mockGetProject.mockResolvedValue(projectDBFixture({ id: 'proj-rel' }));
      mockListDatasets.mockResolvedValue(
        listDatasetResponseFixture({
          datasets: [datasetDBFixture({ id: 'ds-x' })],
        })
      );
      const project = await Project.get({ id: 'proj-rel' });
      const datasets = await project!.listDatasets();
      expect(datasets).toHaveLength(1);
      expect(datasets[0]!.id).toBe('ds-x');
    });

    test('test listExperiments returns Experiment[]', async () => {
      mockGetProject.mockResolvedValue(projectDBFixture({ id: 'proj-rel' }));
      mockListExperiments.mockResolvedValue([
        experimentResponseFixture({ id: 'exp-1', projectId: 'proj-rel' }),
      ]);
      const project = await Project.get({ id: 'proj-rel' });
      const experiments = await project!.listExperiments();
      expect(mockListExperiments).toHaveBeenCalledWith(
        {},
        { projectId: 'proj-rel' }
      );
      expect(experiments).toHaveLength(1);
      expect(experiments[0]!.id).toBe('exp-1');
    });

    test('test listPrompts routes scoped endpoint with projectId', async () => {
      mockGetProject.mockResolvedValue(projectDBFixture({ id: 'proj-rel' }));
      mockGetProjectTemplates.mockResolvedValue([
        promptTemplateResponseFixture({ id: 'p-1' }),
      ]);
      const project = await Project.get({ id: 'proj-rel' });
      const prompts = await project!.listPrompts();
      expect(mockGetProjectTemplates).toHaveBeenCalledWith(
        {},
        { projectId: 'proj-rel' }
      );
      expect(mockQueryTemplates).not.toHaveBeenCalled();
      expect(prompts).toHaveLength(1);
      expect(prompts[0]!.id).toBe('p-1');
    });
  });
});
