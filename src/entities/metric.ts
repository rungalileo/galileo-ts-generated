/*
 * Abstract Metric base + polymorphic dispatch + built-in accessor.
 *
 * Subclass hierarchy: LlmMetric, CodeMetric, GalileoMetric, LocalMetric —
 * each lives in its own file. Only `name` is dirty-tracked.
 *
 * This file owns:
 *   - The abstract base + state machine.
 *   - The `_createMetricFromType` dispatcher used by `get`/`list`.
 *   - Built-in scorer accessors (`Metric.metrics`, `Metric.scorers`) backed by
 *     the generated `ScorerTypes` enum.
 *
 * The base class is abstract — direct instantiation is disallowed via a
 * `protected constructor`. Subclasses pass `scorerType` to `super()`.
 */

import { BaseEntity } from "./base-entity.js";
import { StatefulEntity, SyncState } from "./stateful-entity.js";
import { GalileoGeneratedError } from "../models/errors/galileogeneratederror.js";
import type { ListScorersRequest } from "../models/listscorersrequest.js";
import type { ScorerResponse } from "../models/scorerresponse.js";
import type { ScorerTypes } from "../models/scorertypes.js";

export interface MetricInit {
	name: string;
}

export interface MetricGetOptions {
	id?: string | undefined;
	name?: string | undefined;
}

export interface MetricListOptions {
	limit?: number | undefined;
	nameFilter?: string | undefined;
}

type MetricHydrationSource = {
	id?: string | undefined;
	name?: string | undefined;
	scorerType?: ScorerTypes | undefined;
	description?: string | null | undefined;
	tags?: string[] | undefined;
	createdAt?: Date | undefined;
	updatedAt?: Date | undefined;
	version?: number | null | undefined;
	model?: string | null | undefined;
	judges?: number | null | undefined;
	cotEnabled?: boolean | null | undefined;
};

/**
 * Generated `ScorerTypes` enum values, re-exported with a stable
 * client-facing name (`BuiltInMetrics`).
 *
 * Note: `ScorerTypes` is an OpenEnum carrying the four core families
 * (llm / code / luna / preset). Specific scorer *names* live in the API,
 * not in a frozen enum, so callers fetch them with `Metric.list({ nameFilter })`.
 */
export const BuiltInMetrics = {
	Llm: "llm",
	Code: "code",
	Luna: "luna",
	Preset: "preset",
} as const;
export type BuiltInMetric = (typeof BuiltInMetrics)[keyof typeof BuiltInMetrics];

export abstract class Metric extends StatefulEntity {
	public id: string | null = null;
	public createdAt: Date | null = null;
	public updatedAt: Date | null = null;
	public scorerType: ScorerTypes;
	public description: string | null = null;
	public tags: string[] = [];
	public version: number | null = null;
	public model: string | null = null;
	public judges: number | null = null;
	public cotEnabled: boolean | null = null;

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

	static readonly metrics = BuiltInMetrics;
	static readonly scorers = BuiltInMetrics;

	protected constructor(init: MetricInit, scorerType: ScorerTypes) {
		super();
		if (!init.name) {
			throw new TypeError(`${new.target.name} requires a name`);
		}
		this.#name = init.name;
		this.scorerType = scorerType;
	}

	/**
	 * Polymorphic dispatcher: builds the appropriate subclass instance from a
	 * `ScorerResponse` based on its `scorerType`. Local-only metrics never
	 * round-trip through the server and are therefore not produced here.
	 */
	static async _createMetricFromType(
		raw: ScorerResponse
	): Promise<Metric> {
		switch (raw.scorerType) {
			case "llm": {
				const { LlmMetric } = await import("./llm-metric.js");
				return LlmMetric._fromApi(raw);
			}
			case "code": {
				const { CodeMetric } = await import("./code-metric.js");
				return CodeMetric._fromApi(raw);
			}
			case "luna":
			case "preset": {
				const { GalileoMetric } = await import("./galileo-metric.js");
				return GalileoMetric._fromApi(raw);
			}
			default: {
				// Unknown scorer types fall back to GalileoMetric to keep
				// `list()` resilient when the API ships a new type.
				const { GalileoMetric } = await import("./galileo-metric.js");
				return GalileoMetric._fromApi(raw);
			}
		}
	}

