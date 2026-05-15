import { GalileoConfig } from "../lib/galileo-config.js";

/**
 * Resolve a project ID from caller options, falling back to the
 * `GALILEO_PROJECT` env var.
 *
 * Resolution order:
 *   1. `opts.projectId` (returned verbatim)
 *   2. `opts.projectName` (looked up via `Project.get({ name })`)
 *   3. The `GALILEO_PROJECT` env var (also looked up via `Project.get`)
 *
 * Throws `Error` when a name lookup misses, and `TypeError` when none of
 * the three sources is set.
 *
 * Lives in its own module because both `Experiment` and `LogStream` resolve
 * project context the same way, and because the function needs to dynamic-
 * import `Project` to avoid a circular dependency through `./project.js`.
 */
export async function resolveProjectId(opts: {
	projectId?: string | undefined;
	projectName?: string | undefined;
}): Promise<string> {
	if (opts.projectId) return opts.projectId;
	if (opts.projectName) {
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
