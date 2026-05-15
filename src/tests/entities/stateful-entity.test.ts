import { describe, test, expect, afterEach, vi } from 'vitest';
import { BaseEntity } from '../../entities/base-entity.js';
import { StatefulEntity, SyncState } from '../../entities/stateful-entity.js';
import { GalileoConfig } from '../../lib/galileo-config.js';

vi.mock('../../index.js', () => ({
  GalileoGenerated: vi.fn().mockImplementation(() => ({})),
  SDKOptions: {},
}));

class TestEntity extends StatefulEntity {
  public refreshCalls = 0;
  public createCalls = 0;
  public saveCalls = 0;
  public shouldFailOnCreate = false;
  public shouldFailOnSave = false;
  public supportsSave = true;
  #name: string;

  constructor(name: string) {
    super();
    this.#name = name;
  }

  get name(): string {
    return this.#name;
  }

  set name(value: string) {
    if (value !== this.#name && this.isSynced()) {
      this._markDirty();
    }
    this.#name = value;
  }

  async refresh(): Promise<this> {
    this.refreshCalls += 1;
    this._setState(SyncState.Synced);
    return this;
  }

  async create(): Promise<this> {
    this.createCalls += 1;
    if (this.shouldFailOnCreate) {
      const err = new Error('create failed');
      this._setState(SyncState.FailedSync, err);
      throw err;
    }
    this._setState(SyncState.Synced);
    return this;
  }

  protected override async _save(): Promise<this> {
    if (!this.supportsSave) {
      return super._save();
    }
    this.saveCalls += 1;
    if (this.shouldFailOnSave) {
      const err = new Error('save failed');
      this._setState(SyncState.FailedSync, err);
      throw err;
    }
    this._setState(SyncState.Synced);
    return this;
  }

  hydrate(): void {
    this._setState(SyncState.Synced);
  }

  forceDelete(): void {
    this._setState(SyncState.Deleted);
  }

  callMarkDirty(): void {
    this._markDirty();
  }
}

class NoSaveEntity extends StatefulEntity {
  async refresh(): Promise<this> {
    this._setState(SyncState.Synced);
    return this;
  }
  async create(): Promise<this> {
    this._setState(SyncState.Synced);
    return this;
  }
  hydrate(): void {
    this._setState(SyncState.Synced);
  }
  setStateDirty(): void {
    this._setState(SyncState.Dirty);
  }
}

