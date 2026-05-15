/*
 * Prompt domain entity (prompt template + selected version).
 *
 * Only `name` is dirty-tracked. `selectedVersionNumber` /
 * `selectedVersionId` / `totalVersions` are read-only fields hydrated from
 * the API.
 *
 * Limitation: the BasePromptTemplateResponse from the API does NOT include
 * the parent project association, so `_fromApi` leaves `projectId` /
 * `projectName` as null. Callers that need project linkage must pass it
 * explicitly (constructor or list filter).
 */

import { BaseEntity } from "./base-entity.js";
import { resolveOptionalProjectId } from "./resolve-project.js";
import { StatefulEntity, SyncState } from "./stateful-entity.js";
import { PromptVersion } from "./prompt-version.js";
import { safeExecute } from "./result.js";
import type { BasePromptTemplateResponse } from "../models/baseprompttemplateresponse.js";
import type { BasePromptTemplateVersion } from "../models/baseprompttemplateversion.js";
import type { GalileoCoreSchemasSharedMessageMessage } from "../models/galileocoreschemassharedmessagemessage.js";
import type { ListPromptTemplateParams } from "../models/listprompttemplateparams.js";

export type PromptMessages =
	| string
	| Array<GalileoCoreSchemasSharedMessageMessage>;

export interface PromptInit {
	name: string;
	messages: PromptMessages;
	projectId?: string | null;
	projectName?: string | null;
}

export interface PromptGetOptions {
	id?: string;
	name?: string;
	projectId?: string;
	projectName?: string;
}

export interface PromptListOptions {
	nameFilter?: string | undefined;
	limit?: number | undefined;
	projectId?: string | undefined;
	projectName?: string | undefined;
}

export interface PromptCreateVersionOptions {
	messages?: PromptMessages;
}

type PromptHydrationSource = {
	id?: string | undefined;
	name?: string | undefined;
	messages?: PromptMessages | undefined;
	selectedVersionId?: string | undefined;
	selectedVersionNumber?: number | undefined;
	totalVersions?: number | undefined;
	maxVersion?: number | undefined;
	allAvailableVersions?: number[] | undefined;
	createdAt?: Date | undefined;
	updatedAt?: Date | undefined;
};

export class Prompt extends StatefulEntity {
	public id: string | null = null;
	public createdAt: Date | null = null;
	public updatedAt: Date | null = null;
	public projectId: string | null;
	public projectName: string | null;
	public messages: PromptMessages;
	public selectedVersionId: string | null = null;
	public selectedVersionNumber: number = 0;
	public totalVersions: number = 0;
	public maxVersion: number = 0;
	public allAvailableVersions: number[] = [];

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

	constructor(init: PromptInit) {
		super();
		if (!init.name) {
			throw new TypeError("Prompt requires a name");
		}
		if (init.messages == null) {
			throw new TypeError("Prompt requires messages");
		}
		this.#name = init.name;
		this.messages = init.messages;
		this.projectId = init.projectId ?? null;
		this.projectName = init.projectName ?? null;
	}

	static _fromApi(raw: BasePromptTemplateResponse): Prompt {
		const name = typeof raw.name === "string" ? raw.name : String(raw.name);
		const prompt = new Prompt({
			name,
			messages: raw.selectedVersion.template,
		});
		prompt._hydrate(raw);
		return prompt;
	}

	static async get(opts: PromptGetOptions): Promise<Prompt | null> {
		BaseEntity.assertSingleIdentifier(opts, "Prompt");
		const { id, name } = opts;
		const client = BaseEntity.getCLient();
		if (id != null) {
			return BaseEntity.fetchNullable(
				() =>
					client.prompts.getGlobalTemplateTemplatesTemplateIdGet(
						{},
						{ templateId: id }
					),
				(raw) => Prompt._fromApi(raw)
			);
		}
		const list = await Prompt.list({ nameFilter: name, limit: 1000 });
		return list.find((p) => p.name === name) ?? null;
	}

	static async list(opts: PromptListOptions = {}): Promise<Prompt[]> {
		const client = BaseEntity.getCLient();
		const projectId = await resolveOptionalProjectId(opts);
		if (projectId != null) {
			const result = await safeExecute(() =>
				client.prompts.getProjectTemplatesProjectsProjectIdTemplatesGet(
					{},
					{ projectId }
				)
			);
			if (!result.ok) throw result.error;
			let templates = result.value;
			if (opts.nameFilter !== undefined) {
				templates = templates.filter((t) => t.name === opts.nameFilter);
			}
			if (opts.limit != null) {
				templates = templates.slice(0, opts.limit);
			}
			return templates.map((t) => Prompt._fromApi(t));
		}
		const body: ListPromptTemplateParams = {};
		if (opts.nameFilter !== undefined) {
			body.filters = [
				{ name: "name", operator: "eq", value: opts.nameFilter },
			];
		}
		const request: {
			limit?: number;
			body?: ListPromptTemplateParams;
		} = { body };
		if (opts.limit != null) request.limit = opts.limit;
		const result = await safeExecute(() =>
			client.prompts.queryTemplatesTemplatesQueryPost({}, request)
		);
		if (!result.ok) throw result.error;
		return (result.value.templates ?? []).map((t) => Prompt._fromApi(t));
	}

