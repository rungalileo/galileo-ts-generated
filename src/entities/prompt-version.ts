/*
 * PromptVersion is an immutable value object.
 *
 * Not a StatefulEntity: no lifecycle, no API call. Construction is the
 * single point of state assignment.
 */

import type { BasePromptTemplateVersionResponse } from "../models/baseprompttemplateversionresponse.js";
import type { PromptRunSettings } from "../models/promptrunsettings.js";

type MessagesOrTemplate =
	BasePromptTemplateVersionResponse["template"];

export interface PromptVersionInit {
	id: string;
	version: number;
	messages: MessagesOrTemplate;
	settings: PromptRunSettings;
	createdAt: Date;
	updatedAt: Date;
}

export class PromptVersion {
	public readonly id: string;
	public readonly version: number;
	public readonly messages: MessagesOrTemplate;
	public readonly settings: PromptRunSettings;
	public readonly createdAt: Date;
	public readonly updatedAt: Date;

	constructor(init: PromptVersionInit) {
		this.id = init.id;
		this.version = init.version;
		this.messages = init.messages;
		this.settings = init.settings;
		this.createdAt = init.createdAt;
		this.updatedAt = init.updatedAt;
	}

	static _fromApi(raw: BasePromptTemplateVersionResponse): PromptVersion {
		return new PromptVersion({
			id: raw.id,
			version: raw.version,
			messages: raw.template,
			settings: raw.settings,
			createdAt: raw.createdAt,
			updatedAt: raw.updatedAt,
		});
	}
}
