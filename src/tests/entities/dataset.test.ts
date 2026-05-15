import { describe, test, expect, afterEach, vi } from 'vitest';
import { BaseEntity } from '../../entities/base-entity.js';
import { Dataset } from '../../entities/dataset.js';
import { GalileoConfig } from '../../lib/galileo-config.js';
import {
  datasetDBFixture,
  listDatasetResponseFixture,
} from './_fixtures.js';

const {
  mockCreateDataset,
  mockListDatasets,
  mockGetDataset,
  mockUpdateDataset,
  mockDeleteDataset,
  mockGetDatasetContent,
  mockUpdateDatasetContent,
  mockQueryDatasetVersions,
  mockGetDatasetVersionContent,
  mockExtendDataset,
} = vi.hoisted(() => ({
  mockCreateDataset: vi.fn(),
  mockListDatasets: vi.fn(),
  mockGetDataset: vi.fn(),
  mockUpdateDataset: vi.fn(),
  mockDeleteDataset: vi.fn(),
  mockGetDatasetContent: vi.fn(),
  mockUpdateDatasetContent: vi.fn(),
  mockQueryDatasetVersions: vi.fn(),
  mockGetDatasetVersionContent: vi.fn(),
  mockExtendDataset: vi.fn(),
}));

vi.mock('../../index.js', () => ({
  GalileoGenerated: vi.fn().mockImplementation(() => ({
    datasets: {
      createDatasetDatasetsPost: mockCreateDataset,
      listDatasetsDatasetsGet: mockListDatasets,
      getDatasetDatasetsDatasetIdGet: mockGetDataset,
      updateDatasetDatasetsDatasetIdPatch: mockUpdateDataset,
      deleteDatasetDatasetsDatasetIdDelete: mockDeleteDataset,
      getDatasetContentDatasetsDatasetIdContentGet: mockGetDatasetContent,
      updateDatasetContentDatasetsDatasetIdContentPatch:
        mockUpdateDatasetContent,
      queryDatasetVersionsDatasetsDatasetIdVersionsQueryPost:
        mockQueryDatasetVersions,
      getDatasetVersionContentDatasetsDatasetIdVersionsVersionIndexContentGet:
        mockGetDatasetVersionContent,
      extendDatasetContentDatasetsExtendPost: mockExtendDataset,
    },
  })),
  SDKOptions: {},
}));

