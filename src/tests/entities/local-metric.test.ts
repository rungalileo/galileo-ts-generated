import { describe, test, expect, afterEach, vi } from 'vitest';
import { BaseEntity } from '../../entities/base-entity.js';
import { LocalMetric } from '../../entities/local-metric.js';
import { GalileoConfig } from '../../lib/galileo-config.js';
import { scorerResponseFixture } from './_fixtures.js';

vi.mock('../../index.js', () => ({
  GalileoGenerated: vi.fn().mockImplementation(() => ({})),
  SDKOptions: {},
}));

describe('LocalMetric', () => {
  afterEach(() => {
    vi.clearAllMocks();
    GalileoConfig.reset();
    BaseEntity.resetForTesting();
  });

  test('test constructor retains scorerFn + types', () => {
    const fn = () => 1;
    const m = new LocalMetric({
      name: 'local',
      scorerFn: fn,
      scorableTypes: ['span'],
      aggregatableTypes: ['trace'],
    });
    expect(m.scorerFn).toBe(fn);
    expect(m.scorableTypes).toEqual(['span']);
    expect(m.aggregatableTypes).toEqual(['trace']);
  });

  test('test create throws client-side-only', async () => {
    const m = new LocalMetric({ name: 'l', scorerFn: () => 1 });
    await expect(m.create()).rejects.toThrow('client-side only');
  });

  test('test refresh throws client-side-only', async () => {
    const m = new LocalMetric({ name: 'l', scorerFn: () => 1 });
    await expect(m.refresh()).rejects.toThrow('client-side only');
  });

  test('test delete throws client-side-only', async () => {
    const m = new LocalMetric({ name: 'l', scorerFn: () => 1 });
    await expect(m.delete()).rejects.toThrow('client-side only');
  });

  test('test _fromApi throws client-side-only', () => {
    expect(() =>
      LocalMetric._fromApi(scorerResponseFixture())
    ).toThrow('client-side only');
  });

  test('test toLocalMetricConfig returns handoff struct', () => {
    const fn = () => 'good';
    const m = new LocalMetric({
      name: 'cfg',
      scorerFn: fn,
      scorableTypes: ['llm'],
      aggregatableTypes: ['trace'],
    });
    const cfg = m.toLocalMetricConfig();
    expect(cfg).toEqual({
      name: 'cfg',
      scorerFn: fn,
      scorableTypes: ['llm'],
      aggregatableTypes: ['trace'],
    });
  });
});
