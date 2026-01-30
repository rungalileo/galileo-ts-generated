import { GalileoGenerated, SDKOptions } from "../index.js";
import { Token } from "../models/token.js";
import type { Result } from "../types/fp.js";
import { OK, ERR } from "../types/fp.js";
import { GalileoConfig } from "../lib/galileo-config.js";

export class BaseEntity {
	protected static token: string | null = null;
	protected static client: GalileoGenerated | null = null;
	protected deleted: boolean = false;

	constructor() {}

	static async getToken(): Promise<string | null> {
		BaseEntity.token ??= await BaseEntity.authenticate();
		return BaseEntity.token;
	}

	static setToken(token: string): void {
		BaseEntity.token = token;
	}

	static getCLient(): GalileoGenerated {
		const config = GalileoConfig.get();
		const snap = config.snapshot;
		const clientConfig: SDKOptions = snap.apiUrl ? { serverURL: snap.apiUrl } : {};
		BaseEntity.client ??= new GalileoGenerated(clientConfig);
		return BaseEntity.client;
	}

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
		// CONFIGURE LOGIN/SOCIAL ENDPOINT BEFORE ENABLING THIS
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
