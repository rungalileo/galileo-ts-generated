import { GalileoGenerated, SDKOptions } from "../index.js";
import { Token } from "../models/token.js";
import type { Result } from "../types/fp.js";
import { OK, ERR } from "../types/fp.js";
import { GalileoConfig } from "../lib/galileo-config.js";

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

	protected static async safeExecute<T>(
		operation: () => Promise<T>
	): Promise<Result<T, Error>> {
		try {
			const value = await operation();
			return OK(value);
		} catch (error) {
			const err = error instanceof Error 
				? error 
				: new Error(String(error));
			return ERR(err);
		}
	}
}
