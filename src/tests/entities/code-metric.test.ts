import { describe, test, expect, afterEach, vi } from 'vitest';
import { BaseEntity } from '../../entities/base-entity.js';
import { CodeMetric } from '../../entities/code-metric.js';
import { GalileoConfig } from '../../lib/galileo-config.js';
import { scorerResponseFixture } from './_fixtures.js';

const {
  mockGetScorer,
  mockDeleteScorer,
  mockReadFile,
  mockValidateCode,
  mockGetValidateTaskResult,
  mockCreateScorer,
  mockCreateCodeVersion,
} = vi.hoisted(() => ({
  mockGetScorer: vi.fn(),
  mockDeleteScorer: vi.fn(),
  mockReadFile: vi.fn(),
  mockValidateCode: vi.fn(),
  mockGetValidateTaskResult: vi.fn(),
  mockCreateScorer: vi.fn(),
  mockCreateCodeVersion: vi.fn(),
}));

vi.mock('../../index.js', () => ({
  GalileoGenerated: vi.fn().mockImplementation(() => ({
    prompts: {
      getScorerScorersScorerIdGet: mockGetScorer,
      deleteScorerScorersScorerIdDelete: mockDeleteScorer,
      validateCodeScorerScorersCodeValidatePost: mockValidateCode,
      getValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet:
        mockGetValidateTaskResult,
      createScorersPost: mockCreateScorer,
      createCodeScorerVersionScorersScorerIdVersionCodePost:
        mockCreateCodeVersion,
    },
  })),
  SDKOptions: {},
}));

vi.mock('fs/promises', () => ({
  readFile: mockReadFile,
}));

