/*
 * LlmMetric — LLM-judge scorer.
 *
 * scorerType is fixed to "llm". Accepts modern (prompt/model/judges) and
 * legacy (userPrompt/modelName/numJudges) names with priority resolution
 * (modern wins).
 *
 * The LLM autogen endpoint (`autogenLlmScorerScorersLlmAutogenPost`) starts
 * an async task and returns a task id; full "create then poll" orchestration
 * is not implemented here. `create()` throws a clear error pointing to the
 * autogen API as the manual fallback.
 */

import { Metric, type MetricInit } from "./metric.js";
import type { ScorerResponse } from "../models/scorerresponse.js";

export interface LlmMetricInit extends MetricInit {
	prompt?: string | undefined;
	userPrompt?: string | undefined;
	model?: string | undefined;
	modelName?: string | undefined;
	judges?: number | undefined;
	numJudges?: number | undefined;
	outputType?: string | undefined;
	nodeLevel?: string | undefined;
	cotEnabled?: boolean | undefined;
}

export class LlmMetric extends Metric {
	public prompt: string | null = null;
	public outputType: string | null = null;
	public nodeLevel: string | null = null;

	constructor(init: LlmMetricInit) {
		super(init, "llm");
		// Modern names take precedence over legacy ones.
		this.prompt = init.prompt ?? init.userPrompt ?? null;
		this.model = init.model ?? init.modelName ?? null;
		this.judges = init.judges ?? init.numJudges ?? null;
		this.outputType = init.outputType ?? null;
		this.nodeLevel = init.nodeLevel ?? null;
		this.cotEnabled = init.cotEnabled ?? null;
	}

	static _fromApi(raw: ScorerResponse): LlmMetric {
		const metric = new LlmMetric({
			name: raw.name,
			prompt: raw.userPrompt ?? undefined,
		});
		metric._hydrate(raw);
		return metric;
	}

	async create(): Promise<this> {
		throw new Error(
			"LlmMetric.create is not yet supported by this SDK. " +
				"Use the autogen LLM scorer endpoint (autogenLlmScorerScorersLlmAutogenPost) " +
				"directly via the generated SDK client."
		);
	}

	protected override _hydrate(raw: ScorerResponse): void {
		super._hydrate(raw);
		this.prompt = raw.userPrompt ?? this.prompt;
	}
}
