/*
 * Experiment domain entity.
 *
 * Lifecycle-only: no dirty-tracked fields (no `save()`), no `run()`
 * orchestration, no filter/sort/column DSL, no polymorphic
 * dataset/prompt/model unions.
 *
 * `create()` issues a single POST against
 * `createExperimentProjectsProjectIdExperimentsPost` with `{ name }`. The
 * server schema accepts a much richer payload (taskType, dataset,
 * promptTemplateVersionId, scorers, experimentGroup*, ...), but
 * `ExperimentInit` is intentionally kept minimal here; broader payload
 * support is a follow-up.
 */

import { BaseEntity } from "./base-entity.js";
import { resolveProjectId } from "./resolve-project.js";
import { StatefulEntity, SyncState } from "./stateful-entity.js";
import { safeExecute } from "./result.js";
import type { ExperimentResponse } from "../models/experimentresponse.js";
import type { RunTagDB } from "../models/runtagdb.js";
import type { TaskType } from "../models/tasktype.js";

export interface ExperimentInit {
	name: string;
	projectId?: string | null;
	projectName?: string | null;
}

export interface ExperimentGetOptions {
	id?: string;
	name?: string;
	projectId?: string;
	projectName?: string;
}

export interface ExperimentListOptions {
	projectId?: string;
	projectName?: string;
}

export interface ExperimentAddTagOptions {
	key: string;
	value: string;
	tagType?: string;
}

type ExperimentHydrationSource = {
	id?: string | undefined;
	name?: string | undefined;
	projectId?: string | undefined;
	createdAt?: Date | undefined;
	updatedAt?: Date | null | undefined;
	createdBy?: string | null | undefined;
	numSpans?: number | null | undefined;
	numTraces?: number | null | undefined;
	taskType?: TaskType | undefined;
	aggregateMetrics?: Record<string, unknown> | undefined;
	tags?: Record<string, RunTagDB[]> | undefined;
};

export class Experiment extends StatefulEntity {
	public id: string | null = null;
	public createdAt: Date | null = null;
	public updatedAt: Date | null = null;
	public projectId: string | null;
	public projectName: string | null;
	public createdBy: string | null = null;
	public numSpans: number | null = null;
	public numTraces: number | null = null;
	public taskType: TaskType | null = null;
	public aggregateMetrics: Record<string, unknown> = {};
	public tags: Record<string, RunTagDB[]> = {};

	#name: string;

	get name(): string {
		return this.#name;
	}

	constructor(init: ExperimentInit) {
		super();
		if (!init.name) {
			throw new TypeError("Experiment requires a name");
		}
		this.#name = init.name;
		this.projectId = init.projectId ?? null;
		this.projectName = init.projectName ?? null;
	}

	static _fromApi(raw: ExperimentResponse): Experiment {
		const experiment = new Experiment({
			name: raw.name,
			projectId: raw.projectId,
		});
		experiment._hydrate(raw);
		return experiment;
	}

	/**
	 * Look up an experiment by `id` or by `name`. Provide exactly one.
	 *
	 * The underlying endpoint is project-scoped, so a project context is
	 * required: pass `projectId` / `projectName` on `opts`, or set the
	 * `GALILEO_PROJECT` environment variable. Without a project context this
	 * method throws — unlike `Project.get` / `Dataset.get` / `Prompt.get`,
	 * which look up globally.
	 */
	static async get(opts: ExperimentGetOptions): Promise<Experiment | null> {
		BaseEntity.assertSingleIdentifier(opts, "Experiment");
		const { id, name } = opts;
		const projectId = await resolveProjectId(opts);
		const client = BaseEntity.getCLient();
		if (id != null) {
			return BaseEntity.fetchNullable(
				() =>
					client.experiment.getExperimentProjectsProjectIdExperimentsExperimentIdGet(
						{},
						{ projectId, experimentId: id }
					),
				(raw) => Experiment._fromApi(raw)
			);
		}
		const list = await Experiment.list({ projectId });
		return list.find((e) => e.name === name) ?? null;
	}

