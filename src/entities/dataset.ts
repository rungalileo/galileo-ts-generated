/*
 * Dataset domain entity.
 *
 * Only `name` is dirty-tracked for `save()`.
 *
 * Notes / limitations:
 *   - `Dataset.list` routes through the global `listDatasetsDatasetsGet`
 *     when no `projectId` is given, and through `queryDatasetsDatasetsQueryPost`
 *     with a `DatasetUsedInProjectFilter` when `projectId` is provided.
 *   - `Dataset.generate` / `dataset.extend` returns the generated
 *     `SyntheticDatasetExtensionResponse` (an async job handle: `{ datasetId }`).
 *     Polling-to-rows behaviour is not implemented — callers can poll via
 *     `client.datasets.getDatasetSyntheticExtendStatus...` if needed.
 */

import { BaseEntity } from "./base-entity.js";
import { StatefulEntity, SyncState } from "./stateful-entity.js";
import { safeExecute } from "./result.js";
import type { DatasetAppendRow } from "../models/datasetappendrow.js";
import type { DatasetDB } from "../models/datasetdb.js";
import type { DatasetContent } from "../models/datasetcontent.js";
import type { DatasetVersionDB } from "../models/datasetversiondb.js";
import type { ListDatasetParams } from "../models/listdatasetparams.js";
import type { ListDatasetVersionResponse } from "../models/listdatasetversionresponse.js";
import type { SyntheticDatasetExtensionResponse } from "../models/syntheticdatasetextensionresponse.js";

export interface DatasetInit {
	name: string;
	content?: Record<string, unknown>[];
}

export interface DatasetListOptions {
	limit?: number;
	projectId?: string;
}

export interface DatasetGenerateOptions {
	prompt?: string | null | undefined;
	instructions?: string | null | undefined;
	examples?: string[] | undefined;
	count?: number | undefined;
	dataTypes?: string[] | null | undefined;
	promptSettings?: Record<string, unknown> | undefined;
	projectId?: string | null | undefined;
}

type DatasetHydrationSource = {
	id?: string | undefined;
	name?: string | null | undefined;
	createdAt?: Date | undefined;
	updatedAt?: Date | undefined;
	numRows?: number | null | undefined;
	columnNames?: string[] | null | undefined;
	draft?: boolean | undefined;
	currentVersionIndex?: number | undefined;
	projectCount?: number | undefined;
};

export class Dataset extends StatefulEntity {
	public id: string | null = null;
	public createdAt: Date | null = null;
	public updatedAt: Date | null = null;
	public numRows: number | null = null;
	public columnNames: string[] | null = null;
	public draft: boolean = false;
	public currentVersionIndex: number = 0;
	public projectCount: number = 0;
	public content: Record<string, unknown>[] = [];

	#name: string;

	get name(): string {
		return this.#name;
	}

	set name(value: string) {
		if (value !== this.#name && this.isSynced()) {
			this._markDirty();
		}
		this.#name = value;
	}

	constructor(init: DatasetInit) {
		super();
		if (!init.name) {
			throw new TypeError("Dataset requires a name");
		}
		this.#name = init.name;
		if (init.content) {
			this.content = init.content;
		}
	}

	static _fromApi(raw: DatasetDB): Dataset {
		const dataset = new Dataset({ name: raw.name });
		dataset.content = [];
		dataset._hydrate(raw);
		return dataset;
	}

	static async get(opts: {
		id?: string;
		name?: string;
	}): Promise<Dataset | null> {
		BaseEntity.assertSingleIdentifier(opts, "Dataset");
		const { id, name } = opts;
		const client = BaseEntity.getCLient();
		if (id != null) {
			const result = await safeExecute(() =>
				client.datasets.getDatasetDatasetsDatasetIdGet({}, { datasetId: id })
			);
			if (!result.ok) {
				if (BaseEntity.isNotFound(result.error)) return null;
				throw result.error;
			}
			return Dataset._fromApi(result.value);
		}
		// Name lookup: list & filter (the generated endpoint does not support name lookup directly).
		const listResult = await safeExecute(() =>
			client.datasets.listDatasetsDatasetsGet({}, { limit: 1000 })
		);
		if (!listResult.ok) throw listResult.error;
		const match = listResult.value.datasets?.find((d) => d.name === name);
		return match ? Dataset._fromApi(match) : null;
	}

