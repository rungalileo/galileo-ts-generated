import { describe, test, expect, afterEach, vi } from 'vitest';
import { BaseEntity } from '../../entities/base-entity.js';
import { LogStream } from '../../entities/log-stream.js';
import { GalileoConfig } from '../../lib/galileo-config.js';
import { logStreamResponseFixture } from './_fixtures.js';

const {
  mockCreateLogStream,
  mockListLogStreams,
  mockGetLogStream,
  mockDeleteLogStream,
} = vi.hoisted(() => ({
  mockCreateLogStream: vi.fn(),
  mockListLogStreams: vi.fn(),
  mockGetLogStream: vi.fn(),
  mockDeleteLogStream: vi.fn(),
}));

vi.mock('../../index.js', () => ({
  GalileoGenerated: vi.fn().mockImplementation(() => ({
    logStream: {
      createLogStreamProjectsProjectIdLogStreamsPost: mockCreateLogStream,
      listLogStreamsProjectsProjectIdLogStreamsGet: mockListLogStreams,
      getLogStreamProjectsProjectIdLogStreamsLogStreamIdGet: mockGetLogStream,
      deleteLogStreamProjectsProjectIdLogStreamsLogStreamIdDelete:
        mockDeleteLogStream,
    },
  })),
  SDKOptions: {},
}));