	static async get(opts: MetricGetOptions): Promise<Metric | null> {
		const { id, name } = opts;
		if (id != null && name != null) {
			throw new TypeError(
				"Metric.get: provide exactly one of id or name, not both"
			);
		}
		if (id == null && name == null) {
			throw new TypeError("Metric.get: provide either id or name");
		}
		const client = BaseEntity.getCLient();
		if (id != null) {
			const result = await BaseEntity.safeExecute(() =>
				client.prompts.getScorerScorersScorerIdGet({}, { scorerId: id })
			);
			if (!result.ok) {
				if (Metric.#isNotFound(result.error)) return null;
				throw result.error;
			}
			return Metric._createMetricFromType(result.value);
		}
		const list = await Metric.list({ nameFilter: name });
		return list.find((m) => m.name === name) ?? null;
	}

	static async list(opts: MetricListOptions = {}): Promise<Metric[]> {
		const client = BaseEntity.getCLient();
		const body: ListScorersRequest = {};
		if (opts.nameFilter) {
			body.filters = [
				{ name: "name", operator: "eq", value: opts.nameFilter },
			];
		}
		const request: { limit?: number; body: ListScorersRequest } = { body };
		if (opts.limit != null) request.limit = opts.limit;
		const result = await BaseEntity.safeExecute(() =>
			client.prompts.listScorersWithFiltersScorersListPost({}, request)
		);
		if (!result.ok) throw result.error;
		const scorers = result.value.scorers ?? [];
		return Promise.all(scorers.map((s) => Metric._createMetricFromType(s)));
	}

	async refresh(): Promise<this> {
		this.ensureNotDeleted();
		if (this.id == null) {
			throw new Error(
				"Metric ID is not set. Cannot refresh a local-only metric."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await BaseEntity.safeExecute(() =>
			client.prompts.getScorerScorersScorerIdGet(
				{},
				{ scorerId: this.id! }
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
		if (this.id == null) {
			throw new Error(
				"Metric ID is not set. Cannot delete a local-only metric."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await BaseEntity.safeExecute(() =>
			client.prompts.deleteScorerScorersScorerIdDelete(
				{},
				{ scorerId: this.id! }
			)
		);
		if (!result.ok) {
			this._setState(SyncState.FailedSync, result.error);
			throw result.error;
		}
		this._setState(SyncState.Deleted);
	}

	protected _hydrate(raw: ScorerResponse): void {
		const payload: MetricHydrationSource = {
			id: raw.id,
			name: raw.name,
			scorerType: raw.scorerType,
			tags: raw.tags ?? [],
			version: raw.latestVersion?.version ?? null,
			model: raw.modelType ?? null,
			judges: null,
			cotEnabled: null,
		};
		if (raw.createdAt != null) payload.createdAt = raw.createdAt;
		if (raw.updatedAt != null) payload.updatedAt = raw.updatedAt;
		this._applyMetricHydration(payload);
	}

	protected _applyMetricHydration(raw: MetricHydrationSource): void {
		if (raw.id !== undefined) this.id = raw.id;
		if (raw.name !== undefined) this.#name = raw.name;
		if (raw.scorerType !== undefined) this.scorerType = raw.scorerType;
		if (raw.description !== undefined)
			this.description = raw.description ?? null;
		if (raw.tags !== undefined) this.tags = raw.tags;
		if (raw.createdAt !== undefined) this.createdAt = raw.createdAt;
		if (raw.updatedAt !== undefined) this.updatedAt = raw.updatedAt;
		if (raw.version !== undefined) this.version = raw.version ?? null;
		if (raw.model !== undefined) this.model = raw.model ?? null;
		if (raw.judges !== undefined) this.judges = raw.judges ?? null;
		if (raw.cotEnabled !== undefined)
			this.cotEnabled = raw.cotEnabled ?? null;
		this._setState(SyncState.Synced);
	}

	static #isNotFound(error: Error): boolean {
		if (error instanceof GalileoGeneratedError && error.statusCode === 404) {
			return true;
		}
		return /\b404\b|not\s*found/i.test(error.message);
	}
}
