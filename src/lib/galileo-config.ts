/*
 * Galileo config singleton: env-aware (Node, Deno, browser)
 */

import { isBrowserLike, isDeno, isNodeLike } from "./runtime.js";

export type GalileoConfigInput = {
  consoleUrl?: string;
  apiUrl?: string;
  apiKey?: string;
  username?: string;
  password?: string;
  ssoIdToken?: string;
  ssoProvider?: string;
  jwtToken?: string;
  refreshToken?: string;
  logLevel?: string | number;
  projectName?: string;
  logStreamName?: string;
};

export type AuthCredentials = {
  apiKey?: string;
  username?: string;
  password?: string;
  ssoIdToken?: string;
  ssoProvider?: string;
};

/** Snapshot shape for base-entity compatibility: apiUrl, apiKey, login, sso */
export type GalileoConfigSnapshot = {
  apiUrl?: string;
  apiKey?: string;
  login?: { username?: string; password?: string };
  sso?: { idToken?: string; provider?: string };
};

const DEFAULT_BROWSER_GLOBAL = "__GALILEO_AUTH__";
const DEFAULT_LOCAL_STORAGE_KEY = "galileo_auth_config";
const ENV_API_KEY = "GALILEO_API_KEY";
const ENV_USERNAME = "GALILEO_USERNAME";
const ENV_PASSWORD = "GALILEO_PASSWORD";
const ENV_SSO_ID_TOKEN = "GALILEO_SSO_ID_TOKEN";
const ENV_SSO_PROVIDER = "GALILEO_SSO_PROVIDER";
const ENV_GALILEO_API_URL = "GALILEO_API_URL";
const ENV_GALILEO_CONSOLE_URL = "GALILEO_CONSOLE_URL";
const ENV_GALILEO_PROJECT = "GALILEO_PROJECT";
const ENV_GALILEO_PROJECT_NAME = "GALILEO_PROJECT_NAME";
const ENV_GALILEO_LOG_STREAM = "GALILEO_LOG_STREAM";
const ENV_GALILEO_LOG_STREAM_NAME = "GALILEO_LOG_STREAM_NAME";

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

function readFromBrowserGlobal(globalName: string): GalileoConfigInput | null {
  const gt =
    typeof globalThis === "undefined"
      ? null
      : (globalThis as Record<string, unknown>);
  if (gt == null) return null;
  const value = gt[globalName];
  return parseConfigValue(value);
}

function readFromLocalStorage(key: string): GalileoConfigInput | null {
  if (typeof globalThis === "undefined") return null;
  try {
    if (!("localStorage" in globalThis)) return null;
    const raw = globalThis.localStorage?.getItem(key);
    return parseConfigValue(raw);
  } catch {
    return null;
  }
}

function parseConfigValue(value: unknown): GalileoConfigInput | null {
  if (value == null) return null;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value) as unknown;
      return normalizeInput(parsed);
    } catch {
      return null;
    }
  }
  return normalizeInput(value);
}

function normalizeInput(value: unknown): GalileoConfigInput | null {
  if (!value || typeof value !== "object") return null;
  const obj = value as Record<string, unknown>;
  const apiKey = typeof obj["apiKey"] === "string" ? obj["apiKey"] : undefined;
  const login = obj["login"];
  const username =
    typeof login === "object" && login !== null && "username" in login
      ? (login as Record<string, unknown>)["username"]
      : undefined;
  const password =
    typeof login === "object" && login !== null && "password" in login
      ? (login as Record<string, unknown>)["password"]
      : undefined;
  const u =
    typeof obj["username"] === "string" ? obj["username"] : username;
  const p =
    typeof obj["password"] === "string" ? obj["password"] : password;
  const sso = obj["sso"] as Record<string, unknown> | undefined;
  const ssoIdToken =
    typeof obj["ssoIdToken"] === "string"
      ? obj["ssoIdToken"]
      : typeof sso?.["idToken"] === "string"
        ? sso["idToken"]
        : undefined;
  const ssoProvider =
    typeof obj["ssoProvider"] === "string"
      ? obj["ssoProvider"]
      : typeof sso?.["provider"] === "string"
        ? sso["provider"]
        : undefined;
  const consoleUrl =
    typeof obj["consoleUrl"] === "string" ? obj["consoleUrl"] : undefined;
  const apiUrl =
    typeof obj["apiUrl"] === "string" ? obj["apiUrl"] : undefined;
  const projectName =
    typeof obj["projectName"] === "string" ? obj["projectName"] : undefined;
  const logStreamName =
    typeof obj["logStreamName"] === "string" ? obj["logStreamName"] : undefined;
  if (!apiKey && !u && !p && !ssoIdToken && !ssoProvider) return null;
  return {
    ...(apiKey ? { apiKey } : {}),
    ...(u ? { username: String(u) } : {}),
    ...(p ? { password: String(p) } : {}),
    ...(ssoIdToken ? { ssoIdToken } : {}),
    ...(ssoProvider ? { ssoProvider } : {}),
    ...(consoleUrl ? { consoleUrl } : {}),
    ...(apiUrl ? { apiUrl } : {}),
    ...(projectName ? { projectName } : {}),
    ...(logStreamName ? { logStreamName } : {}),
  };
}

