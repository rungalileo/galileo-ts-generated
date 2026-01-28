/*
 * Auth configuration store for SDK initialization.
 */

import { isBrowserLike, isDeno, isNodeLike } from "./runtime.js";

export type AuthConfig = {
  apiKey?: string;
  login?: { username?: string; password?: string };
  sso?: Record<string, unknown>;
};

const DEFAULT_BROWSER_GLOBAL = "__GALILEO_AUTH__";
const DEFAULT_LOCAL_STORAGE_KEY = "galileo_auth_config";
const ENV_API_KEY = "GALILEO_API_KEY";
const ENV_USERNAME = "GALILEO_USERNAME";
const ENV_PASSWORD = "GALILEO_PASSWORD";
const ENV_SSO_ID_TOKEN = "GALILEO_SSO_ID_TOKEN";
const ENV_SSO_PROVIDER = "GALILEO_SSO_PROVIDER";

// biome-ignore lint/complexity/noStaticOnlyClass: Singleton-like store.
export class AuthConfigStore {
  static #config: AuthConfig | null = null;

  static set(config: AuthConfig): void {
    AuthConfigStore.#config = normalizeAuthConfig(config);
  }

  static clear(): void {
    AuthConfigStore.#config = null;
  }

  static refreshFromEnvironment(): AuthConfig | null {
    const config = resolveConfigFromEnvironment();
    AuthConfigStore.#config = config;
    return config;
  }

  static get(): AuthConfig | null {
    if (AuthConfigStore.#config) {
      return AuthConfigStore.#config;
    }

    return AuthConfigStore.refreshFromEnvironment();
  }

  static getRedacted(): AuthConfig | null {
    return redactAuthConfig(AuthConfigStore.get());
  }
}

function resolveConfigFromEnvironment(): AuthConfig | null {
  if (isBrowserLike()) {
    return (
      readFromBrowserGlobal(DEFAULT_BROWSER_GLOBAL)
      || readFromLocalStorage(DEFAULT_LOCAL_STORAGE_KEY)
    );
  }

  if (isDeno() || isNodeLike()) {
    return readFromEnv();
  }

  return null;
}

function readFromBrowserGlobal(globalName: string): AuthConfig | null {
  const gt = typeof globalThis === "undefined"
    ? null
    : (globalThis as Record<string, unknown>);
  if (gt == null) {
    return null;
  }

  return parseAuthConfigValue(gt[globalName]);
}

function readFromLocalStorage(key: string): AuthConfig | null {
  if (typeof globalThis === "undefined") {
    return null;
  }

  try {
    if (!("localStorage" in globalThis)) {
      return null;
    }
    const raw = globalThis.localStorage?.getItem(key);
    return parseAuthConfigValue(raw);
  } catch {
    return null;
  }
}

function readFromEnv(): AuthConfig | null {
  const env = readEnvObject();
  if (!env) {
    return null;
  }

  const apiKey = env[ENV_API_KEY];
  const username = env[ENV_USERNAME];
  const password = env[ENV_PASSWORD];
  const ssoIdToken = env[ENV_SSO_ID_TOKEN];
  const ssoProvider = env[ENV_SSO_PROVIDER];

  const sso = normalizeSSO(
    ssoIdToken || ssoProvider
      ? { idToken: ssoIdToken, provider: ssoProvider?.toLowerCase() }
      : null,
  );

  if (!apiKey && !username && !password && !sso) {
    return null;
  }

  return {
    ...(apiKey ? { apiKey } : {}),
    ...((username || password)
      ? { login: { ...(username ? { username } : {}), ...(password ? { password } : {}) } }
      : {}),
    ...(sso ? { sso } : {}),
  };
}

function readEnvObject(): Record<string, string | undefined> | null {
  if (isDeno()) {
    const deno = (globalThis as unknown as {
      Deno?: { env?: { toObject?: () => Record<string, string> } };
    }).Deno;
    return deno?.env?.toObject?.() ?? null;
  }

  if (isNodeLike()) {
    const proc = (globalThis as unknown as {
      process?: { env?: Record<string, string | undefined> };
    }).process;
    return proc?.env ?? null;
  }

  return null;
}

function parseAuthConfigValue(value: unknown): AuthConfig | null {
  if (value == null) {
    return null;
  }

  if (typeof value === "string") {
    const parsed = parseJSON(value);
    return normalizeAuthConfig(parsed);
  }

  return normalizeAuthConfig(value);
}

function parseJSON(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function normalizeAuthConfig(value: unknown): AuthConfig | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const obj = value as Record<string, unknown>;
  const apiKey = typeof obj["apiKey"] === "string" ? obj["apiKey"] : undefined;
  const login = normalizeLogin(obj["login"]);
  const sso = normalizeSSO(obj["sso"]);

  if (!apiKey && !login && !sso) {
    return null;
  }

  return {
    ...(apiKey ? { apiKey } : {}),
    ...(login ? { login } : {}),
    ...(sso ? { sso } : {}),
  };
}

function normalizeLogin(value: unknown): AuthConfig["login"] | undefined {
  if (!value || typeof value !== "object") {
    return undefined;
  }

  const obj = value as Record<string, unknown>;
  const username = typeof obj["username"] === "string" ? obj["username"] : undefined;
  const password = typeof obj["password"] === "string" ? obj["password"] : undefined;

  if (!username && !password) {
    return undefined;
  }

  return { ...(username ? { username } : {}), ...(password ? { password } : {}) };
}

function normalizeSSO(value: unknown): Record<string, unknown> | undefined {
  if (!value || typeof value !== "object") {
    return undefined;
  }

  return value as Record<string, unknown>;
}

function redactAuthConfig(config: AuthConfig | null): AuthConfig | null {
  if (!config) {
    return null;
  }

  const login = config.login
    ? {
      ...config.login,
      ...(config.login.password ? { password: "***" } : {}),
    }
    : undefined;

  return {
    ...config,
    ...(config.apiKey ? { apiKey: "***" } : {}),
    ...(login ? { login } : {}),
  };
}