	async create(): Promise<this> {
		this.ensureNotDeleted();
		if (this.projectId == null) {
			throw new Error(
				"Prompt projectId is not set. Cannot create a prompt without a parent project."
			);
		}
		const client = BaseEntity.getCLient();
		const value = await this._executeWithFailureState(() =>
			client.prompts.createPromptTemplateWithVersionProjectsProjectIdTemplatesPost(
				{},
				{
					projectId: this.projectId!,
					body: { name: this.#name, template: this.messages },
				}
			)
		);
		this._hydrate(value);
		return this;
	}

	async refresh(): Promise<this> {
		this.ensureNotDeleted();
		if (this.id == null) {
			throw new Error(
				"Prompt ID is not set. Cannot refresh a local-only prompt."
			);
		}
		const client = BaseEntity.getCLient();
		const value = await this._executeWithFailureState(() =>
			client.prompts.getGlobalTemplateTemplatesTemplateIdGet(
				{},
				{ templateId: this.id! }
			)
		);
		this._hydrate(value);
		return this;
	}

	protected override async _save(): Promise<this> {
		this.ensureNotDeleted();
		if (this.id == null) {
			throw new Error(
				"Prompt ID is not set. Cannot update a prompt without an ID."
			);
		}
		const client = BaseEntity.getCLient();
		const value = await this._executeWithFailureState(() =>
			client.prompts.updateGlobalTemplateTemplatesTemplateIdPatch(
				{},
				{ templateId: this.id!, body: { name: this.#name } }
			)
		);
		this._hydrate(value);
		return this;
	}

	async delete(): Promise<void> {
		if (this.id == null) {
			throw new Error(
				"Prompt ID is not set. Cannot delete a local-only prompt."
			);
		}
		const client = BaseEntity.getCLient();
		await this._executeWithFailureState(
			() =>
				client.prompts.deleteGlobalTemplateTemplatesTemplateIdDelete(
					{},
					{ templateId: this.id! }
				),
			{ idempotentNotFound: true }
		);
		this._setState(SyncState.Deleted);
	}

	async createVersion(
		opts: PromptCreateVersionOptions = {}
	): Promise<this> {
		if (this.id == null) {
			throw new Error(
				"Prompt ID is not set. Cannot create a version of a local-only prompt."
			);
		}
		const client = BaseEntity.getCLient();
		const messages = opts.messages ?? this.messages;
		const body: BasePromptTemplateVersion = { template: messages };
		const result = await safeExecute(() =>
			client.prompts.createGlobalPromptTemplateVersionTemplatesTemplateIdVersionsPost(
				{},
				{ templateId: this.id!, body }
			)
		);
		if (!result.ok) throw result.error;
		// Refresh to pick up the new version + selection state.
		await this.refresh();
		return this;
	}

	async listVersions(): Promise<PromptVersion[]> {
		if (this.id == null) {
			throw new Error(
				"Prompt ID is not set. Cannot list versions for a local-only prompt."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.prompts.queryTemplateVersionsTemplatesTemplateIdVersionsQueryPost(
				{},
				{ templateId: this.id! }
			)
		);
		if (!result.ok) throw result.error;
		const versions = result.value.versions ?? [];
		return versions
			.map((v) => PromptVersion._fromApi(v))
			.sort((a, b) => b.version - a.version);
	}

	async selectVersion(opts: { version: number }): Promise<this> {
		if (this.id == null || this.projectId == null) {
			throw new Error(
				"Prompt ID and projectId are required to select a version."
			);
		}
		const client = BaseEntity.getCLient();
		const result = await safeExecute(() =>
			client.prompts.setSelectedTemplateVersionProjectsProjectIdTemplatesTemplateIdVersionsVersionPut(
				{},
				{
					projectId: this.projectId!,
					templateId: this.id!,
					version: opts.version,
				}
			)
		);
		if (!result.ok) throw result.error;
		this._hydrate(result.value);
		return this;
	}

	protected _hydrate(raw: BasePromptTemplateResponse): void {
		const name = typeof raw.name === "string" ? raw.name : String(raw.name);
		this._applyHydration({
			id: raw.id,
			name,
			messages: raw.selectedVersion.template,
			selectedVersionId: raw.selectedVersionId,
			selectedVersionNumber: raw.selectedVersion.version,
			totalVersions: raw.totalVersions,
			maxVersion: raw.maxVersion,
			allAvailableVersions: raw.allAvailableVersions,
			createdAt: raw.createdAt,
			updatedAt: raw.updatedAt,
		});
	}

	private _applyHydration(raw: PromptHydrationSource): void {
		if (raw.id !== undefined) this.id = raw.id;
		if (raw.name !== undefined) this.#name = raw.name;
		if (raw.messages !== undefined) this.messages = raw.messages;
		if (raw.selectedVersionId !== undefined)
			this.selectedVersionId = raw.selectedVersionId;
		if (raw.selectedVersionNumber !== undefined)
			this.selectedVersionNumber = raw.selectedVersionNumber;
		if (raw.totalVersions !== undefined)
			this.totalVersions = raw.totalVersions;
		if (raw.maxVersion !== undefined) this.maxVersion = raw.maxVersion;
		if (raw.allAvailableVersions !== undefined)
			this.allAvailableVersions = raw.allAvailableVersions;
		if (raw.createdAt !== undefined) this.createdAt = raw.createdAt;
		if (raw.updatedAt !== undefined) this.updatedAt = raw.updatedAt;
		this._setState(SyncState.Synced);
	}

}