function resolveFromEnvironment(): GalileoConfigInput | null {
  if (isBrowserLike()) {
    return (
      readFromBrowserGlobal(DEFAULT_BROWSER_GLOBAL) ||
      readFromLocalStorage(DEFAULT_LOCAL_STORAGE_KEY)
    );
  }
  if (isDeno() || isNodeLike()) {
    const env = readEnvObject();
    if (!env) return null;
    const apiKey = env[ENV_API_KEY];
    const username = env[ENV_USERNAME];
    const password = env[ENV_PASSWORD];
    const apiUrl = env[ENV_GALILEO_API_URL];
    const consoleUrl = env[ENV_GALILEO_CONSOLE_URL];
    const ssoIdToken = env[ENV_SSO_ID_TOKEN];
    const ssoProvider = env[ENV_SSO_PROVIDER];
    const projectName = env[ENV_GALILEO_PROJECT] ?? env[ENV_GALILEO_PROJECT_NAME];
    const logStreamName = env[ENV_GALILEO_LOG_STREAM] ?? env[ENV_GALILEO_LOG_STREAM_NAME];

    if (!apiKey && !username && !password && !ssoIdToken && !ssoProvider)
      return null;
    return {
      ...(apiKey ? { apiKey } : {}),
      ...(username ? { username } : {}),
      ...(password ? { password } : {}),
      ...(ssoIdToken ? { ssoIdToken } : {}),
      ...(ssoProvider ? { ssoProvider } : {}),
      ...(apiUrl ? { apiUrl } : {}),
      ...(consoleUrl ? { consoleUrl } : {}),
      ...(projectName ? { projectName } : {}),
      ...(logStreamName ? { logStreamName } : {}),
    };
  }
  return null;
}

function merge(
  base: GalileoConfigInput | null,
  overrides: GalileoConfigInput
): GalileoConfigInput {
  const o = overrides as Record<string, unknown>;
  const b = (base ?? {}) as Record<string, unknown>;
  const result: GalileoConfigInput = {};
  const keys: (keyof GalileoConfigInput)[] = [
    "consoleUrl",
    "apiUrl",
    "apiKey",
    "username",
    "password",
    "ssoIdToken",
    "ssoProvider",
    "jwtToken",
    "refreshToken",
    "logLevel",
    "projectName",
    "logStreamName",
  ];
  for (const k of keys) {
    const ov = o[k];
    const bv = b[k];
    (result as Record<string, unknown>)[k] =
      ov !== undefined && ov !== null ? ov : bv;
  }
  return result;
}

/**
 * Resolves apiUrl from consoleUrl (or returns explicit apiUrl).
 * Same logic as getApiUrl(); used for initial setup and by getApiUrl().
 */
function resolveApiUrl(
  consoleUrl: string | undefined,
  apiUrl: string | undefined,
  projectType?: string
): string {
  if (apiUrl) return apiUrl;
  if (!consoleUrl) {
    if (projectType === "gen_ai") return "https://api.galileo.ai";
    throw new Error("GALILEO_CONSOLE_URL must be set");
  }
  if (
    consoleUrl.includes("localhost") ||
    consoleUrl.includes("127.0.0.1")
  ) {
    return "http://localhost:8088";
  }
  let resolved = consoleUrl
    .replace("app.galileo.ai", "api.galileo.ai")
    .replace("console", "api");
  if (resolved.endsWith("/")) resolved = resolved.slice(0, -1);
  return resolved;
}