describe('CodeMetric', () => {
  afterEach(() => {
    vi.clearAllMocks();
    GalileoConfig.reset();
    BaseEntity.resetForTesting();
  });

  describe('constructor', () => {
    test('test new CodeMetric starts LOCAL_ONLY with default code=null', () => {
      const m = new CodeMetric({ name: 'cm' });
      expect(m.isLocalOnly()).toBe(true);
      expect(m.scorerType).toBe('code');
      expect(m.code).toBeNull();
      expect(m.requiredMetrics).toEqual([]);
    });

    test('test new CodeMetric retains init values', () => {
      const m = new CodeMetric({
        name: 'cm',
        code: 'function score(){}',
        nodeLevel: 'span',
        requiredMetrics: ['correctness'],
      });
      expect(m.code).toBe('function score(){}');
      expect(m.nodeLevel).toBe('span');
      expect(m.requiredMetrics).toEqual(['correctness']);
    });
  });

  describe('_fromApi', () => {
    test('test _fromApi sets state SYNCED', () => {
      const m = CodeMetric._fromApi(
        scorerResponseFixture({ id: 'cm-1', scorerType: 'code' })
      );
      expect(m.id).toBe('cm-1');
      expect(m.isSynced()).toBe(true);
    });
  });

  describe('create', () => {
    test('test create requires code to be set', async () => {
      const m = new CodeMetric({ name: 'cm' });
      await expect(m.create()).rejects.toThrow(/requires `code`/);
    });

    test('test create orchestrates validate -> poll -> createScorer -> createVersion', async () => {
      mockValidateCode.mockResolvedValue({ taskId: 'task-1' });
      mockGetValidateTaskResult.mockResolvedValue({ status: 'SUCCESS' });
      mockCreateScorer.mockResolvedValue(
        scorerResponseFixture({
          id: 'scorer-new',
          name: 'cm',
          scorerType: 'code',
          userPrompt: 'def x(): pass',
        })
      );
      mockCreateCodeVersion.mockResolvedValue({ version: 1 });

      const m = new CodeMetric({ name: 'cm', code: 'def x(): pass' });
      const result = await m.create();

      expect(result).toBe(m);
      expect(mockValidateCode).toHaveBeenCalledTimes(1);
      expect(mockGetValidateTaskResult).toHaveBeenCalledWith(
        {},
        { taskId: 'task-1' }
      );
      expect(mockCreateScorer).toHaveBeenCalledWith(
        {},
        {
          name: 'cm',
          scorerType: 'code',
          userPrompt: 'def x(): pass',
        }
      );
      expect(mockCreateCodeVersion).toHaveBeenCalledTimes(1);
      const versionCall = mockCreateCodeVersion.mock.calls[0]!;
      expect(versionCall[1].scorerId).toBe('scorer-new');
      expect(versionCall[1].body.validationResult).toBe(
        JSON.stringify({ status: 'SUCCESS' })
      );
      expect(m.id).toBe('scorer-new');
      expect(m.isSynced()).toBe(true);
    });

    test('test create transitions to FAILED_SYNC when validation returns FAILURE', async () => {
      mockValidateCode.mockResolvedValue({ taskId: 'task-1' });
      mockGetValidateTaskResult.mockResolvedValue({
        status: 'FAILURE',
      });

      const m = new CodeMetric({ name: 'cm', code: 'bad' });
      await expect(m.create()).rejects.toThrow(/status 'FAILURE'/);
      expect(m.hasFailed()).toBe(true);
      expect(mockCreateScorer).not.toHaveBeenCalled();
    });

    test('test create surfaces createScorer failure as FAILED_SYNC', async () => {
      mockValidateCode.mockResolvedValue({ taskId: 'task-1' });
      mockGetValidateTaskResult.mockResolvedValue({ status: 'SUCCESS' });
      mockCreateScorer.mockRejectedValue(new Error('500: server burned'));

      const m = new CodeMetric({ name: 'cm', code: 'def x(): pass' });
      await expect(m.create()).rejects.toThrow('500: server burned');
      expect(m.hasFailed()).toBe(true);
      expect(mockCreateCodeVersion).not.toHaveBeenCalled();
    });
  });

  describe('loadCode', () => {
    test('test loadCode reads file contents', async () => {
      mockReadFile.mockResolvedValue('async function score(){ return 1; }');
      const m = new CodeMetric({ name: 'cm' });
      await m.loadCode({ path: '/tmp/score.js' });
      expect(mockReadFile).toHaveBeenCalledWith('/tmp/score.js', 'utf8');
      expect(m.code).toBe('async function score(){ return 1; }');
    });
  });

  describe('refresh', () => {
    test('test refresh on LOCAL_ONLY throws', async () => {
      const m = new CodeMetric({ name: 'x' });
      await expect(m.refresh()).rejects.toThrow('Metric ID is not set');
    });

    test('test refresh hydrates from server', async () => {
      const m = CodeMetric._fromApi(
        scorerResponseFixture({
          id: 'cm',
          scorerType: 'code',
          userPrompt: 'orig',
        })
      );
      expect(m.code).toBe('orig');
      mockGetScorer.mockResolvedValue(
        scorerResponseFixture({
          id: 'cm',
          scorerType: 'code',
          userPrompt: 'updated',
        })
      );
      await m.refresh();
      expect(m.code).toBe('updated');
    });
  });

  describe('delete', () => {
    test('test delete on local-only throws', async () => {
      const m = new CodeMetric({ name: 'x' });
      await expect(m.delete()).rejects.toThrow('Metric ID is not set');
    });

    test('test delete on synced transitions to DELETED', async () => {
      mockDeleteScorer.mockResolvedValue({ id: 'a' });
      const m = CodeMetric._fromApi(
        scorerResponseFixture({ id: 'cm', scorerType: 'code' })
      );
      await m.delete();
      expect(m.isDeleted()).toBe(true);
    });
  });

  describe('state machine', () => {
    test('test setting name on SYNCED flips DIRTY', () => {
      const m = CodeMetric._fromApi(
        scorerResponseFixture({ id: 'a', scorerType: 'code' })
      );
      m.name = 'renamed';
      expect(m.isDirty()).toBe(true);
    });

    test('test save() on DIRTY throws without _save override', async () => {
      const m = CodeMetric._fromApi(
        scorerResponseFixture({ id: 'a', scorerType: 'code' })
      );
      m.name = 'renamed';
      await expect(m.save()).rejects.toThrow(
        'CodeMetric does not support updates after creation'
      );
    });
  });
});