describe('Dataset', () => {
  afterEach(() => {
    vi.clearAllMocks();
    GalileoConfig.reset();
    BaseEntity.resetForTesting();
  });

  describe('constructor', () => {
    test('test new Dataset starts in LOCAL_ONLY with empty content', () => {
      const ds = new Dataset({ name: 'hello' });
      expect(ds.isLocalOnly()).toBe(true);
      expect(ds.name).toBe('hello');
      expect(ds.id).toBeNull();
      expect(ds.content).toEqual([]);
    });

    test('test new Dataset with content stores local content', () => {
      const ds = new Dataset({
        name: 'a',
        content: [{ input: 'x', output: 'y' }],
      });
      expect(ds.content).toEqual([{ input: 'x', output: 'y' }]);
    });

    test('test new Dataset without name throws TypeError', () => {
      expect(() => new Dataset({ name: '' })).toThrow(TypeError);
    });
  });

  describe('state machine', () => {
    test('test setting name on SYNCED Dataset flips to DIRTY', () => {
      const ds = Dataset._fromApi(datasetDBFixture());
      expect(ds.isSynced()).toBe(true);
      ds.name = 'renamed';
      expect(ds.isDirty()).toBe(true);
    });

    test('test setting name on LOCAL_ONLY stays LOCAL_ONLY', () => {
      const ds = new Dataset({ name: 'a' });
      ds.name = 'b';
      expect(ds.isLocalOnly()).toBe(true);
    });

    test('test setting same name keeps state SYNCED', () => {
      const ds = Dataset._fromApi(datasetDBFixture({ name: 'same' }));
      ds.name = 'same';
      expect(ds.isSynced()).toBe(true);
    });
  });

  describe('_fromApi', () => {
    test('test _fromApi sets content to empty array', () => {
      const ds = Dataset._fromApi(datasetDBFixture({ id: 'ds-x' }));
      expect(ds.content).toEqual([]);
      expect(ds.id).toBe('ds-x');
      expect(ds.isSynced()).toBe(true);
    });

    test('test _fromApi hydrates all server fields', () => {
      const raw = datasetDBFixture({
        id: 'ds-1',
        name: 'fixt',
        numRows: 42,
        columnNames: ['a', 'b'],
        draft: true,
        currentVersionIndex: 3,
        projectCount: 2,
      });
      const ds = Dataset._fromApi(raw);
      expect(ds.numRows).toBe(42);
      expect(ds.columnNames).toEqual(['a', 'b']);
      expect(ds.draft).toBe(true);
      expect(ds.currentVersionIndex).toBe(3);
      expect(ds.projectCount).toBe(2);
    });
  });

  describe('static get', () => {
    test('test get by id calls SDK with datasetId', async () => {
      mockGetDataset.mockResolvedValue(datasetDBFixture({ id: 'ds-xyz' }));
      const ds = await Dataset.get({ id: 'ds-xyz' });
      expect(mockGetDataset).toHaveBeenCalledWith({}, { datasetId: 'ds-xyz' });
      expect(ds!.id).toBe('ds-xyz');
    });

    test('test get by name lists & filters', async () => {
      mockListDatasets.mockResolvedValue(
        listDatasetResponseFixture({
          datasets: [
            datasetDBFixture({ id: 'ds-1', name: 'foo' }),
            datasetDBFixture({ id: 'ds-2', name: 'bar' }),
          ],
        })
      );
      const ds = await Dataset.get({ name: 'bar' });
      expect(ds!.id).toBe('ds-2');
    });

    test('test get with both id and name throws', async () => {
      await expect(
        Dataset.get({ id: 'a', name: 'b' })
      ).rejects.toThrow('provide exactly one');
    });

    test('test get with neither throws', async () => {
      await expect(Dataset.get({})).rejects.toThrow('provide either');
    });

    test('test get by name returns null when no match', async () => {
      mockListDatasets.mockResolvedValue(listDatasetResponseFixture({ datasets: [] }));
      const ds = await Dataset.get({ name: 'missing' });
      expect(ds).toBeNull();
    });
  });

  describe('static list', () => {
    test('test list returns Dataset[] from listDatasetsDatasetsGet', async () => {
      mockListDatasets.mockResolvedValue(
        listDatasetResponseFixture({
          datasets: [
            datasetDBFixture({ id: 'ds-1' }),
            datasetDBFixture({ id: 'ds-2' }),
          ],
        })
      );
      const result = await Dataset.list();
      expect(result).toHaveLength(2);
      expect(result[0]).toBeInstanceOf(Dataset);
    });

    test('test list with default limit passes 100', async () => {
      mockListDatasets.mockResolvedValue(listDatasetResponseFixture());
      await Dataset.list();
      expect(mockListDatasets).toHaveBeenCalledWith({}, { limit: 100 });
    });

    test('test list with explicit limit passes through', async () => {
      mockListDatasets.mockResolvedValue(listDatasetResponseFixture());
      await Dataset.list({ limit: 5 });
      expect(mockListDatasets).toHaveBeenCalledWith({}, { limit: 5 });
    });
  });

  describe('create', () => {
    test('test create POSTs body with name and hydrates response', async () => {
      mockCreateDataset.mockResolvedValue(
        datasetDBFixture({ id: 'ds-new', name: 'new-ds' })
      );
      const ds = new Dataset({ name: 'new-ds' });
      await ds.create();
      expect(mockCreateDataset).toHaveBeenCalledWith(
        {},
        { body: { name: 'new-ds' } }
      );
      expect(ds.id).toBe('ds-new');
      expect(ds.isSynced()).toBe(true);
    });

    test('test create failure transitions to FAILED_SYNC', async () => {
      mockCreateDataset.mockRejectedValue(new Error('boom'));
      const ds = new Dataset({ name: 'x' });
      await expect(ds.create()).rejects.toThrow('boom');
      expect(ds.hasFailed()).toBe(true);
    });
  });

  describe('save', () => {
    test('test save on DIRTY calls PATCH with name', async () => {
      mockGetDataset.mockResolvedValue(datasetDBFixture());
      mockUpdateDataset.mockResolvedValue(datasetDBFixture());
      const ds = await Dataset.get({ id: 'ds-123' });
      ds!.name = 'renamed';
      await ds!.save();
      expect(mockUpdateDataset).toHaveBeenCalledWith(
        {},
        { datasetId: 'ds-123', body: { name: 'renamed' } }
      );
      expect(ds!.isSynced()).toBe(true);
    });

    test('test save hydrates response fields (numRows, updatedAt)', async () => {
      mockGetDataset.mockResolvedValue(
        datasetDBFixture({
          numRows: 5,
          updatedAt: new Date('2026-02-02T00:00:00Z'),
        })
      );
      mockUpdateDataset.mockResolvedValue(
        datasetDBFixture({
          name: 'renamed',
          numRows: 9,
          updatedAt: new Date('2026-03-15T00:00:00Z'),
        })
      );
      const ds = await Dataset.get({ id: 'ds-123' });
      expect(ds!.numRows).toBe(5);
      ds!.name = 'renamed';
      await ds!.save();
      expect(ds!.numRows).toBe(9);
      expect(ds!.updatedAt).toEqual(new Date('2026-03-15T00:00:00Z'));
      expect(ds!.isSynced()).toBe(true);
    });
  });

  describe('delete', () => {
    test('test delete on local-only throws', async () => {
      const ds = new Dataset({ name: 'x' });
      await expect(ds.delete()).rejects.toThrow('Dataset ID is not set');
    });

    test('test delete sets state to DELETED', async () => {
      mockGetDataset.mockResolvedValue(datasetDBFixture());
      mockDeleteDataset.mockResolvedValue(undefined);
      const ds = await Dataset.get({ id: 'ds-123' });
      await ds!.delete();
      expect(ds!.isDeleted()).toBe(true);
    });
  });

  describe('refresh', () => {
    test('test refresh hydrates latest values', async () => {
      mockGetDataset
        .mockResolvedValueOnce(datasetDBFixture({ numRows: 5 }))
        .mockResolvedValueOnce(datasetDBFixture({ numRows: 12 }));
      const ds = await Dataset.get({ id: 'ds-123' });
      await ds!.refresh();
      expect(ds!.numRows).toBe(12);
    });
  });

  describe('getContent', () => {
    test('test getContent hits the content endpoint', async () => {
      mockGetDataset.mockResolvedValue(datasetDBFixture());
      mockGetDatasetContent.mockResolvedValue({
        startingToken: 0,
        limit: 100,
        paginated: false,
        rows: [],
      });
      const ds = await Dataset.get({ id: 'ds-123' });
      const content = await ds!.getContent();
      expect(mockGetDatasetContent).toHaveBeenCalledWith(
        {},
        { datasetId: 'ds-123' }
      );
      expect(content.rows).toEqual([]);
    });

    test('test getContent on local-only throws', async () => {
      const ds = new Dataset({ name: 'x' });
      await expect(ds.getContent()).rejects.toThrow('Dataset ID is not set');
    });
  });

  describe('addRows', () => {
    test('test addRows sends edits array of append_row operations', async () => {
      mockGetDataset.mockResolvedValue(datasetDBFixture());
      mockUpdateDatasetContent.mockResolvedValue(undefined);
      const ds = await Dataset.get({ id: 'ds-123' });
      await ds!.addRows([
        { input: 'a', output: '1' },
        { input: 'b', output: '2' },
      ]);
      expect(mockUpdateDatasetContent).toHaveBeenCalledWith(
        {},
        {
          datasetId: 'ds-123',
          body: {
            edits: [
              { editType: 'append_row', values: { input: 'a', output: '1' } },
              { editType: 'append_row', values: { input: 'b', output: '2' } },
            ],
          },
        }
      );
    });

    test('test addRows on local-only throws', async () => {
      const ds = new Dataset({ name: 'x' });
      await expect(ds.addRows([{ input: 'a' }])).rejects.toThrow(
        'Dataset ID is not set'
      );
    });

    test('test addRows write failure transitions to FAILED_SYNC with write error', async () => {
      mockGetDataset.mockResolvedValueOnce(datasetDBFixture());
      const ds = await Dataset.get({ id: 'ds-123' });
      const writeErr = new Error('write blew up');
      mockUpdateDatasetContent.mockRejectedValueOnce(writeErr);
      await expect(ds!.addRows([{ input: 'a' }])).rejects.toBe(writeErr);
      expect(ds!.hasFailed()).toBe(true);
      expect(ds!.lastError).toBe(writeErr);
    });

    test('test addRows write succeeds + refresh fails stays SYNCED and rethrows refresh error', async () => {
      mockGetDataset.mockResolvedValueOnce(datasetDBFixture());
      const ds = await Dataset.get({ id: 'ds-123' });
      mockUpdateDatasetContent.mockResolvedValueOnce(undefined);
      const refreshErr = new Error('refresh blew up');
      mockGetDataset.mockRejectedValueOnce(refreshErr);
      await expect(ds!.addRows([{ input: 'a' }])).rejects.toBe(refreshErr);
      expect(ds!.isSynced()).toBe(true);
    });

    test('test addRows write + refresh both succeed hydrates fresh state', async () => {
      mockGetDataset
        .mockResolvedValueOnce(datasetDBFixture({ numRows: 5 }))
        .mockResolvedValueOnce(datasetDBFixture({ numRows: 7 }));
      mockUpdateDatasetContent.mockResolvedValueOnce(undefined);
      const ds = await Dataset.get({ id: 'ds-123' });
      await ds!.addRows([{ input: 'a' }, { input: 'b' }]);
      expect(ds!.numRows).toBe(7);
      expect(ds!.isSynced()).toBe(true);
    });
  });

  describe('getVersions', () => {
    test('test getVersions calls query endpoint', async () => {
      mockGetDataset.mockResolvedValue(datasetDBFixture());
      mockQueryDatasetVersions.mockResolvedValue({
        startingToken: 0,
        limit: 100,
        paginated: false,
        versions: [],
      });
      const ds = await Dataset.get({ id: 'ds-123' });
      const versions = await ds!.getVersions();
      expect(mockQueryDatasetVersions).toHaveBeenCalledWith(
        {},
        { datasetId: 'ds-123' }
      );
      expect(versions.versions).toEqual([]);
    });
  });

  describe('getVersionContent', () => {
    test('test getVersionContent with index<1 throws RangeError', async () => {
      mockGetDataset.mockResolvedValue(datasetDBFixture());
      const ds = await Dataset.get({ id: 'ds-123' });
      await expect(ds!.getVersionContent({ index: 0 })).rejects.toThrow(
        RangeError
      );
    });

    test('test getVersionContent passes 1-based index', async () => {
      mockGetDataset.mockResolvedValue(datasetDBFixture());
      mockGetDatasetVersionContent.mockResolvedValue({
        startingToken: 0,
        limit: 100,
        paginated: false,
        rows: [],
      });
      const ds = await Dataset.get({ id: 'ds-123' });
      await ds!.getVersionContent({ index: 1 });
      expect(mockGetDatasetVersionContent).toHaveBeenCalledWith(
        {},
        { datasetId: 'ds-123', versionIndex: 1 }
      );
    });
  });

  describe('generate', () => {
    test('test static generate returns ext response', async () => {
      mockExtendDataset.mockResolvedValue({ datasetId: 'ds-gen' });
      const result = await Dataset.generate({ count: 3, prompt: 'p' });
      expect(mockExtendDataset).toHaveBeenCalledWith(
        {},
        expect.objectContaining({ count: 3, prompt: 'p' })
      );
      expect(result.datasetId).toBe('ds-gen');
    });
  });

  describe('extend', () => {
    test('test extend on hydrated dataset sends sourceDataset.datasetId', async () => {
      mockGetDataset.mockResolvedValue(datasetDBFixture());
      mockExtendDataset.mockResolvedValue({ datasetId: 'ds-123' });
      const ds = await Dataset.get({ id: 'ds-123' });
      const result = await ds!.extend({ count: 5 });
      expect(mockExtendDataset).toHaveBeenCalledWith(
        {},
        expect.objectContaining({
          count: 5,
          sourceDataset: { datasetId: 'ds-123' },
        })
      );
      expect(result.datasetId).toBe('ds-123');
    });

    test('test static generate does not send sourceDataset', async () => {
      mockExtendDataset.mockResolvedValue({ datasetId: 'ds-gen' });
      await Dataset.generate({ count: 3, prompt: 'p' });
      const callArgs = mockExtendDataset.mock.calls[0]![1] as Record<
        string,
        unknown
      >;
      expect(callArgs).not.toHaveProperty('sourceDataset');
    });

    test('test extend on local-only throws', async () => {
      const ds = new Dataset({ name: 'x' });
      await expect(ds.extend({})).rejects.toThrow('Dataset ID is not set');
    });
  });
});
