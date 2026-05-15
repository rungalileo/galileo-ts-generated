import { describe, test, expect, afterEach, vi } from 'vitest';
import { BaseEntity } from '../../entities/base-entity.js';
import { BuiltInMetrics, Metric } from '../../entities/metric.js';
import { LlmMetric } from '../../entities/llm-metric.js';
import { CodeMetric } from '../../entities/code-metric.js';
import { GalileoMetric } from '../../entities/galileo-metric.js';
import { GalileoConfig } from '../../lib/galileo-config.js';
import {
  listScorersResponseFixture,
  scorerResponseFixture,
} from './_fixtures.js';

const { mockGetScorer, mockListScorers, mockDeleteScorer } = vi.hoisted(() => ({
  mockGetScorer: vi.fn(),
  mockListScorers: vi.fn(),
  mockDeleteScorer: vi.fn(),
}));

vi.mock('../../index.js', () => ({
  GalileoGenerated: vi.fn().mockImplementation(() => ({
    prompts: {
      getScorerScorersScorerIdGet: mockGetScorer,
      listScorersWithFiltersScorersListPost: mockListScorers,
      deleteScorerScorersScorerIdDelete: mockDeleteScorer,
    },
  })),
  SDKOptions: {},
}));

describe('Metric', () => {
  afterEach(() => {
    vi.clearAllMocks();
    GalileoConfig.reset();
    BaseEntity.resetForTesting();
  });

  describe('BuiltInMetrics accessor', () => {
    test('test Metric.metrics exposes built-in scorer-type keys', () => {
      expect(Metric.metrics).toBe(BuiltInMetrics);
      expect(Metric.scorers).toBe(BuiltInMetrics);
      expect(BuiltInMetrics.Llm).toBe('llm');
      expect(BuiltInMetrics.Code).toBe('code');
    });
  });

  describe('polymorphic dispatch', () => {
    test('test _createMetricFromType returns LlmMetric for scorerType=llm', async () => {
      const m = await Metric._createMetricFromType(
        scorerResponseFixture({ scorerType: 'llm' })
      );
      expect(m).toBeInstanceOf(LlmMetric);
    });

    test('test _createMetricFromType returns CodeMetric for scorerType=code', async () => {
      const m = await Metric._createMetricFromType(
        scorerResponseFixture({ scorerType: 'code' })
      );
      expect(m).toBeInstanceOf(CodeMetric);
    });

    test('test _createMetricFromType returns GalileoMetric for scorerType=preset', async () => {
      const m = await Metric._createMetricFromType(
        scorerResponseFixture({ scorerType: 'preset' })
      );
      expect(m).toBeInstanceOf(GalileoMetric);
    });

    test('test _createMetricFromType returns GalileoMetric for scorerType=luna', async () => {
      const m = await Metric._createMetricFromType(
        scorerResponseFixture({ scorerType: 'luna' })
      );
      expect(m).toBeInstanceOf(GalileoMetric);
    });
  });

  describe('static get', () => {
    test('test get by id returns the right subclass', async () => {
      mockGetScorer.mockResolvedValue(
        scorerResponseFixture({ id: 'sc-x', scorerType: 'llm' })
      );
      const m = await Metric.get({ id: 'sc-x' });
      expect(mockGetScorer).toHaveBeenCalledWith({}, { scorerId: 'sc-x' });
      expect(m).toBeInstanceOf(LlmMetric);
      expect(m!.id).toBe('sc-x');
    });

    test('test get with both id and name throws', async () => {
      await expect(
        Metric.get({ id: 'a', name: 'b' })
      ).rejects.toThrow('provide exactly one');
    });

    test('test get with neither throws', async () => {
      await expect(Metric.get({})).rejects.toThrow('provide either');
    });

    test('test get by name filters list', async () => {
      mockListScorers.mockResolvedValue(
        listScorersResponseFixture({
          scorers: [
            scorerResponseFixture({ name: 'foo' }),
            scorerResponseFixture({ name: 'bar' }),
          ],
        })
      );
      const m = await Metric.get({ name: 'bar' });
      expect(m!.name).toBe('bar');
    });

    test('test get returns null on 404', async () => {
      mockGetScorer.mockRejectedValue(
        Object.assign(new Error('not found'), { statusCode: 404 })
      );
      const m = await Metric.get({ id: 'absent' });
      expect(m).toBeNull();
    });
  });

  describe('static list', () => {
    test('test list returns dispatched subclasses', async () => {
      mockListScorers.mockResolvedValue(
        listScorersResponseFixture({
          scorers: [
            scorerResponseFixture({ scorerType: 'llm', id: 'a' }),
            scorerResponseFixture({ scorerType: 'code', id: 'b' }),
            scorerResponseFixture({ scorerType: 'preset', id: 'c' }),
          ],
        })
      );
      const list = await Metric.list();
      expect(list).toHaveLength(3);
      expect(list[0]).toBeInstanceOf(LlmMetric);
      expect(list[1]).toBeInstanceOf(CodeMetric);
      expect(list[2]).toBeInstanceOf(GalileoMetric);
    });

    test('test list with nameFilter sends filters with eq operator', async () => {
      mockListScorers.mockResolvedValue(listScorersResponseFixture());
      await Metric.list({ nameFilter: 'foo' });
      expect(mockListScorers).toHaveBeenCalledWith(
        {},
        {
          body: {
            filters: [{ name: 'name', operator: 'eq', value: 'foo' }],
          },
        }
      );
    });

    test('test list with limit forwards limit', async () => {
      mockListScorers.mockResolvedValue(listScorersResponseFixture());
      await Metric.list({ limit: 50 });
      expect(mockListScorers).toHaveBeenCalledWith(
        {},
        expect.objectContaining({ limit: 50 })
      );
    });

    test('test list without nameFilter sends empty filters', async () => {
      mockListScorers.mockResolvedValue(listScorersResponseFixture());
      await Metric.list();
      const callArgs = mockListScorers.mock.calls[0]![1] as {
        body: { filters?: unknown };
      };
      expect(callArgs.body.filters).toBeUndefined();
    });

    test('test list with empty-string nameFilter sends filter with empty value', async () => {
      mockListScorers.mockResolvedValue(listScorersResponseFixture());
      await Metric.list({ nameFilter: '' });
      expect(mockListScorers).toHaveBeenCalledWith(
        {},
        {
          body: {
            filters: [{ name: 'name', operator: 'eq', value: '' }],
          },
        }
      );
    });
  });
});
