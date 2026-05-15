import { GalileoGenerated, SDKOptions } from "../index.js";
import { Token } from "../models/token.js";
import { GalileoConfig } from "../lib/galileo-config.js";
import { GalileoGeneratedError } from "../models/errors/galileogeneratederror.js";
import { safeExecute } from "./result.js";

/**
 * Base class for Galileo SDK entities with shared authentication and API client management.
 */
export class BaseEntity {
	protected static token: string | null = null;
	protected static client: GalileoGenerated | null = null;
	protected deleted: boolean = false;

	constructor() {}

	/**
	 * Returns the current authentication token, performing authentication if none is set.
	 * @returns A promise that resolves to the access token, or null if authentication fails.
	 */
	static async getToken(): Promise<string | null> {
		BaseEntity.token ??= await BaseEntity.authenticate();
		return BaseEntity.token;
	}

	/**
	 * Sets the authentication token for API requests.
	 * @param token - The access token to use for authentication.
	 */
	static setToken(token: string): void {
		BaseEntity.token = token;
	}

	/**
	 * Clears the static token and client. For use in tests only.
	 */
	static resetForTesting(): void {
		BaseEntity.token = null;
		BaseEntity.client = null;
	}

	/**
	 * Returns the shared Galileo API client instance, creating it from config if needed.
	 * @returns The GalileoGenerated API client.
	 */
	static getCLient(): GalileoGenerated {
		const config = GalileoConfig.get();
		const snap = config.snapshot;
		const clientConfig: SDKOptions = snap.apiUrl ? { serverURL: snap.apiUrl } : {};
		BaseEntity.client ??= new GalileoGenerated(clientConfig);
		return BaseEntity.client;
	}

	/**
	 * Authenticates with the Galileo API using configured API key or login credentials.
	 * @returns A promise that resolves to the access token, or null if authentication fails or is not configured.
	 */
	static async authenticate(): Promise<string | null> {
		const authConfig = GalileoConfig.get().snapshot;

		let result: Token | undefined;
		if (authConfig?.apiKey) {
			result = await BaseEntity.getCLient().auth.loginApiKeyLoginApiKeyPost({
				apiKey: authConfig.apiKey,
			});
		} else if (authConfig?.login?.username && authConfig?.login?.password) {
			result = await BaseEntity.getCLient().auth.loginEmailLoginPost({
				username: authConfig.login.username,
				password: authConfig.login.password,
			});
		}
		// CONFIGURE LOGIN/SOCIAL ENDPOINT BEFORE ENABLING THIS FEATURE
		/*else if(authConfig?.sso?.idToken && authConfig?.sso?.provider){
			result = await BaseEntity.getCLient().auth.ssoLoginPost({
				idToken:authConfig.sso.idToken,
				provider:authConfig.sso.provider,
			});
		}*/

		return result?.accessToken ?? null;
	}

	protected ensureNotDeleted(): void {
		if (this.deleted) {
			throw new Error("Cannot perform operation on deleted entity");
		}
	}

	/**
	 * Returns true when the given error represents a 404 from the API.
	 * Used by entity `get(...)` static methods to translate "not found"
	 * into a `null` return rather than rethrowing.
	 */
	protected static isNotFound(error: Error): boolean {
		if (error instanceof GalileoGeneratedError && error.statusCode === 404) {
			return true;
		}
		return /\b404\b|not\s*found/i.test(error.message);
	}

	/**
	 * Run an entity lookup that may 404 and convert the not-found case into
	 * a `null` return rather than rethrowing. Any other error from the
	 * underlying call propagates.
	 *
	 * `operation` performs the SDK call; `mapper` converts the raw response
	 * to the entity instance (sync or async, e.g. `_fromApi` or the polymorphic
	 * `Metric._createMetricFromType`).
	 */
	protected static async fetchNullable<T, R>(
		operation: () => Promise<T>,
		mapper: (raw: T) => R | Promise<R>
	): Promise<R | null> {
		const result = await safeExecute(operation);
		if (!result.ok) {
			if (BaseEntity.isNotFound(result.error)) return null;
			throw result.error;
		}
		return await mapper(result.value);
	}

	/**
	 * Enforces the "provide exactly one of id or name" contract used by every
	 * entity's `get(...)` lookup. Throws `TypeError` when both are provided
	 * or when neither is. `entity` is the class name used in the error
	 * message (e.g. "Project.get: provide either id or name").
	 */
	protected static assertSingleIdentifier(
		opts: { id?: string | undefined; name?: string | undefined },
		entity: string
	): void {
		if (opts.id != null && opts.name != null) {
			throw new TypeError(
				`${entity}.get: provide exactly one of id or name, not both`
			);
		}
		if (opts.id == null && opts.name == null) {
			throw new TypeError(`${entity}.get: provide either id or name`);
		}
	}
}
