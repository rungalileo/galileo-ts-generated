/*
 * Barrel export for hand-written domain entities. Survives Speakeasy
 * regeneration (this directory is on the "safe to edit" allowlist).
 *
 * Per-file deep imports remain supported and recommended for tree-shaking:
 *   import { Project } from "galileo-generated/entities/project.js";
 */

export { BaseEntity } from "./base-entity.js";
export { StatefulEntity, SyncState } from "./stateful-entity.js";

export { Project } from "./project.js";
export type { ProjectInit } from "./project.js";

export { Dataset } from "./dataset.js";
export type {
	DatasetInit,
	DatasetListOptions,
	DatasetGenerateOptions,
} from "./dataset.js";

export { LogStream } from "./log-stream.js";
export type {
	LogStreamInit,
	LogStreamGetOptions,
	LogStreamListOptions,
} from "./log-stream.js";

export { Experiment } from "./experiment.js";
export type {
	ExperimentInit,
	ExperimentGetOptions,
	ExperimentListOptions,
	ExperimentAddTagOptions,
} from "./experiment.js";

export { Prompt } from "./prompt.js";
export type {
	PromptInit,
	PromptGetOptions,
	PromptListOptions,
	PromptCreateVersionOptions,
	PromptMessages,
} from "./prompt.js";

export { PromptVersion } from "./prompt-version.js";
export type { PromptVersionInit } from "./prompt-version.js";

export { Metric, BuiltInMetrics } from "./metric.js";
export type {
	MetricInit,
	MetricGetOptions,
	MetricListOptions,
	BuiltInMetric,
} from "./metric.js";

export { LlmMetric } from "./llm-metric.js";
export type { LlmMetricInit } from "./llm-metric.js";

export { CodeMetric } from "./code-metric.js";
export type {
	CodeMetricInit,
	CodeMetricLoadCodeOptions,
} from "./code-metric.js";

export { GalileoMetric } from "./galileo-metric.js";
export type { GalileoMetricInit } from "./galileo-metric.js";

export { LocalMetric } from "./local-metric.js";
export type {
	LocalMetricInit,
	LocalMetricConfig,
	MetricValue,
} from "./local-metric.js";
