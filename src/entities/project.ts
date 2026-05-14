/*
 * Project domain entity.
 *
 * Only `name` is dirty-tracked. `description` / `labels` / `createdBy` are
 * NOT exposed for dirty-tracking because get/list endpoints do not return
 * them consistently.
 */

import { BaseEntity } from "./base-entity.js";
import { StatefulEntity, SyncState } from "./stateful-entity.js";
import { GalileoGeneratedError } from "../models/errors/galileogeneratederror.js";
import type { ProjectDB } from "../models/projectdb.js";
import type { ProjectCreateResponse } from "../models/projectcreateresponse.js";
import type { ProjectUpdateResponse } from "../models/projectupdateresponse.js";

export interface ProjectInit {
	name: string;
}

type ProjectHydrationSource = {
	id?: string | undefined;
	name?: string | null | undefined;
	createdAt?: Date | undefined;
	updatedAt?: Date | undefined;
	createdBy?: string | null | undefined;
	bookmark?: boolean | undefined;
};

export class Project extends StatefulEntity {
	public id: string | null = null;
	public createdAt: Date | null = null;
	public updatedAt: Date | null = null;
	public createdBy: string | null = null;
	public bookmark: boolean = false;

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

	constructor(init: ProjectInit) {
		super();
		if (!init.name) {
			throw new TypeError("Project requires a name");
		}
		this.#name = init.name;
	}

	static _fromApi(raw: ProjectDB): Project {
		const project = new Project({ name: raw.name ?? "" });
		project._hydrate(raw);
		return project;
	}

	static async get(opts: {
		id?: string;
		name?: string;
	}): Promise<Project | null> {
		const { id, name } = opts;
		if (id != null && name != null) {
			throw new TypeError(
				"Project.get: provide exactly one of id or name, not both"
			);
		}
		if (id == null && name == null) {
			throw new TypeError("Project.get: provide either id or name");
		}
		const client = BaseEntity.getCLient();
		if (id != null) {
			const result = await BaseEntity.safeExecute(() =>
				client.projects.getProjectProjectsProjectIdGet({}, { projectId: id })
			);
			if (!result.ok) {
				if (Project.#isNotFound(result.error)) {
					return null;
				}
				throw result.error;
			}
			return Project._fromApi(result.value);
		}
		const listResult = await BaseEntity.safeExecute(() =>
			client.projects.getProjectsProjectsGet({}, { projectName: name })
		);
		if (!listResult.ok) {
			throw listResult.error;
		}
		const match = listResult.value.find((p) => p.name === name);
		return match ? Project._fromApi(match) : null;
	}

	static async list(): Promise<Project[]> {
		const client = BaseEntity.getCLient();
		const result = await BaseEntity.safeExecute(() =>
			client.projects.getProjectsProjectsGet({}, {})
		);
		if (!result.ok) {
			throw result.error;
		}
		return result.value.map((p) => Project._fromApi(p));
	}

	async create(): Promise<this> {
		this.ensureNotDeleted();
		const client = BaseEntity.getCLient();
		const result = await BaseEntity.safeExecute(() =>
			client.projects.createProjectProjectsPost(
				{},
				{ name: this.#name, type: "gen_ai" }
			)
		);
		if (!result.ok) {
			this._setState(SyncState.FailedSync, result.error);
			throw result.error;
		}
		this._hydrateFromCreate(result.value);
		return this;
	}

	async refresh(): Promise<this> {
		this.ensureNotDeleted();
		if (this.id == null) {
			throw new Error(
				"Project ID is not set. Cannot refresh a local-only project."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await BaseEntity.safeExecute(() =>
			client.projects.getProjectProjectsProjectIdGet(
				{},
				{ projectId: this.id! }
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
				"Project ID is not set. Cannot update a project without an ID."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await BaseEntity.safeExecute(() =>
			client.projects.updateProjectProjectsProjectIdPut(
				{},
				{ projectId: this.id!, body: { name: this.#name } }
			)
		);
		if (!result.ok) {
			this._setState(SyncState.FailedSync, result.error);
			throw result.error;
		}
		this._hydrateFromUpdate(result.value);
		return this;
	}

	async delete(): Promise<void> {
		if (this.id == null) {
			throw new Error(
				"Project ID is not set. Cannot delete a local-only project."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await BaseEntity.safeExecute(() =>
			client.projects.deleteProjectProjectsProjectIdDelete(
				{},
				{ projectId: this.id! }
			)
		);
		if (!result.ok) {
			this._setState(SyncState.FailedSync, result.error);
			throw result.error;
		}
		this._setState(SyncState.Deleted);
	}

	async listLogStreams(): Promise<import("./log-stream.js").LogStream[]> {
		if (this.id == null) {
			throw new Error(
				"Project ID is not set. Cannot list log streams for a local-only project."
			);
		}
		const { LogStream } = await import("./log-stream.js");
		return LogStream.list({ projectId: this.id });
	}

	async listDatasets(): Promise<import("./dataset.js").Dataset[]> {
		if (this.id == null) {
			throw new Error(
				"Project ID is not set. Cannot list datasets for a local-only project."
			);
		}
		const { Dataset } = await import("./dataset.js");
		return Dataset.list({ projectId: this.id });
	}

	async listExperiments(): Promise<import("./experiment.js").Experiment[]> {
		if (this.id == null) {
			throw new Error(
				"Project ID is not set. Cannot list experiments for a local-only project."
			);
		}
		const { Experiment } = await import("./experiment.js");
		return Experiment.list({ projectId: this.id });
	}

	async listPrompts(): Promise<import("./prompt.js").Prompt[]> {
		if (this.id == null) {
			throw new Error(
				"Project ID is not set. Cannot list prompts for a local-only project."
			);
		}
		const { Prompt } = await import("./prompt.js");
		return Prompt.list({ projectId: this.id });
	}

	protected _hydrate(raw: ProjectDB): void {
		this._applyHydration({
			id: raw.id,
			name: raw.name,
			createdAt: raw.createdAt,
			updatedAt: raw.updatedAt,
			createdBy: raw.createdBy,
			bookmark: raw.bookmark,
		});
	}

	private _hydrateFromCreate(raw: ProjectCreateResponse): void {
		this._applyHydration({
			id: raw.id,
			name: raw.name,
			createdAt: raw.createdAt,
			updatedAt: raw.updatedAt,
			createdBy: raw.createdBy,
		});
	}

	private _hydrateFromUpdate(raw: ProjectUpdateResponse): void {
		this._applyHydration({
			id: raw.id,
			name: raw.name,
			createdAt: raw.createdAt,
			updatedAt: raw.updatedAt,
			createdBy: raw.createdBy,
		});
	}

	private _applyHydration(raw: ProjectHydrationSource): void {
		if (raw.id !== undefined) this.id = raw.id;
		if (raw.name != null) this.#name = raw.name;
		if (raw.createdAt !== undefined) this.createdAt = raw.createdAt;
		if (raw.updatedAt !== undefined) this.updatedAt = raw.updatedAt;
		if (raw.createdBy !== undefined) this.createdBy = raw.createdBy ?? null;
		if (raw.bookmark !== undefined) this.bookmark = raw.bookmark;
		this._setState(SyncState.Synced);
	}

	static #isNotFound(error: Error): boolean {
		if (error instanceof GalileoGeneratedError && error.statusCode === 404) {
			return true;
		}
		return /\b404\b|not\s*found/i.test(error.message);
	}
}
