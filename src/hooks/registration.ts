import { CertManagementHook } from "./cert-management.js";
import { ErrorCleanerHook } from "./error-cleaner.js";
import { TokenManagementHook } from "./token-management.js";
import { SDKIdentifierHook } from "./sdk-identifier.js";
import type { Hooks } from "./types.js";

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */

export function initHooks(hooks: Hooks) {
	// Register cert management (TLS with undici Agent)
	const certHook = new CertManagementHook();
	hooks.registerSDKInitHook(certHook);

	// Register token management hooks
	const tokenHook = new TokenManagementHook();
	hooks.registerBeforeRequestHook(tokenHook);
	hooks.registerAfterSuccessHook(tokenHook);

	// Register error cleaning hook
	const errorCleanerHook = new ErrorCleanerHook();
	hooks.registerAfterErrorHook(errorCleanerHook);

	// Register SDK identifier hook
	const sdkIdentifierHook = new SDKIdentifierHook();
	hooks.registerBeforeRequestHook(sdkIdentifierHook);
}
