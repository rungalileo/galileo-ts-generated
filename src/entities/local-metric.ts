/*
 * LocalMetric — client-side-only scorer. Never round-trips through the
 * server; all lifecycle methods throw with a clear message.
 *
 * Carries `scorerFn`, `scorableTypes`, and `aggregatableTypes`.
 * `toLocalMetricConfig()` returns a handoff struct for the experiment runner.
 *
 * NB: `scorerFn` is typed as `(input: unknown) => MetricValue` for now.
 * Stricter `Trace` / `Span` typing on the runner side is not yet wired.
 */

import { Metric, type MetricInit } from "./metric.js";
import type { ScorerResponse } from "../models/scorerresponse.js";

export type MetricValue = string | number | boolean | null;

export interface LocalMetricInit extends MetricInit {
	scorerFn: (input: unknown) => MetricValue;
	scorableTypes?: string[];
	aggregatableTypes?: string[];
}

export interface LocalMetricConfig {
	name: string;
	scorerFn: (input: unknown) => MetricValue;
	scorableTypes: string[];
	aggregatableTypes: string[];
}

const ALWAYS_LOCAL_ERROR =
	"LocalMetric is client-side only — it does not sync to the server";

export class LocalMetric extends Metric {
	public scorerFn: (input: unknown) => MetricValue;
	public scorableTypes: string[];
	public aggregatableTypes: string[];

	constructor(init: LocalMetricInit) {
		super(init, "code");
		this.scorerFn = init.scorerFn;
		this.scorableTypes = init.scorableTypes ?? [];
		this.aggregatableTypes = init.aggregatableTypes ?? [];
	}

	static _fromApi(_raw: ScorerResponse): LocalMetric {
		throw new Error(ALWAYS_LOCAL_ERROR);
	}

	override async create(): Promise<this> {
		throw new Error(ALWAYS_LOCAL_ERROR);
	}

	override async refresh(): Promise<this> {
		throw new Error(ALWAYS_LOCAL_ERROR);
	}

	override async delete(): Promise<void> {
		throw new Error(ALWAYS_LOCAL_ERROR);
	}

	protected override async _save(): Promise<this> {
		throw new Error(ALWAYS_LOCAL_ERROR);
	}

	toLocalMetricConfig(): LocalMetricConfig {
		return {
			name: this.name,
			scorerFn: this.scorerFn,
			scorableTypes: this.scorableTypes,
			aggregatableTypes: this.aggregatableTypes,
		};
	}
}
