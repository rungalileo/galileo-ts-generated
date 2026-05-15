import { OK, ERR, type Result } from "../types/fp.js";

/**
 * Run an async operation and wrap its outcome in a `Result`.
 *
 *   - Resolves with `OK(value)` when the operation succeeds.
 *   - Resolves with `ERR(error)` when the operation throws, wrapping non-Error
 *     throws in an Error so the failure type is always `Error`.
 *
 * Lives in `src/entities/` because it's used exclusively by the entity layer
 * and that directory is wholesale safe-to-edit per AGENTS.md, whereas
 * `src/lib/` only whitelists specific files. Pairs with the `OK` / `ERR` /
 * `Result` primitives generated into `src/types/fp.ts`.
 */
export async function safeExecute<T>(
	operation: () => Promise<T>
): Promise<Result<T, Error>> {
	try {
		const value = await operation();
		return OK(value);
	} catch (error) {
		const err =
			error instanceof Error ? error : new Error(String(error));
		return ERR(err);
	}
}
