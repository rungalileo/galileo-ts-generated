/*
 * LlmMetric — LLM-judge scorer.
 *
 * scorerType is fixed to "llm". Accepts modern (prompt/model/judges) and
 * legacy (userPrompt/modelName/numJudges) names with priority resolution
 * (modern wins).
 *
 * `create()` issues two server calls:
 *   1. POST /scorers                         (create the scorer record)
 *   2. POST /scorers/{id}/version/llm        (register the first LLM version)
 * No async polling is required — this replaces the previous autogen-based
 * workaround. Any failure transitions the instance to FAILED_SYNC.
 */

import { BaseEntity } from "./base-entity.js";
import { Metric, type MetricInit } from "./metric.js";
import { SyncState } from "./stateful-entity.js";
import type { OutputTypeEnum } from "../models/outputtypeenum.js";
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
		this.ensureNotDeleted();
		const client = BaseEntity.getCLient();

		const scorer = await this._executeWithFailureState(() =>
			client.prompts.createScorersPost(
				{},
				{
					name: this.name,
					scorerType: "llm",
					userPrompt: this.prompt ?? undefined,
				}
			)
		);
		if (scorer.id == null) {
			const err = new Error(
				"LlmMetric.create: server returned scorer without an id"
			);
			this._setState(SyncState.FailedSync, err);
			throw err;
		}

		await this._executeWithFailureState(() =>
			client.prompts.createLlmScorerVersionScorersScorerIdVersionLlmPost(
				{},
				{
					scorerId: scorer.id,
					body: {
						userPrompt: this.prompt ?? undefined,
						modelName: this.model ?? undefined,
						numJudges: this.judges ?? undefined,
						cotEnabled: this.cotEnabled ?? undefined,
						outputType:
							(this.outputType as OutputTypeEnum | null) ?? undefined,
					},
				}
			)
		);

		this._hydrate(scorer);
		return this;
	}

	protected override _hydrate(raw: ScorerResponse): void {
		super._hydrate(raw);
		this.prompt = raw.userPrompt ?? this.prompt;
	}
}