	static async list(opts: DatasetListOptions = {}): Promise<Dataset[]> {
		const { limit = 100, projectId } = opts;
		const client = BaseEntity.getCLient();
		if (projectId != null) {
			const body: ListDatasetParams = {
				filters: [{ name: "used_in_project", value: projectId }],
			};
			const result = await safeExecute(() =>
				client.datasets.queryDatasetsDatasetsQueryPost(
					{},
					{ body, limit }
				)
			);
			if (!result.ok) throw result.error;
			return (result.value.datasets ?? []).map((d) => Dataset._fromApi(d));
		}
		const result = await safeExecute(() =>
			client.datasets.listDatasetsDatasetsGet({}, { limit })
		);
		if (!result.ok) throw result.error;
		return (result.value.datasets ?? []).map((d) => Dataset._fromApi(d));
	}

	static async generate(
		opts: DatasetGenerateOptions = {}
	): Promise<SyntheticDatasetExtensionResponse> {
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.datasets.extendDatasetContentDatasetsExtendPost(
				{},
				Dataset.#buildExtendBody(opts)
			)
		);
		if (!result.ok) throw result.error;
		return result.value;
	}

	async create(): Promise<this> {
		this.ensureNotDeleted();
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.datasets.createDatasetDatasetsPost(
				{},
				{ body: { name: this.#name } }
			)
		);
		if (!result.ok) {
			this._setState(SyncState.FailedSync, result.error);
			throw result.error;
		}
		this._hydrate(result.value);
		return this;
	}

	async refresh(): Promise<this> {
		this.ensureNotDeleted();
		if (this.id == null) {
			throw new Error(
				"Dataset ID is not set. Cannot refresh a local-only dataset."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.datasets.getDatasetDatasetsDatasetIdGet(
				{},
				{ datasetId: this.id! }
			)
		);
		if (!result.ok) {
			this._setState(SyncState.FailedSync, result.error);
			throw result.error;
		}
		this._hydrate(result.value);
		return this;
	}

	protected override async _save(): Promise<this> {
		this.ensureNotDeleted();
		if (this.id == null) {
			throw new Error(
				"Dataset ID is not set. Cannot update a dataset without an ID."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.datasets.updateDatasetDatasetsDatasetIdPatch(
				{},
				{ datasetId: this.id!, body: { name: this.#name } }
			)
		);
		if (!result.ok) {
			this._setState(SyncState.FailedSync, result.error);
			throw result.error;
		}
		this._hydrate(result.value);
		return this;
	}

	async delete(): Promise<void> {
		this.ensureNotDeleted();
		if (this.id == null) {
			throw new Error(
				"Dataset ID is not set. Cannot delete a local-only dataset."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.datasets.deleteDatasetDatasetsDatasetIdDelete(
				{},
				{ datasetId: this.id! }
			)
		);
		if (!result.ok) {
			this._setState(SyncState.FailedSync, result.error);
			throw result.error;
		}
		this._setState(SyncState.Deleted);
	}

	async getContent(): Promise<DatasetContent> {
		if (this.id == null) {
			throw new Error(
				"Dataset ID is not set. Cannot get content for a local-only dataset."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.datasets.getDatasetContentDatasetsDatasetIdContentGet(
				{},
				{ datasetId: this.id! }
			)
		);
		if (!result.ok) throw result.error;
		return result.value;
	}

	/**
	 * Add rows to this dataset.
	 *
	 * State transitions:
	 *   - Write fails → FAILED_SYNC with the write error.
	 *   - Write succeeds, refresh succeeds → SYNCED with fresh server state.
	 *   - Write succeeds, refresh fails → SYNCED (write is durable) and the
	 *     refresh error is rethrown so the caller knows local state may be
	 *     stale until they call `refresh()` again.
	 */
	async addRows(rows: Record<string, unknown>[]): Promise<this> {
		this.ensureNotDeleted();
		if (this.id == null) {
			throw new Error(
				"Dataset ID is not set. Cannot add rows to a local-only dataset."
			);
		}
		const client = BaseEntity.getCLient();
		const edits: DatasetAppendRow[] = rows.map((row) => ({
			editType: "append_row",
			values: row as DatasetAppendRow["values"],
		}));
		const writeResult = await safeExecute(() =>
			client.datasets.updateDatasetContentDatasetsDatasetIdContentPatch(
				{},
				{ datasetId: this.id!, body: { edits } }
			)
		);
		if (!writeResult.ok) {
			this._setState(SyncState.FailedSync, writeResult.error);
			throw writeResult.error;
		}
		try {
			await this.refresh();
		} catch (refreshError) {
			this._setState(SyncState.Synced);
			throw refreshError;
		}
		return this;
	}

	async getVersions(): Promise<ListDatasetVersionResponse> {
		if (this.id == null) {
			throw new Error(
				"Dataset ID is not set. Cannot get versions for a local-only dataset."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.datasets.queryDatasetVersionsDatasetsDatasetIdVersionsQueryPost(
				{},
				{ datasetId: this.id! }
			)
		);
		if (!result.ok) throw result.error;
		return result.value;
	}

	async getVersionContent(opts: { index: number }): Promise<DatasetContent> {
		const { index } = opts;
		if (index < 1) {
			throw new RangeError(
				`Version index must be >= 1 (1-based indexing). Got: ${index}`
			);
		}
		if (this.id == null) {
			throw new Error(
				"Dataset ID is not set. Cannot get version content for a local-only dataset."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.datasets.getDatasetVersionContentDatasetsDatasetIdVersionsVersionIndexContentGet(
				{},
				{ datasetId: this.id!, versionIndex: index }
			)
		);
		if (!result.ok) throw result.error;
		return result.value;
	}

	async extend(
		opts: DatasetGenerateOptions = {}
	): Promise<SyntheticDatasetExtensionResponse> {
		if (this.id == null) {
			throw new Error(
				"Dataset ID is not set. Cannot extend a local-only dataset."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.datasets.extendDatasetContentDatasetsExtendPost(
				{},
				Dataset.#buildExtendBody(opts, this.id!)
			)
		);
		if (!result.ok) throw result.error;
		return result.value;
	}

	versions(): Promise<DatasetVersionDB[]> {
		return this.getVersions().then((v) => v.versions);
	}

	protected _hydrate(raw: DatasetDB): void {
		this._applyHydration({
			id: raw.id,
			name: raw.name,
			createdAt: raw.createdAt,
			updatedAt: raw.updatedAt,
			numRows: raw.numRows,
			columnNames: raw.columnNames,
			draft: raw.draft,
			currentVersionIndex: raw.currentVersionIndex,
			projectCount: raw.projectCount,
		});
	}

	private _applyHydration(raw: DatasetHydrationSource): void {
		if (raw.id !== undefined) this.id = raw.id;
		if (raw.name != null) this.#name = raw.name;
		if (raw.createdAt !== undefined) this.createdAt = raw.createdAt;
		if (raw.updatedAt !== undefined) this.updatedAt = raw.updatedAt;
		if (raw.numRows !== undefined) this.numRows = raw.numRows ?? null;
		if (raw.columnNames !== undefined)
			this.columnNames = raw.columnNames ?? null;
		if (raw.draft !== undefined) this.draft = raw.draft;
		if (raw.currentVersionIndex !== undefined)
			this.currentVersionIndex = raw.currentVersionIndex;
		if (raw.projectCount !== undefined) this.projectCount = raw.projectCount;
		this._setState(SyncState.Synced);
	}

	static #buildExtendBody(
		opts: DatasetGenerateOptions,
		sourceDatasetId?: string
	) {
		const body: Record<string, unknown> = {
			count: opts.count ?? 10,
		};
		if (opts.prompt !== undefined) body["prompt"] = opts.prompt;
		if (opts.instructions !== undefined)
			body["instructions"] = opts.instructions;
		if (opts.examples !== undefined) body["examples"] = opts.examples;
		if (opts.dataTypes !== undefined) body["dataTypes"] = opts.dataTypes;
		if (opts.promptSettings !== undefined)
			body["promptSettings"] = opts.promptSettings;
		if (opts.projectId !== undefined) body["projectId"] = opts.projectId;
		if (sourceDatasetId !== undefined) {
			body["sourceDataset"] = { datasetId: sourceDatasetId };
		}
		return body as never;
	}

}