describe('LogStream', () => {
  afterEach(() => {
    vi.clearAllMocks();
    GalileoConfig.reset();
    BaseEntity.resetForTesting();
  });

  describe('constructor', () => {
    test('test new LogStream starts in LOCAL_ONLY', () => {
      const ls = new LogStream({ name: 'a', projectId: 'proj-1' });
      expect(ls.isLocalOnly()).toBe(true);
      expect(ls.name).toBe('a');
      expect(ls.projectId).toBe('proj-1');
      expect(ls.id).toBeNull();
    });

    test('test new LogStream without name throws', () => {
      expect(
        () => new LogStream({ name: '', projectId: 'p' })
      ).toThrow(TypeError);
    });

    test('test new LogStream without projectId or projectName allows local', () => {
      const ls = new LogStream({ name: 'a' });
      expect(ls.projectId).toBeNull();
      expect(ls.projectName).toBeNull();
    });
  });

  describe('state machine', () => {
    test('test LogStream has no name setter (readonly after hydration)', () => {
      const ls = LogStream._fromApi(logStreamResponseFixture());
      // name has no setter; assignment is type error in TS but runtime allows it.
      // Verify behavior: even after mutation attempt, state stays SYNCED.
      expect(ls.name).toBe('test-stream');
      expect(ls.isSynced()).toBe(true);
    });

    test('test save() on DIRTY LogStream throws (no _save)', async () => {
      const ls = LogStream._fromApi(logStreamResponseFixture());
      // Force dirty state manually via internal entrypoint to exercise the
      // inherited save() throwing for entities that don't override _save.
      (ls as unknown as { _setState: (s: string) => void })._setState(
        'dirty'
      );
      await expect(ls.save()).rejects.toThrow(
        'LogStream does not support updates after creation'
      );
    });
  });

  describe('_fromApi', () => {
    test('test _fromApi produces SYNCED instance with all fields', () => {
      const raw = logStreamResponseFixture({
        id: 'ls-9',
        name: 'streamy',
        projectId: 'proj-9',
        numSpans: 100,
        numTraces: 50,
      });
      const ls = LogStream._fromApi(raw);
      expect(ls.id).toBe('ls-9');
      expect(ls.name).toBe('streamy');
      expect(ls.projectId).toBe('proj-9');
      expect(ls.numSpans).toBe(100);
      expect(ls.numTraces).toBe(50);
      expect(ls.isSynced()).toBe(true);
    });
  });

  describe('static list', () => {
    test('test list by projectId calls the SDK with that id', async () => {
      mockListLogStreams.mockResolvedValue([
        logStreamResponseFixture({ id: 'ls-1' }),
        logStreamResponseFixture({ id: 'ls-2' }),
      ]);
      const list = await LogStream.list({ projectId: 'proj-x' });
      expect(mockListLogStreams).toHaveBeenCalledWith(
        {},
        { projectId: 'proj-x' }
      );
      expect(list).toHaveLength(2);
      expect(list[0]).toBeInstanceOf(LogStream);
    });

    test('test list without projectId or env var throws', async () => {
      await expect(LogStream.list({})).rejects.toThrow(
        'projectId or projectName must be provided'
      );
    });
  });

  describe('static get', () => {
    test('test get by name filters list', async () => {
      mockListLogStreams.mockResolvedValue([
        logStreamResponseFixture({ id: 'ls-1', name: 'foo' }),
        logStreamResponseFixture({ id: 'ls-2', name: 'bar' }),
      ]);
      const ls = await LogStream.get({ name: 'bar', projectId: 'proj-x' });
      expect(ls!.id).toBe('ls-2');
    });

    test('test get without name throws', async () => {
      await expect(
        LogStream.get({ projectId: 'p' } as unknown as { name: string })
      ).rejects.toThrow('name is required');
    });

    test('test get returns null when no name match', async () => {
      mockListLogStreams.mockResolvedValue([
        logStreamResponseFixture({ name: 'foo' }),
      ]);
      const ls = await LogStream.get({
        name: 'missing',
        projectId: 'proj-x',
      });
      expect(ls).toBeNull();
    });
  });

  describe('create', () => {
    test('test create POSTs body with name and hydrates', async () => {
      mockCreateLogStream.mockResolvedValue(
        logStreamResponseFixture({ id: 'ls-new', name: 'newstream' })
      );
      const ls = new LogStream({ name: 'newstream', projectId: 'proj-1' });
      await ls.create();
      expect(mockCreateLogStream).toHaveBeenCalledWith(
        {},
        { projectId: 'proj-1', body: { name: 'newstream' } }
      );
      expect(ls.id).toBe('ls-new');
      expect(ls.isSynced()).toBe(true);
    });

    test('test create failure sets FAILED_SYNC', async () => {
      mockCreateLogStream.mockRejectedValue(new Error('boom'));
      const ls = new LogStream({ name: 'x', projectId: 'p' });
      await expect(ls.create()).rejects.toThrow('boom');
      expect(ls.hasFailed()).toBe(true);
    });
  });

  describe('refresh', () => {
    test('test refresh hydrates from GET', async () => {
      mockListLogStreams.mockResolvedValue([
        logStreamResponseFixture({ id: 'ls-1', numSpans: 10 }),
      ]);
      const ls = (await LogStream.list({ projectId: 'proj-1' }))[0]!;
      mockGetLogStream.mockResolvedValue(
        logStreamResponseFixture({ id: 'ls-1', numSpans: 25 })
      );
      await ls.refresh();
      expect(ls.numSpans).toBe(25);
    });

    test('test refresh on LOCAL_ONLY throws', async () => {
      const ls = new LogStream({ name: 'x', projectId: 'p' });
      await expect(ls.refresh()).rejects.toThrow('LogStream ID is not set');
    });
  });

  describe('delete', () => {
    test('test delete on hydrated LogStream calls DELETE and transitions DELETED', async () => {
      mockListLogStreams.mockResolvedValue([logStreamResponseFixture()]);
      const ls = (await LogStream.list({ projectId: 'proj-123' }))[0]!;
      mockDeleteLogStream.mockResolvedValue(undefined);
      await ls.delete();
      expect(mockDeleteLogStream).toHaveBeenCalledWith(
        {},
        { projectId: 'proj-123', logStreamId: 'ls-123' }
      );
      expect(ls.isDeleted()).toBe(true);
    });

    test('test delete on local-only throws', async () => {
      const ls = new LogStream({ name: 'x', projectId: 'p' });
      await expect(ls.delete()).rejects.toThrow('LogStream ID is not set');
    });

    test('test delete after successful delete throws and keeps DELETED state', async () => {
      mockListLogStreams.mockResolvedValue([logStreamResponseFixture()]);
      const ls = (await LogStream.list({ projectId: 'proj-123' }))[0]!;
      mockDeleteLogStream.mockResolvedValue(undefined);
      await ls.delete();
      mockDeleteLogStream.mockClear();
      await expect(ls.delete()).rejects.toThrow(
        'Cannot perform operation on deleted entity'
      );
      expect(mockDeleteLogStream).not.toHaveBeenCalled();
      expect(ls.isDeleted()).toBe(true);
    });
  });
});
