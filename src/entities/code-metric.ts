/*
 * CodeMetric — user-supplied code scorer.
 *
 * scorerType is fixed to "code". `loadCode({ path })` is Node-only and
 * guarded via a runtime check.
 *
 * `create()` orchestrates the three-step server flow:
 *   1. POST /scorers/code/validate   (multipart file upload of the code)
 *   2. Poll /scorers/code/validate/{task_id} until `completed` or `failed`
 *      (the terminal `TaskResultStatus` values).
 *   3. POST /scorers                 (create the scorer record)
 *   4. POST /scorers/{id}/version/code (register the first code version)
 *
 * Validation failure or polling timeout transitions the instance to
 * FAILED_SYNC; a `completed` validation payload is forwarded to step 3 as
 * the `validationResult` body parameter to skip server-side re-validation.
 */

import { BaseEntity } from "./base-entity.js";
import { SyncState } from "./stateful-entity.js";
import { Metric, type MetricInit } from "./metric.js";
import { isNodeLike } from "../lib/runtime.js";
import { safeExecute } from "./result.js";
import { TaskResultStatus } from "../models/taskresultstatus.js";
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
	 *
	 * Security: `path` is passed unmodified to `fs.readFile`, so the calling
	 * code is responsible for ensuring it is trusted. Do NOT pass paths that
	 * are influenced by untrusted input (request bodies, user-supplied config,
	 * environment variables that originate from outside the process) — doing
	 * so creates a path-traversal vector exposing any file the Node process
	 * can read. If you need to accept user-supplied code, read the bytes
	 * yourself and assign `this.code` directly instead of calling `loadCode`.
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
		this.ensureNotDeleted();
		if (this.code == null) {
			throw new Error(
				"CodeMetric.create requires `code`. Set it via the constructor or call loadCode({ path }) first."
			);
		}
		const client = BaseEntity.getCLient();
		const code = this.code;
		const fileName = `${this.name}.py`;
		const buildFile = (): {
			fileName: string;
			content: Blob;
		} => ({
			fileName,
			content: new Blob([code], { type: "text/plain" }),
		});

		const validateValue = await this._executeWithFailureState(() =>
			client.prompts.validateCodeScorerScorersCodeValidatePost(
				{},
				{ file: buildFile() }
			)
		);

		const taskResult = (await this._validateCode(
			validateValue.taskId
		)) as { status?: TaskResultStatus };
		if (taskResult.status !== TaskResultStatus.Completed) {
			const err = new Error(
				`CodeMetric.create: code validation returned status '${taskResult.status ?? "UNKNOWN"}'`
			);
			this._setState(SyncState.FailedSync, err);
			throw err;
		}

		const scorer = await this._executeWithFailureState(() =>
			client.prompts.createScorersPost(
				{},
				{
					name: this.name,
					scorerType: "code",
					userPrompt: this.code,
				}
			)
		);
		if (scorer.id == null) {
			const err = new Error(
				"CodeMetric.create: server returned scorer without an id"
			);
			this._setState(SyncState.FailedSync, err);
			throw err;
		}

		await this._executeWithFailureState(() =>
			client.prompts.createCodeScorerVersionScorersScorerIdVersionCodePost(
				{},
				{
					scorerId: scorer.id,
					body: {
						file: buildFile(),
						validationResult: JSON.stringify(taskResult),
					},
				}
			)
		);

		this._hydrate(scorer);
		return this;
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
			const result = await safeExecute(() =>
				client.prompts.getValidateCodeScorerTaskResultScorersCodeValidateTaskIdGet(
					{},
					{ taskId }
				)
			);
			if (!result.ok) throw result.error;
			const status = (result.value as { status?: TaskResultStatus }).status;
			if (
				status === TaskResultStatus.Completed ||
				status === TaskResultStatus.Failed
			) {
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