describe('StatefulEntity', () => {
  afterEach(() => {
    vi.clearAllMocks();
    GalileoConfig.reset();
    BaseEntity.resetForTesting();
  });

  describe('initial state', () => {
    test('test new instance starts in LOCAL_ONLY', () => {
      const entity = new TestEntity('hello');
      expect(entity.syncState).toBe(SyncState.LocalOnly);
      expect(entity.isLocalOnly()).toBe(true);
      expect(entity.isSynced()).toBe(false);
      expect(entity.isDirty()).toBe(false);
      expect(entity.hasFailed()).toBe(false);
      expect(entity.isDeleted()).toBe(false);
      expect(entity.lastError).toBeNull();
    });
  });

  describe('predicate methods', () => {
    test('test isSynced returns true after hydrate', () => {
      const entity = new TestEntity('a');
      entity.hydrate();
      expect(entity.isSynced()).toBe(true);
      expect(entity.isLocalOnly()).toBe(false);
    });

    test('test isDeleted returns true after delete state', () => {
      const entity = new TestEntity('a');
      entity.forceDelete();
      expect(entity.isDeleted()).toBe(true);
      expect((entity as unknown as { deleted: boolean }).deleted).toBe(true);
    });
  });

  describe('dirty tracking', () => {
    test('test setting tracked field on SYNCED entity flips to DIRTY', () => {
      const entity = new TestEntity('original');
      entity.hydrate();
      expect(entity.isSynced()).toBe(true);
      entity.name = 'changed';
      expect(entity.isDirty()).toBe(true);
    });

    test('test setting tracked field on LOCAL_ONLY entity stays LOCAL_ONLY', () => {
      const entity = new TestEntity('original');
      entity.name = 'changed';
      expect(entity.isLocalOnly()).toBe(true);
    });

    test('test setting same value does not flip state', () => {
      const entity = new TestEntity('original');
      entity.hydrate();
      entity.name = 'original';
      expect(entity.isSynced()).toBe(true);
    });

    test('test _markDirty has no effect on LOCAL_ONLY state', () => {
      const entity = new TestEntity('a');
      entity.callMarkDirty();
      expect(entity.isLocalOnly()).toBe(true);
    });

    test('test _markDirty has no effect on DIRTY state', () => {
      const entity = new TestEntity('a');
      entity.hydrate();
      entity.name = 'b';
      expect(entity.isDirty()).toBe(true);
      entity.callMarkDirty();
      expect(entity.isDirty()).toBe(true);
    });
  });

  describe('save dispatch', () => {
    test('test save on LOCAL_ONLY calls create', async () => {
      const entity = new TestEntity('a');
      const result = await entity.save();
      expect(result).toBe(entity);
      expect(entity.createCalls).toBe(1);
      expect(entity.saveCalls).toBe(0);
      expect(entity.isSynced()).toBe(true);
    });

    test('test save on SYNCED is a no-op', async () => {
      const entity = new TestEntity('a');
      entity.hydrate();
      const result = await entity.save();
      expect(result).toBe(entity);
      expect(entity.createCalls).toBe(0);
      expect(entity.saveCalls).toBe(0);
      expect(entity.isSynced()).toBe(true);
    });

    test('test save on DIRTY calls _save', async () => {
      const entity = new TestEntity('a');
      entity.hydrate();
      entity.name = 'b';
      expect(entity.isDirty()).toBe(true);
      const result = await entity.save();
      expect(result).toBe(entity);
      expect(entity.saveCalls).toBe(1);
      expect(entity.isSynced()).toBe(true);
    });

    test('test save on DELETED throws', async () => {
      const entity = new TestEntity('a');
      entity.forceDelete();
      await expect(entity.save()).rejects.toThrow(
        'Cannot save a deleted testentity.'
      );
    });

    test('test save on FAILED_SYNC throws with refresh hint', async () => {
      const entity = new TestEntity('a');
      entity.shouldFailOnCreate = true;
      await expect(entity.create()).rejects.toThrow('create failed');
      expect(entity.hasFailed()).toBe(true);
      await expect(entity.save()).rejects.toThrow(
        'Cannot save a testentity in FAILED_SYNC state. Call refresh() to re-sync from the API, then retry your changes.'
      );
    });

    test('test save on DIRTY for entity without _save throws', async () => {
      const entity = new NoSaveEntity();
      entity.setStateDirty();
      await expect(entity.save()).rejects.toThrow(
        'NoSaveEntity does not support updates after creation'
      );
    });
  });

  describe('failure paths', () => {
    test('test create failure transitions to FAILED_SYNC with lastError', async () => {
      const entity = new TestEntity('a');
      entity.shouldFailOnCreate = true;
      await expect(entity.create()).rejects.toThrow('create failed');
      expect(entity.hasFailed()).toBe(true);
      expect(entity.lastError).toBeInstanceOf(Error);
      expect(entity.lastError?.message).toBe('create failed');
    });

    test('test _save failure transitions to FAILED_SYNC', async () => {
      const entity = new TestEntity('a');
      entity.hydrate();
      entity.name = 'b';
      entity.shouldFailOnSave = true;
      await expect(entity.save()).rejects.toThrow('save failed');
      expect(entity.hasFailed()).toBe(true);
      expect(entity.lastError?.message).toBe('save failed');
    });
  });

  describe('refresh', () => {
    test('test refresh transitions to SYNCED', async () => {
      const entity = new TestEntity('a');
      const result = await entity.refresh();
      expect(result).toBe(entity);
      expect(entity.refreshCalls).toBe(1);
      expect(entity.isSynced()).toBe(true);
    });

    test('test refresh after failure clears error', async () => {
      const entity = new TestEntity('a');
      entity.shouldFailOnCreate = true;
      await expect(entity.create()).rejects.toThrow('create failed');
      expect(entity.lastError).not.toBeNull();
      await entity.refresh();
      expect(entity.isSynced()).toBe(true);
      expect(entity.lastError).toBeNull();
    });
  });
});