	static async list(
		opts: ExperimentListOptions = {}
	): Promise<Experiment[]> {
		const projectId = await resolveProjectId(opts);
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.experiment.listExperimentsProjectsProjectIdExperimentsGet(
				{},
				{ projectId }
			)
		);
		if (!result.ok) throw result.error;
		return result.value.map((e) => Experiment._fromApi(e));
	}

	async create(): Promise<this> {
		this.ensureNotDeleted();
		const projectId = await resolveProjectId({
			projectId: this.projectId ?? undefined,
			projectName: this.projectName ?? undefined,
		});
		const client = BaseEntity.getCLient();
		const value = await this._executeWithFailureState(() =>
			client.experiment.createExperimentProjectsProjectIdExperimentsPost(
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
				"Experiment ID is not set. Cannot refresh a local-only experiment."
			);
		}
		if (this.projectId == null) {
			throw new Error(
				"Experiment projectId is not set. Cannot refresh without a parent project."
			);
		}
		const client = BaseEntity.getCLient();
		const value = await this._executeWithFailureState(() =>
			client.experiment.getExperimentProjectsProjectIdExperimentsExperimentIdGet(
				{},
				{ projectId: this.projectId!, experimentId: this.id! }
			)
		);
		this._hydrate(value);
		return this;
	}

	async delete(): Promise<void> {
		this.ensureNotDeleted();
		if (this.id == null) {
			throw new Error(
				"Experiment ID is not set. Cannot delete a local-only experiment."
			);
		}
		if (this.projectId == null) {
			throw new Error(
				"Experiment projectId is not set. Cannot delete without a parent project."
			);
		}
		const client = BaseEntity.getCLient();
		await this._executeWithFailureState(() =>
			client.experiment.deleteExperimentProjectsProjectIdExperimentsExperimentIdDelete(
				{},
				{ projectId: this.projectId!, experimentId: this.id! }
			)
		);
		this._setState(SyncState.Deleted);
	}

	async project(): Promise<import("./project.js").Project | null> {
		if (this.projectId == null) return null;
		const { Project } = await import("./project.js");
		return Project.get({ id: this.projectId });
	}

	async dataset(): Promise<import("./dataset.js").Dataset | null> {
		// Dataset linkage lives on the raw ExperimentResponse; fetch the latest
		// payload to read it on demand.
		if (this.id == null || this.projectId == null) return null;
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.experiment.getExperimentProjectsProjectIdExperimentsExperimentIdGet(
				{},
				{ projectId: this.projectId!, experimentId: this.id! }
			)
		);
		if (!result.ok) throw result.error;
		const datasetRef = result.value.dataset;
		if (!datasetRef || !datasetRef.datasetId) return null;
		const { Dataset } = await import("./dataset.js");
		return Dataset.get({ id: datasetRef.datasetId });
	}

	async prompt(): Promise<import("./prompt.js").Prompt | null> {
		if (this.id == null || this.projectId == null) return null;
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.experiment.getExperimentProjectsProjectIdExperimentsExperimentIdGet(
				{},
				{ projectId: this.projectId!, experimentId: this.id! }
			)
		);
		if (!result.ok) throw result.error;
		const promptRef = result.value.prompt;
		if (!promptRef || !promptRef.promptTemplateId) return null;
		const { Prompt } = await import("./prompt.js");
		return Prompt.get({ id: promptRef.promptTemplateId });
	}

	async addTag(opts: ExperimentAddTagOptions): Promise<this> {
		if (this.id == null || this.projectId == null) {
			throw new Error(
				"Experiment ID is not set. Cannot tag a local-only experiment."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.experimentTags.setTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPost(
				{},
				{
					projectId: this.projectId!,
					experimentId: this.id!,
					body: {
						key: opts.key,
						value: opts.value,
						tagType: opts.tagType ?? "generic",
					},
				}
			)
		);
		if (!result.ok) throw result.error;
		await this.refresh();
		return this;
	}

	protected _hydrate(raw: ExperimentResponse): void {
		this._applyHydration({
			id: raw.id,
			name: raw.name,
			projectId: raw.projectId,
			createdAt: raw.createdAt,
			updatedAt: raw.updatedAt,
			createdBy: raw.createdBy,
			numSpans: raw.numSpans,
			numTraces: raw.numTraces,
			taskType: raw.taskType,
			aggregateMetrics: raw.aggregateMetrics,
			tags: raw.tags,
		});
	}

	private _applyHydration(raw: ExperimentHydrationSource): void {
		if (raw.id !== undefined) this.id = raw.id;
		if (raw.name !== undefined) this.#name = raw.name;
		if (raw.projectId !== undefined) this.projectId = raw.projectId;
		if (raw.createdAt !== undefined) this.createdAt = raw.createdAt;
		if (raw.updatedAt !== undefined) this.updatedAt = raw.updatedAt ?? null;
		if (raw.createdBy !== undefined) this.createdBy = raw.createdBy ?? null;
		if (raw.numSpans !== undefined) this.numSpans = raw.numSpans ?? null;
		if (raw.numTraces !== undefined) this.numTraces = raw.numTraces ?? null;
		if (raw.taskType !== undefined) this.taskType = raw.taskType;
		if (raw.aggregateMetrics !== undefined)
			this.aggregateMetrics = raw.aggregateMetrics;
		if (raw.tags !== undefined) this.tags = raw.tags;
		this._setState(SyncState.Synced);
	}

}
