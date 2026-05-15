import { BaseEntity } from "./base-entity.js";
import { safeExecute } from "./result.js";

/**
 * Lifecycle state for a stateful entity.
 */
export const SyncState = {
	LocalOnly: "local_only",
	Synced: "synced",
	Dirty: "dirty",
	FailedSync: "failed_sync",
	Deleted: "deleted",
} as const;
export type SyncState = (typeof SyncState)[keyof typeof SyncState];

/**
 * Active-Record style base over BaseEntity adding the lifecycle state machine
 * used by every domain entity (Project, Dataset, etc.).
 *
 * State transitions:
 *   LOCAL_ONLY → SYNCED ↔ DIRTY → (FAILED_SYNC | DELETED)
 *
 * Subclasses model dirty-tracking via native getter/setter pairs on tracked
 * fields. Setters call `_markDirty()` when changing a value on a SYNCED
 * instance. `_hydrate()` writes the private backing storage directly so it
 * never trips the setters.
 */
export abstract class StatefulEntity extends BaseEntity {
	#state: SyncState = SyncState.LocalOnly;
	#lastError: Error | null = null;

	get syncState(): SyncState {
		return this.#state;
	}

	get lastError(): Error | null {
		return this.#lastError;
	}

	isLocalOnly(): boolean {
		return this.#state === SyncState.LocalOnly;
	}

	isSynced(): boolean {
		return this.#state === SyncState.Synced;
	}

	isDirty(): boolean {
		return this.#state === SyncState.Dirty;
	}

	hasFailed(): boolean {
		return this.#state === SyncState.FailedSync;
	}

	isDeleted(): boolean {
		return this.#state === SyncState.Deleted;
	}

	protected _setState(state: SyncState, error: Error | null = null): void {
		this.#state = state;
		this.#lastError = error;
		if (state === SyncState.Deleted) {
			this.deleted = true;
		}
	}

	protected _markDirty(): void {
		if (this.#state === SyncState.Synced) {
			this.#state = SyncState.Dirty;
		}
	}

	abstract refresh(): Promise<this>;

	abstract create(): Promise<this>;

	async save(): Promise<this> {
		switch (this.#state) {
			case SyncState.LocalOnly:
				return this.create();
			case SyncState.Synced:
				return this;
			case SyncState.Dirty:
				return this._save();
			case SyncState.Deleted:
				throw new Error(`Cannot save a deleted ${this.#entityLabel()}.`);
			case SyncState.FailedSync:
				throw new Error(
					`Cannot save a ${this.#entityLabel()} in FAILED_SYNC state. ` +
						"Call refresh() to re-sync from the API, then retry your changes."
				);
		}
	}

	/**
	 * Lowercased class name used in error messages, e.g. "Cannot save a
	 * deleted project.".
	 */
	#entityLabel(): string {
		return this.constructor.name.toLowerCase();
	}

	/**
	 * Implemented by subclasses that support PATCH after creation.
	 * Subclasses that don't support updates omit the override and the
	 * inherited implementation throws.
	 */
	protected _save(): Promise<this> {
		throw new Error(
			`${this.constructor.name} does not support updates after creation`
		);
	}

	/**
	 * Run a mutating SDK call and translate any thrown error into the
	 * `FailedSync` lifecycle transition before rethrowing.
	 *
	 *   - Success path: returns the unwrapped value.
	 *   - Failure path: calls `_setState(FailedSync, error)` then throws.
	 *
	 * `delete()` callers can pass `{ idempotentNotFound: true }` to make a
	 * server-side 404 a silent no-op (returns `null`) instead of failing:
	 * the convention for DELETE is idempotent ("already gone" is success),
	 * and a `FailedSync` on a deleted resource is a confusing UX.
	 *
	 * Use this in `create()` / `refresh()` / `_save()` / `delete()` and other
	 * mutations that should mark the entity as failed on error. Lookups that
	 * translate 404 to `null` instead should use `BaseEntity.fetchNullable`.
	 */
	protected async _executeWithFailureState<T>(
		operation: () => Promise<T>
	): Promise<T>;
	protected async _executeWithFailureState<T>(
		operation: () => Promise<T>,
		options: { idempotentNotFound: true }
	): Promise<T | null>;
	protected async _executeWithFailureState<T>(
		operation: () => Promise<T>,
		options: { idempotentNotFound?: boolean } = {}
	): Promise<T | null> {
		const result = await safeExecute(operation);
		if (!result.ok) {
			if (
				options.idempotentNotFound &&
				StatefulEntity.isNotFound(result.error)
			) {
				return null;
			}
			this._setState(SyncState.FailedSync, result.error);
			throw result.error;
		}
		return result.value;
	}
}
