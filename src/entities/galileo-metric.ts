/*
 * GalileoMetric — preset / Luna scorer (Galileo-managed).
 *
 * `scorerType` is one of "preset" | "luna" (set from the API response;
 * defaults to "preset" for direct construction). No extra editable fields
 * beyond what `Metric` exposes.
 */

import { Metric, type MetricInit } from "./metric.js";
import type { ScorerResponse } from "../models/scorerresponse.js";
import type { ScorerTypes } from "../models/scorertypes.js";

export interface GalileoMetricInit extends MetricInit {
	scorerType?: Extract<ScorerTypes, "preset" | "luna">;
}

export class GalileoMetric extends Metric {
	constructor(init: GalileoMetricInit) {
		super(init, init.scorerType ?? "preset");
	}

	static _fromApi(raw: ScorerResponse): GalileoMetric {
		const isLuna = raw.scorerType === "luna";
		const init: GalileoMetricInit = isLuna
			? { name: raw.name, scorerType: "luna" }
			: { name: raw.name, scorerType: "preset" };
		const metric = new GalileoMetric(init);
		metric._hydrate(raw);
		return metric;
	}

	async create(): Promise<this> {
		throw new Error(
			"GalileoMetric.create is not supported: preset/Luna scorers are " +
				"server-managed and cannot be created by clients."
		);
	}
}