export class GalileoConfig {
  private static instance: GalileoConfig | null = null;

  public readonly consoleUrl: string | undefined;
  public readonly apiUrl: string | undefined;
  public readonly apiKey: string | undefined;
  public readonly username: string | undefined;
  public readonly password: string | undefined;
  public readonly ssoIdToken: string | undefined;
  public readonly ssoProvider: string | undefined;
  public readonly jwtToken: string | undefined;
  public readonly refreshToken: string | undefined;
  public readonly logLevel: string | number | undefined;
  public readonly projectName: string | undefined;
  public readonly logStreamName: string | undefined;

  private constructor(input: GalileoConfigInput) {
    this.apiUrl = input.apiUrl ?? resolveApiUrl(input.consoleUrl, undefined, "gen_ai");
    this.consoleUrl = input.consoleUrl || "https://console.galileo.ai";
    this.apiKey = input.apiKey;
    this.username = input.username;
    this.password = input.password;
    this.ssoIdToken = input.ssoIdToken;
    this.ssoProvider = input.ssoProvider;
    this.jwtToken = input.jwtToken;
    this.refreshToken = input.refreshToken;
    this.logLevel = input.logLevel;
    this.projectName = input.projectName;
    this.logStreamName = input.logStreamName;
  }

  /** Snapshot for base-entity: apiUrl (resolved), apiKey, login, sso */
  get snapshot(): GalileoConfigSnapshot {
    const apiUrl = this.apiUrl ?? this.getApiUrl();
    const login =
      this.username !== undefined || this.password !== undefined
        ? {
            ...(this.username !== undefined ? { username: this.username } : {}),
            ...(this.password !== undefined ? { password: this.password } : {}),
          }
        : undefined;
    const sso =
      this.ssoIdToken !== undefined || this.ssoProvider !== undefined
        ? {
            ...(this.ssoIdToken !== undefined
              ? { idToken: this.ssoIdToken }
              : {}),
            ...(this.ssoProvider !== undefined
              ? { provider: this.ssoProvider }
              : {}),
          }
        : undefined;
    return {
      apiUrl,
      ...(this.apiKey !== undefined ? { apiKey: this.apiKey } : {}),
      ...(login ? { login } : {}),
      ...(sso ? { sso } : {}),
    };
  }

  public static get(overrides: GalileoConfigInput = {}): GalileoConfig {
    const hasOverrides = Object.keys(overrides).length > 0;
    if (!GalileoConfig.instance || hasOverrides) {
      const fromEnv = resolveFromEnvironment();
      const merged = merge(fromEnv, overrides);
      GalileoConfig.instance = new GalileoConfig(merged);
    }

    return GalileoConfig.instance;
  }

  public static reset(): void {
    GalileoConfig.instance = null;
  }

  public getApiUrl(projectType?: string): string {
    return resolveApiUrl(this.consoleUrl, this.apiUrl, projectType);
  }

  public getAuthCredentials(): AuthCredentials {
    return {
      ...(this.apiKey !== undefined ? { apiKey: this.apiKey } : {}),
      ...(this.username !== undefined ? { username: this.username } : {}),
      ...(this.password !== undefined ? { password: this.password } : {}),
      ...(this.ssoIdToken !== undefined
        ? { ssoIdToken: this.ssoIdToken }
        : {}),
      ...(this.ssoProvider !== undefined
        ? { ssoProvider: this.ssoProvider }
        : {}),
    };
  }

  public logConfig(): void {
    const safe = {
      consoleUrl: this.consoleUrl,
      apiUrl: this.apiUrl,
      username: this.username,
      ssoProvider: this.ssoProvider,
      logLevel: this.logLevel,
      hasApiKey: Boolean(this.apiKey),
      hasPassword: Boolean(this.password),
      hasSsoIdToken: Boolean(this.ssoIdToken),
      projectName: this.projectName,
      logStreamName: this.logStreamName,
    };
    console.info("[GalileoConfig]", safe);
  }
}
