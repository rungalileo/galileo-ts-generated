import { GalileoConfig } from "../lib/galileo-config.js";

/**
 * Resolve a project ID from caller options, falling back to the
 * `GALILEO_PROJECT` env var.
 *
 * Resolution order:
 *   1. `opts.projectId` (returned verbatim, must be a non-empty string)
 *   2. `opts.projectName` (must be non-empty; looked up via `Project.get({ name })`)
 *   3. The `GALILEO_PROJECT` env var (only used when non-empty)
 *
 * Empty strings are rejected with `TypeError` rather than treated as
 * "unset", so callers that pass `{ projectId: "" }` get a clear error
 * instead of silently falling through to the env var (which would resolve
 * to a different project than the caller asked for).
 *
 * Throws `Error` when a name lookup misses, and `TypeError` when none of
 * the three sources is set or when an explicit value is the empty string.
 *
 * Lives in its own module because both `Experiment` and `LogStream` resolve
 * project context the same way, and because the function needs to dynamic-
 * import `Project` to avoid a circular dependency through `./project.js`.
 */
export async function resolveProjectId(opts: {
	projectId?: string | undefined;
	projectName?: string | undefined;
}): Promise<string> {
	const explicit = await resolveExplicitProjectId(opts);
	if (explicit !== null) return explicit;
	const envProject = GalileoConfig.get().projectName;
	if (envProject) {
		return resolveProjectByName(envProject);
	}
	throw new TypeError(
		"projectId or projectName must be provided (or GALILEO_PROJECT env var must be set)"
	);
}

/**
 * Optional variant of {@link resolveProjectId}: same validation rules for
 * explicit `projectId` / `projectName`, but returns `null` (instead of
 * consulting `GALILEO_PROJECT` and/or throwing) when neither is provided.
 *
 * Use this for endpoints where "no project context" is a meaningful path —
 * e.g. `Prompt.list()` falls back to the global template list rather than
 * env-scoping unexpectedly.
 *
 * Still throws on:
 *   - empty-string `projectId` / `projectName` (treated as caller error,
 *     never silently downgraded to `null`), and
 *   - `projectName` that doesn't match a project.
 */
export async function resolveOptionalProjectId(opts: {
	projectId?: string | undefined;
	projectName?: string | undefined;
}): Promise<string | null> {
	return resolveExplicitProjectId(opts);
}

/**
 * Resolves an *explicit* projectId/projectName pair without consulting
 * env vars. Returns `null` when neither is provided.
 *
 * Shared by both public helpers above so empty-string validation and
 * name-lookup live in one place.
 */
async function resolveExplicitProjectId(opts: {
	projectId?: string | undefined;
	projectName?: string | undefined;
}): Promise<string | null> {
	if (opts.projectId !== undefined) {
		if (opts.projectId === "") {
			throw new TypeError("projectId must be a non-empty string");
		}
		return opts.projectId;
	}
	if (opts.projectName !== undefined) {
		if (opts.projectName === "") {
			throw new TypeError("projectName must be a non-empty string");
		}
		return resolveProjectByName(opts.projectName);
	}
	return null;
}

async function resolveProjectByName(name: string): Promise<string> {
	const { Project } = await import("./project.js");
	const project = await Project.get({ name });
	if (!project || !project.id) {
		throw new Error(`Project '${name}' not found`);
	}
	return project.id;
}
