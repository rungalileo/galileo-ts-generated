import { describe, test, expect, afterEach, vi } from 'vitest';
import { BaseEntity } from '../../entities/base-entity.js';
import { Experiment } from '../../entities/experiment.js';
import { GalileoConfig } from '../../lib/galileo-config.js';
import { experimentResponseFixture } from './_fixtures.js';

const {
  mockListExperiments,
  mockGetExperiment,
  mockDeleteExperiment,
  mockSetTag,
} = vi.hoisted(() => ({
  mockListExperiments: vi.fn(),
  mockGetExperiment: vi.fn(),
  mockDeleteExperiment: vi.fn(),
  mockSetTag: vi.fn(),
}));

vi.mock('../../index.js', () => ({
  GalileoGenerated: vi.fn().mockImplementation(() => ({
    experiment: {
      listExperimentsProjectsProjectIdExperimentsGet: mockListExperiments,
      getExperimentProjectsProjectIdExperimentsExperimentIdGet: mockGetExperiment,
      deleteExperimentProjectsProjectIdExperimentsExperimentIdDelete:
        mockDeleteExperiment,
    },
    experimentTags: {
      setTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPost:
        mockSetTag,
    },
  })),
  SDKOptions: {},
}));

describe('Experiment', () => {
  afterEach(() => {
    vi.clearAllMocks();
    GalileoConfig.reset();
    BaseEntity.resetForTesting();
  });

  describe('constructor', () => {
    test('test new Experiment starts in LOCAL_ONLY', () => {
      const exp = new Experiment({ name: 'eval', projectId: 'proj-1' });
      expect(exp.isLocalOnly()).toBe(true);
      expect(exp.name).toBe('eval');
      expect(exp.projectId).toBe('proj-1');
      expect(exp.id).toBeNull();
    });

    test('test new Experiment without name throws TypeError', () => {
      expect(() => new Experiment({ name: '' })).toThrow(TypeError);
    });
  });

  describe('_fromApi', () => {
    test('test _fromApi hydrates all server fields', () => {
      const raw = experimentResponseFixture({
        id: 'exp-9',
        name: 'fixtest',
        projectId: 'proj-9',
        numSpans: 100,
        numTraces: 50,
        aggregateMetrics: { latency: 1.2 },
      });
      const exp = Experiment._fromApi(raw);
      expect(exp.id).toBe('exp-9');
      expect(exp.projectId).toBe('proj-9');
      expect(exp.numSpans).toBe(100);
      expect(exp.aggregateMetrics).toEqual({ latency: 1.2 });
      expect(exp.isSynced()).toBe(true);
    });
  });

  describe('state machine', () => {
    test('test Experiment has no name setter; save throws on forced DIRTY', async () => {
      const exp = Experiment._fromApi(experimentResponseFixture());
      (exp as unknown as { _setState: (s: string) => void })._setState('dirty');
      await expect(exp.save()).rejects.toThrow(
        'Experiment does not support updates after creation'
      );
    });
  });

  describe('static list', () => {
    test('test list with projectId calls SDK', async () => {
      mockListExperiments.mockResolvedValue([
        experimentResponseFixture({ id: 'exp-1' }),
        experimentResponseFixture({ id: 'exp-2' }),
      ]);
      const result = await Experiment.list({ projectId: 'proj-a' });
      expect(mockListExperiments).toHaveBeenCalledWith(
        {},
        { projectId: 'proj-a' }
      );
      expect(result).toHaveLength(2);
      expect(result[0]).toBeInstanceOf(Experiment);
    });

    test('test list without projectId throws', async () => {
      await expect(Experiment.list({})).rejects.toThrow(
        'projectId or projectName must be provided'
      );
    });
  });

  describe('static get', () => {
    test('test get by id calls getExperimentProjects...Get', async () => {
      mockGetExperiment.mockResolvedValue(
        experimentResponseFixture({ id: 'exp-xx', projectId: 'proj-1' })
      );
      const exp = await Experiment.get({ id: 'exp-xx', projectId: 'proj-1' });
      expect(mockGetExperiment).toHaveBeenCalledWith(
        {},
        { projectId: 'proj-1', experimentId: 'exp-xx' }
      );
      expect(exp!.id).toBe('exp-xx');
    });

    test('test get by name filters list', async () => {
      mockListExperiments.mockResolvedValue([
        experimentResponseFixture({ name: 'foo', id: 'exp-1' }),
        experimentResponseFixture({ name: 'bar', id: 'exp-2' }),
      ]);
      const exp = await Experiment.get({ name: 'bar', projectId: 'proj-1' });
      expect(exp!.id).toBe('exp-2');
    });

    test('test get without id or name throws', async () => {
      await expect(
        Experiment.get({ projectId: 'p' })
      ).rejects.toThrow('provide either id or name');
    });

    test('test get returns null on 404', async () => {
      mockGetExperiment.mockRejectedValue(
        Object.assign(new Error('not found'), { statusCode: 404 })
      );
      const exp = await Experiment.get({ id: 'no', projectId: 'proj-1' });
      expect(exp).toBeNull();
    });
  });

  describe('create', () => {
    test('test create throws not-yet-supported error', async () => {
      const exp = new Experiment({ name: 'x', projectId: 'p' });
      await expect(exp.create()).rejects.toThrow(/not yet supported/i);
    });
  });

  describe('refresh', () => {
    test('test refresh hydrates updated counts', async () => {
      mockGetExperiment
        .mockResolvedValueOnce(
          experimentResponseFixture({ numSpans: 10, projectId: 'proj-1' })
        )
        .mockResolvedValueOnce(
          experimentResponseFixture({ numSpans: 25, projectId: 'proj-1' })
        );
      const exp = await Experiment.get({
        id: 'exp-123',
        projectId: 'proj-1',
      });
      await exp!.refresh();
      expect(exp!.numSpans).toBe(25);
    });

    test('test refresh on LOCAL_ONLY throws', async () => {
      const exp = new Experiment({ name: 'x', projectId: 'p' });
      await expect(exp.refresh()).rejects.toThrow(
        'Experiment ID is not set'
      );
    });
  });

  describe('delete', () => {
    test('test delete transitions to DELETED', async () => {
      mockGetExperiment.mockResolvedValue(
        experimentResponseFixture({ id: 'exp-d', projectId: 'proj-1' })
      );
      mockDeleteExperiment.mockResolvedValue(undefined);
      const exp = await Experiment.get({
        id: 'exp-d',
        projectId: 'proj-1',
      });
      await exp!.delete();
      expect(mockDeleteExperiment).toHaveBeenCalledWith(
        {},
        { projectId: 'proj-1', experimentId: 'exp-d' }
      );
      expect(exp!.isDeleted()).toBe(true);
    });

    test('test delete on local-only throws', async () => {
      const exp = new Experiment({ name: 'x', projectId: 'p' });
      await expect(exp.delete()).rejects.toThrow(
        'Experiment ID is not set'
      );
    });
  });

  describe('addTag', () => {
    test('test addTag POSTs and refreshes', async () => {
      mockGetExperiment.mockResolvedValue(
        experimentResponseFixture({ id: 'exp-t', projectId: 'proj-1' })
      );
      mockSetTag.mockResolvedValue({
        id: 'tag-1',
        key: 'env',
        value: 'prod',
        tagType: 'generic',
        projectId: 'proj-1',
        runId: 'exp-t',
        createdBy: 'user-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      const exp = await Experiment.get({
        id: 'exp-t',
        projectId: 'proj-1',
      });
      await exp!.addTag({ key: 'env', value: 'prod' });
      expect(mockSetTag).toHaveBeenCalledWith(
        {},
        {
          projectId: 'proj-1',
          experimentId: 'exp-t',
          body: { key: 'env', value: 'prod', tagType: 'generic' },
        }
      );
    });

    test('test addTag on local-only throws', async () => {
      const exp = new Experiment({ name: 'x', projectId: 'p' });
      await expect(
        exp.addTag({ key: 'a', value: 'b' })
      ).rejects.toThrow('Experiment ID is not set');
    });
  });

  describe('project relationship', () => {
    test('test project() returns null when no projectId', async () => {
      const exp = new Experiment({ name: 'x' });
      const project = await exp.project();
      expect(project).toBeNull();
    });
  });
});
