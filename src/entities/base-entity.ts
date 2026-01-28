import { AuthConfigStore, GalileoGenerated } from "../index.js";
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
		BaseEntity.client ??= new GalileoGenerated();
		return BaseEntity.client;
	}

	static async authenticate(): Promise<string | null> {
		const authConfig = AuthConfigStore.get();
		
		let result: Token | undefined;		
		if(authConfig?.apiKey){
			result = await BaseEntity.client?.auth.loginApiKeyLoginApiKeyPost({
				apiKey:authConfig.apiKey,
			});
		}else if(authConfig?.login?.username && authConfig?.login?.password){
			result = await BaseEntity.client?.auth.loginEmailLoginPost({
				username:authConfig.login.username,
				password:authConfig.login.password,
			});
		}
		/*else if(authConfig?.sso?.idToken && authConfig?.sso?.provider){
			result = await BaseEntity.client?.auth.ssoLoginPost({
				idToken:authConfig.sso.idToken,
				provider:authConfig.sso.provider,
			});
		}*/

		return result?.accessToken ?? null;
	}

	protected ensureNotDeleted(): void {
		if (this.deleted) {
			throw new Error("Cannot perform operation on deleted project");
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
