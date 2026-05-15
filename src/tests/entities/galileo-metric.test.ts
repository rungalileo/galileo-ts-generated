import { describe, test, expect, afterEach, vi } from 'vitest';
import { BaseEntity } from '../../entities/base-entity.js';
import { GalileoMetric } from '../../entities/galileo-metric.js';
import { GalileoConfig } from '../../lib/galileo-config.js';
import { scorerResponseFixture } from './_fixtures.js';

const { mockGetScorer, mockDeleteScorer } = vi.hoisted(() => ({
  mockGetScorer: vi.fn(),
  mockDeleteScorer: vi.fn(),
}));

vi.mock('../../index.js', () => ({
  GalileoGenerated: vi.fn().mockImplementation(() => ({
    prompts: {
      getScorerScorersScorerIdGet: mockGetScorer,
      deleteScorerScorersScorerIdDelete: mockDeleteScorer,
    },
  })),
  SDKOptions: {},
}));

describe('GalileoMetric', () => {
  afterEach(() => {
    vi.clearAllMocks();
    GalileoConfig.reset();
    BaseEntity.resetForTesting();
  });

  describe('constructor', () => {
    test('test default scorerType is preset', () => {
      const m = new GalileoMetric({ name: 'preset-eval' });
      expect(m.scorerType).toBe('preset');
    });

    test('test luna scorerType passed through', () => {
      const m = new GalileoMetric({ name: 'luna', scorerType: 'luna' });
      expect(m.scorerType).toBe('luna');
    });
  });

  describe('_fromApi', () => {
    test('test _fromApi with preset scorerType', () => {
      const m = GalileoMetric._fromApi(
        scorerResponseFixture({ id: 'g-1', scorerType: 'preset' })
      );
      expect(m.scorerType).toBe('preset');
      expect(m.id).toBe('g-1');
    });

    test('test _fromApi with luna scorerType', () => {
      const m = GalileoMetric._fromApi(
        scorerResponseFixture({ id: 'g-2', scorerType: 'luna' })
      );
      expect(m.scorerType).toBe('luna');
    });
  });

  describe('lifecycle', () => {
    test('test create throws (preset is server-managed)', async () => {
      const m = new GalileoMetric({ name: 'g' });
      await expect(m.create()).rejects.toThrow(/server-managed/i);
    });

    test('test refresh hydrates from getScorer', async () => {
      mockGetScorer.mockResolvedValue(
        scorerResponseFixture({
          id: 'g',
          scorerType: 'preset',
          tags: ['a'],
        })
      );
      const m = GalileoMetric._fromApi(
        scorerResponseFixture({ id: 'g', scorerType: 'preset' })
      );
      await m.refresh();
      expect(m.tags).toEqual(['a']);
    });
  });
});
