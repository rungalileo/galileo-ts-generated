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
	if (opts.projectId !== undefined) {
		if (opts.projectId === "") {
			throw new TypeError(
				"resolveProjectId: projectId must be a non-empty string"
			);
		}
		return opts.projectId;
	}
	if (opts.projectName !== undefined) {
		if (opts.projectName === "") {
			throw new TypeError(
				"resolveProjectId: projectName must be a non-empty string"
			);
		}
		return resolveProjectByName(opts.projectName);
	}
	const envProject = GalileoConfig.get().projectName;
	if (envProject) {
		return resolveProjectByName(envProject);
	}
	throw new TypeError(
		"projectId or projectName must be provided (or GALILEO_PROJECT env var must be set)"
	);
}

async function resolveProjectByName(name: string): Promise<string> {
	const { Project } = await import("./project.js");
	const project = await Project.get({ name });
	if (!project || !project.id) {
		throw new Error(`Project '${name}' not found`);
	}
	return project.id;
}
