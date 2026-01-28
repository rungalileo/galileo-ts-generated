import { EnvConfigStore, GalileoGenerated, SDKOptions } from "../index.js";
import { Token } from "../models/token.js";
import type { Result } from "../types/fp.js";
import { OK, ERR } from "../types/fp.js";

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
		const envConfig = EnvConfigStore.get();
		const clientConfig: SDKOptions = envConfig?.apiUrl ? { serverURL: envConfig.apiUrl } : {};
		BaseEntity.client ??= new GalileoGenerated(clientConfig);
		return BaseEntity.client;
	}

	static async authenticate(): Promise<string | null> {
		const authConfig = EnvConfigStore.get();
		
		let result: Token | undefined;		
		if(authConfig?.apiKey){
			result = await BaseEntity.getCLient().auth.loginApiKeyLoginApiKeyPost({
				apiKey:authConfig.apiKey,
			});
		}else if(authConfig?.login?.username && authConfig?.login?.password){
			result = await BaseEntity.getCLient().auth.loginEmailLoginPost({
				username:authConfig.login.username,
				password:authConfig.login.password,
			});
		}
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
