/*
 * CodeMetric — user-supplied code scorer.
 *
 * scorerType is fixed to "code". `loadCode({ path })` is Node-only and
 * guarded via a runtime check.
 *
 * There is no top-level `createScorer` endpoint in this SDK. We expose
 * `validateCode` and `createVersion` against an existing scorer, but full
 * 3-step `create()` (validate → create scorer → create code version) is
 * not available; it throws.
 */

import { BaseEntity } from "./base-entity.js";
import { SyncState } from "./stateful-entity.js";
import { Metric, type MetricInit } from "./metric.js";
import { isNodeLike } from "../lib/runtime.js";
import type { ScorerResponse } from "../models/scorerresponse.js";

export interface CodeMetricInit extends MetricInit {
	code?: string;
	nodeLevel?: string;
	requiredMetrics?: string[];
}

export interface CodeMetricLoadCodeOptions {
	path: string;
}

export class CodeMetric extends Metric {
	public code: string | null = null;
	public nodeLevel: string | null = null;
	public requiredMetrics: string[] = [];

	constructor(init: CodeMetricInit) {
		super(init, "code");
		this.code = init.code ?? null;
		this.nodeLevel = init.nodeLevel ?? null;
		this.requiredMetrics = init.requiredMetrics ?? [];
	}

	static _fromApi(raw: ScorerResponse): CodeMetric {
		const metric = new CodeMetric({ name: raw.name });
		metric._hydrate(raw);
		return metric;
	}

	/**
	 * Node-only. Reads `path` from disk and stages the contents on `this.code`.
	 * Browser bundles do not include `fs/promises`; this method throws there.
	 */
	async loadCode(opts: CodeMetricLoadCodeOptions): Promise<this> {
		if (!isNodeLike()) {
			throw new Error(
				"CodeMetric.loadCode is only available in Node.js runtimes."
			);
		}
		const fs = await import("fs/promises");
		this.code = await fs.readFile(opts.path, "utf8");
		return this;
	}

	async create(): Promise<this> {
		throw new Error(
			"CodeMetric.create is not yet supported by this SDK. " +
				"The top-level scorer-create endpoint is not exposed; only " +
				"validateCode and createCodeScorerVersion are available against " +
				"an existing scorer id."
		);
	}

	/**
	 * Polls the validation task until completion. Backoff: initial 500ms,
	 * max 8s, multiplier 2, timeout 60s.
	 */
	protected async _validateCode(taskId: string): Promise<unknown> {
		const start = Date.now();
		let delayMs = 500;
		const maxDelayMs = 8000;
		const timeoutMs = 60000;
		const client = BaseEntity.getCLient();
		while (Date.now() - start < timeoutMs) {
			const result = await BaseEntity.safeExecute(() =>
				client.prompts.getValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet(
					{},
					{ taskId }
				)
			);
			if (!result.ok) throw result.error;
			const status = (result.value as { status?: string }).status;
			if (status === "SUCCESS" || status === "FAILURE") {
				return result.value;
			}
			await new Promise((resolve) => setTimeout(resolve, delayMs));
			delayMs = Math.min(delayMs * 2, maxDelayMs);
		}
		this._setState(
			SyncState.FailedSync,
			new Error(`CodeMetric._validateCode timed out after ${timeoutMs}ms`)
		);
		throw new Error(
			`CodeMetric._validateCode timed out after ${timeoutMs}ms`
		);
	}

	protected override _hydrate(raw: ScorerResponse): void {
		super._hydrate(raw);
		this.code = raw.userPrompt ?? this.code;
	}
}
