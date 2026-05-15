/*
 * LogStream domain entity.
 *
 * No dirty-tracked fields (no `save()`); `name` is a plain field with no
 * setter. `delete()` is provided since the generated SDK exposes the
 * endpoint.
 *
 * `getMetrics` / `setMetrics` / `query` / `getSpans` / `getTraces` are not
 * implemented — they require a filter DSL that is not yet wired here.
 */

import { BaseEntity } from "./base-entity.js";
import { resolveProjectId } from "./resolve-project.js";
import { StatefulEntity, SyncState } from "./stateful-entity.js";
import { safeExecute } from "./result.js";
import type { LogStreamResponse } from "../models/logstreamresponse.js";

export interface LogStreamInit {
	name: string;
	projectId?: string | null;
	projectName?: string | null;
}

export interface LogStreamGetOptions {
	name: string;
	projectId?: string;
	projectName?: string;
}

export interface LogStreamListOptions {
	projectId?: string;
	projectName?: string;
}

type LogStreamHydrationSource = {
	id?: string | undefined;
	name?: string | undefined;
	projectId?: string | undefined;
	createdAt?: Date | undefined;
	updatedAt?: Date | undefined;
	createdBy?: string | null | undefined;
	numSpans?: number | null | undefined;
	numTraces?: number | null | undefined;
	hasUserCreatedSessions?: boolean | undefined;
};

export class LogStream extends StatefulEntity {
	public id: string | null = null;
	public createdAt: Date | null = null;
	public updatedAt: Date | null = null;
	public projectId: string | null;
	public projectName: string | null;
	public createdBy: string | null = null;
	public numSpans: number | null = null;
	public numTraces: number | null = null;
	public hasUserCreatedSessions: boolean = false;

	#name: string;

	get name(): string {
		return this.#name;
	}

	constructor(init: LogStreamInit) {
		super();
		if (!init.name) {
			throw new TypeError("LogStream requires a name");
		}
		this.#name = init.name;
		this.projectId = init.projectId ?? null;
		this.projectName = init.projectName ?? null;
	}

	static _fromApi(raw: LogStreamResponse): LogStream {
		const ls = new LogStream({ name: raw.name, projectId: raw.projectId });
		ls._hydrate(raw);
		return ls;
	}

	static async get(opts: LogStreamGetOptions): Promise<LogStream | null> {
		const { name } = opts;
		if (!name) {
			throw new TypeError("LogStream.get: name is required");
		}
		const projectId = await resolveProjectId(opts);
		const list = await LogStream.list({ projectId });
		const match = list.find((ls) => ls.name === name);
		return match ?? null;
	}

	static async list(
		opts: LogStreamListOptions = {}
	): Promise<LogStream[]> {
		const projectId = await resolveProjectId(opts);
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.logStream.listLogStreamsProjectsProjectIdLogStreamsGet(
				{},
				{ projectId }
			)
		);
		if (!result.ok) throw result.error;
		return result.value.map((ls) => {
			const entity = LogStream._fromApi(ls);
			return entity;
		});
	}

	async create(): Promise<this> {
		this.ensureNotDeleted();
		const projectId = await resolveProjectId({
			projectId: this.projectId ?? undefined,
			projectName: this.projectName ?? undefined,
		});
		const client = BaseEntity.getCLient();
		const value = await this._executeWithFailureState(() =>
			client.logStream.createLogStreamProjectsProjectIdLogStreamsPost(
				{},
				{ projectId, body: { name: this.#name } }
			)
		);
		this._hydrate(value);
		return this;
	}

	async refresh(): Promise<this> {
		this.ensureNotDeleted();
		if (this.id == null) {
			throw new Error(
				"LogStream ID is not set. Cannot refresh a local-only log stream."
			);
		}
		if (this.projectId == null) {
			throw new Error(
				"LogStream projectId is not set. Cannot refresh without a parent project."
			);
		}
		const client = BaseEntity.getCLient();
		const value = await this._executeWithFailureState(() =>
			client.logStream.getLogStreamProjectsProjectIdLogStreamsLogStreamIdGet(
				{},
				{ projectId: this.projectId!, logStreamId: this.id! }
			)
		);
		this._hydrate(value);
		return this;
	}

	async delete(): Promise<void> {
		this.ensureNotDeleted();
		if (this.id == null) {
			throw new Error(
				"LogStream ID is not set. Cannot delete a local-only log stream."
			);
		}
		if (this.projectId == null) {
			throw new Error(
				"LogStream projectId is not set. Cannot delete without a parent project."
			);
		}
		const client = BaseEntity.getCLient();
		await this._executeWithFailureState(() =>
			client.logStream.deleteLogStreamProjectsProjectIdLogStreamsLogStreamIdDelete(
				{},
				{ projectId: this.projectId!, logStreamId: this.id! }
			)
		);
		this._setState(SyncState.Deleted);
	}

	protected _hydrate(raw: LogStreamResponse): void {
		this._applyHydration({
			id: raw.id,
			name: raw.name,
			projectId: raw.projectId,
			createdAt: raw.createdAt,
			updatedAt: raw.updatedAt,
			createdBy: raw.createdBy,
			numSpans: raw.numSpans,
			numTraces: raw.numTraces,
			hasUserCreatedSessions: raw.hasUserCreatedSessions,
		});
	}

	private _applyHydration(raw: LogStreamHydrationSource): void {
		if (raw.id !== undefined) this.id = raw.id;
		if (raw.name !== undefined) this.#name = raw.name;
		if (raw.projectId !== undefined) this.projectId = raw.projectId;
		if (raw.createdAt !== undefined) this.createdAt = raw.createdAt;
		if (raw.updatedAt !== undefined) this.updatedAt = raw.updatedAt;
		if (raw.createdBy !== undefined) this.createdBy = raw.createdBy ?? null;
		if (raw.numSpans !== undefined) this.numSpans = raw.numSpans ?? null;
		if (raw.numTraces !== undefined) this.numTraces = raw.numTraces ?? null;
		if (raw.hasUserCreatedSessions !== undefined)
			this.hasUserCreatedSessions = raw.hasUserCreatedSessions;
		this._setState(SyncState.Synced);
	}

}
