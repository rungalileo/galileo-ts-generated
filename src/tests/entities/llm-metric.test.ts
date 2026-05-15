import { describe, test, expect, afterEach, vi } from 'vitest';
import { BaseEntity } from '../../entities/base-entity.js';
import { LlmMetric } from '../../entities/llm-metric.js';
import { GalileoConfig } from '../../lib/galileo-config.js';
import { scorerResponseFixture } from './_fixtures.js';

const {
  mockGetScorer,
  mockDeleteScorer,
  mockCreateScorer,
  mockCreateLlmVersion,
} = vi.hoisted(() => ({
  mockGetScorer: vi.fn(),
  mockDeleteScorer: vi.fn(),
  mockCreateScorer: vi.fn(),
  mockCreateLlmVersion: vi.fn(),
}));

vi.mock('../../index.js', () => ({
  GalileoGenerated: vi.fn().mockImplementation(() => ({
    prompts: {
      getScorerScorersScorerIdGet: mockGetScorer,
      deleteScorerScorersScorerIdDelete: mockDeleteScorer,
      createScorersPost: mockCreateScorer,
      createLlmScorerVersionScorersScorerIdVersionLlmPost: mockCreateLlmVersion,
    },
  })),
  SDKOptions: {},
}));

describe('LlmMetric', () => {
  afterEach(() => {
    vi.clearAllMocks();
    GalileoConfig.reset();
    BaseEntity.resetForTesting();
  });

  describe('constructor', () => {
    test('test new LlmMetric uses modern names', () => {
      const m = new LlmMetric({
        name: 'judge',
        prompt: 'Is this good?',
        model: 'gpt-4',
        judges: 3,
      });
      expect(m.name).toBe('judge');
      expect(m.scorerType).toBe('llm');
      expect(m.prompt).toBe('Is this good?');
      expect(m.model).toBe('gpt-4');
      expect(m.judges).toBe(3);
    });

    test('test legacy userPrompt/modelName/numJudges fall back', () => {
      const m = new LlmMetric({
        name: 'judge',
        userPrompt: 'legacy',
        modelName: 'gpt-3.5',
        numJudges: 1,
      });
      expect(m.prompt).toBe('legacy');
      expect(m.model).toBe('gpt-3.5');
      expect(m.judges).toBe(1);
    });

    test('test modern takes precedence over legacy', () => {
      const m = new LlmMetric({
        name: 'j',
        prompt: 'new',
        userPrompt: 'old',
        model: 'modern',
        modelName: 'legacy',
      });
      expect(m.prompt).toBe('new');
      expect(m.model).toBe('modern');
    });

    test('test constructor without name throws', () => {
      expect(() => new LlmMetric({ name: '' })).toThrow(TypeError);
    });

    test('test LlmMetric starts LOCAL_ONLY', () => {
      const m = new LlmMetric({ name: 'j' });
      expect(m.isLocalOnly()).toBe(true);
    });
  });

  describe('_fromApi', () => {
    test('test _fromApi maps userPrompt to prompt', () => {
      const m = LlmMetric._fromApi(
        scorerResponseFixture({
          name: 'eval',
          scorerType: 'llm',
          userPrompt: 'Is this correct?',
        })
      );
      expect(m.prompt).toBe('Is this correct?');
      expect(m.isSynced()).toBe(true);
    });

    test('test _fromApi hydrates id + tags', () => {
      const m = LlmMetric._fromApi(
        scorerResponseFixture({
          id: 'lmm-1',
          name: 'm',
          scorerType: 'llm',
          tags: ['safety', 'eval'],
        })
      );
      expect(m.id).toBe('lmm-1');
      expect(m.tags).toEqual(['safety', 'eval']);
    });
  });

  describe('create', () => {
    test('test create runs createScorer then createLlmVersion and hydrates', async () => {
      mockCreateScorer.mockResolvedValue(
        scorerResponseFixture({
          id: 'lm-new',
          name: 'judge',
          scorerType: 'llm',
          userPrompt: 'Is this good?',
        })
      );
      mockCreateLlmVersion.mockResolvedValue({ version: 1 });

      const m = new LlmMetric({
        name: 'judge',
        prompt: 'Is this good?',
        model: 'gpt-4',
        judges: 3,
        cotEnabled: true,
      });
      const result = await m.create();

      expect(result).toBe(m);
      expect(mockCreateScorer).toHaveBeenCalledWith(
        {},
        {
          name: 'judge',
          scorerType: 'llm',
          userPrompt: 'Is this good?',
        }
      );
      expect(mockCreateLlmVersion).toHaveBeenCalledWith(
        {},
        {
          scorerId: 'lm-new',
          body: {
            userPrompt: 'Is this good?',
            modelName: 'gpt-4',
            numJudges: 3,
            cotEnabled: true,
            outputType: undefined,
          },
        }
      );
      expect(m.id).toBe('lm-new');
      expect(m.isSynced()).toBe(true);
    });

    test('test create transitions to FAILED_SYNC on createScorer error', async () => {
      mockCreateScorer.mockRejectedValue(new Error('nope'));
      const m = new LlmMetric({ name: 'judge', prompt: 'x' });
      await expect(m.create()).rejects.toThrow('nope');
      expect(m.hasFailed()).toBe(true);
      expect(mockCreateLlmVersion).not.toHaveBeenCalled();
    });

    test('test create transitions to FAILED_SYNC on createLlmVersion error', async () => {
      mockCreateScorer.mockResolvedValue(
        scorerResponseFixture({ id: 'lm-new', scorerType: 'llm' })
      );
      mockCreateLlmVersion.mockRejectedValue(new Error('version failed'));
      const m = new LlmMetric({ name: 'judge', prompt: 'x' });
      await expect(m.create()).rejects.toThrow('version failed');
      expect(m.hasFailed()).toBe(true);
    });
  });

  describe('refresh', () => {
    test('test refresh on LOCAL_ONLY throws', async () => {
      const m = new LlmMetric({ name: 'j' });
      await expect(m.refresh()).rejects.toThrow('Metric ID is not set');
    });

    test('test refresh on synced entity refetches', async () => {
      mockGetScorer.mockResolvedValue(
        scorerResponseFixture({ scorerType: 'llm', id: 'a' })
      );
      const m = LlmMetric._fromApi(
        scorerResponseFixture({ id: 'a', scorerType: 'llm' })
      );
      mockGetScorer.mockResolvedValue(
        scorerResponseFixture({
          id: 'a',
          scorerType: 'llm',
          userPrompt: 'updated',
        })
      );
      await m.refresh();
      expect(m.prompt).toBe('updated');
    });
  });

  describe('delete', () => {
    test('test delete transitions DELETED', async () => {
      mockDeleteScorer.mockResolvedValue({ id: 'a' });
      const m = LlmMetric._fromApi(
        scorerResponseFixture({ id: 'sc-1', scorerType: 'llm' })
      );
      await m.delete();
      expect(mockDeleteScorer).toHaveBeenCalledWith({}, { scorerId: 'sc-1' });
      expect(m.isDeleted()).toBe(true);
    });

    test('test delete on backend 404 is idempotent and ends in DELETED', async () => {
      const m = LlmMetric._fromApi(
        scorerResponseFixture({ id: 'sc-1', scorerType: 'llm' })
      );
      mockDeleteScorer.mockRejectedValue(
        Object.assign(new Error('not found'), { statusCode: 404 })
      );
      await expect(m.delete()).resolves.toBeUndefined();
      expect(m.isDeleted()).toBe(true);
      expect(m.hasFailed()).toBe(false);
    });

    test('test delete after successful delete throws and keeps DELETED state', async () => {
      mockDeleteScorer.mockResolvedValue({ id: 'a' });
      const m = LlmMetric._fromApi(
        scorerResponseFixture({ id: 'sc-1', scorerType: 'llm' })
      );
      await m.delete();
      mockDeleteScorer.mockClear();
      await expect(m.delete()).rejects.toThrow(
        'Cannot perform operation on deleted entity'
      );
      expect(mockDeleteScorer).not.toHaveBeenCalled();
      expect(m.isDeleted()).toBe(true);
    });
  });
});
