/*
 * Galileo config singleton: environment-aware across Node.js, Deno, and browser runtimes.
 * 
 * Configuration resolution order (highest to lowest priority):
 * 1. Explicit constructor overrides (via get() method)
 * 2. Environment variables (GALILEO_* or NODE_TLS_* for Node/Deno)
 * 3. Browser global (__GALILEO_AUTH__) or localStorage (galileo_auth_config)
 * 4. Defaults (consoleUrl: "https://console.galileo.ai", apiUrl derived from consoleUrl)
 * 
 * Supports multiple authentication methods:
 * - API key: GALILEO_API_KEY
 * - Username/password: GALILEO_USERNAME + GALILEO_PASSWORD
 * - SSO: GALILEO_SSO_ID_TOKEN + GALILEO_SSO_PROVIDER
 * 
 * TLS/Certificate configuration:
 * - CA certificates: GALILEO_CA_CERT_PATH or GALILEO_CA_CERT_CONTENT
 * - Client certificates (mTLS): GALILEO_CLIENT_CERT_PATH + GALILEO_CLIENT_KEY_PATH
 * - Certificate validation: GALILEO_REJECT_UNAUTHORIZED or NODE_TLS_REJECT_UNAUTHORIZED
 * 
 * For certificate paths in Node.js, use GALILEO_CA_CERT_PATH (replaces default CA list).
 * To append CA certs to the default list, use NODE_EXTRA_CA_CERTS instead.
 */

import { isBrowserLike, isDeno, isNodeLike } from "./runtime.js";
import { LOG_LEVEL_PRIORITY } from "../types/sdk-logger.types.js";
import type { LogLevel } from "../types/sdk-logger.types.js";

/**
 * Configuration input for the Galileo SDK.
 * 
 * Includes URLs (console, API), authentication credentials (API key, username/password, SSO tokens),
 * project/log stream identifiers, logging configuration, and TLS/certificate settings.
 * 
 * All properties are optional; values resolve from environment variables or browser storage by default.
 */
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
  logLevel?: LogLevel | undefined;
  projectName?: string;
  logStreamName?: string;
  /** Path to CA certificate file. */
  caCertPath?: string;
  /** Direct CA certificate content. */
  caCertContent?: string;
  /** Client certificate path. */
  clientCertPath?: string;
  /** Client key path. */
  clientKeyPath?: string;
  /** Whether to reject unauthorized (e.g. self-signed) certificates. */
  rejectUnauthorized?: boolean;
};

/**
 * Resolved authentication credentials extracted from config.
 * 
 * Contains one or more of: API key, username/password pair, or SSO credentials.
 * Returned by getAuthCredentials() method.
 */
export type AuthCredentials = {
  apiKey?: string;
  username?: string;
  password?: string;
  ssoIdToken?: string;
  ssoProvider?: string;
};

/**
 * TLS/certificate configuration for API requests.
 * 
 * Supports custom CA certificates (via file path or direct content) and mutual TLS (mTLS)
 * with client certificates and keys. Controls whether unauthorized (self-signed) certificates
 * are accepted via rejectUnauthorized flag.
 * 
 * Returned by getCertConfig() method or included in config snapshot.
 */
export type CertConfig = {
  caCertPath?: string;
  caCertContent?: string;
  clientCertPath?: string;
  clientKeyPath?: string;
  rejectUnauthorized?: boolean;
};

/**
 * Config snapshot for BaseEntity compatibility.
 * 
 * Flattened representation of resolved configuration including API URL, API key, login credentials
 * (username/password), SSO information (idToken/provider), and TLS certificate configuration.
 * 
 * Used for entity authentication and API interactions.
 */
export type GalileoConfigSnapshot = {
  apiUrl?: string;
  apiKey?: string;
  login?: { username?: string; password?: string };
  sso?: { idToken?: string; provider?: string };
  cert?: CertConfig;
};

const DEFAULT_CONSOLE_URL = "https://console.galileo.ai";
const DEFAULT_API_URL = "https://api.galileo.ai";

/** Browser global key for auth config (e.g. window.__GALILEO_AUTH__). */
const DEFAULT_BROWSER_GLOBAL = "__GALILEO_AUTH__";
/** localStorage key for persisted auth config. */
const DEFAULT_LOCAL_STORAGE_KEY = "galileo_auth_config";

/** Environment variable names used when resolving config from process/Deno env. */
/** API key for Galileo API authentication. */
const ENV_API_KEY = "GALILEO_API_KEY";
/** Username for email/password login. */
const ENV_USERNAME = "GALILEO_USERNAME";
/** Password for email/password login. */
const ENV_PASSWORD = "GALILEO_PASSWORD";
/** SSO ID token for social/login. */
const ENV_SSO_ID_TOKEN = "GALILEO_SSO_ID_TOKEN";
/** SSO provider identifier. */
const ENV_SSO_PROVIDER = "GALILEO_SSO_PROVIDER";
/** Galileo API base URL. */
const ENV_GALILEO_API_URL = "GALILEO_API_URL";
/** Galileo console base URL (used to derive API URL when GALILEO_API_URL is unset). */
const ENV_GALILEO_CONSOLE_URL = "GALILEO_CONSOLE_URL";
/** Project name; same meaning as GALILEO_PROJECT_NAME (this one takes precedence). */
const ENV_GALILEO_PROJECT = "GALILEO_PROJECT";
/** Project name; same meaning as GALILEO_PROJECT (fallback if GALILEO_PROJECT is unset). */
const ENV_GALILEO_PROJECT_NAME = "GALILEO_PROJECT_NAME";
/** Log stream identifier; same meaning as GALILEO_LOG_STREAM_NAME (this one takes precedence). */
const ENV_GALILEO_LOG_STREAM = "GALILEO_LOG_STREAM";
/** Log stream identifier; same meaning as GALILEO_LOG_STREAM (fallback if GALILEO_LOG_STREAM is unset). */
const ENV_GALILEO_LOG_STREAM_NAME = "GALILEO_LOG_STREAM_NAME";
/** Path to CA certificate file (Galileo-specific). */
const ENV_GALILEO_CA_CERT_PATH = "GALILEO_CA_CERT_PATH";
/** Direct certificate content. */
const ENV_GALILEO_CA_CERT_CONTENT = "GALILEO_CA_CERT_CONTENT";
/** Client certificate path. */
const ENV_GALILEO_CLIENT_CERT_PATH = "GALILEO_CLIENT_CERT_PATH";
/** Client key path. */
const ENV_GALILEO_CLIENT_KEY_PATH = "GALILEO_CLIENT_KEY_PATH";
/** Boolean to allow/reject self-signed certs (Galileo-specific). */
const ENV_GALILEO_REJECT_UNAUTHORIZED = "GALILEO_REJECT_UNAUTHORIZED";
/** Boolean to allow/reject self-signed certs (Node.js standard). */
const ENV_NODE_TLS_REJECT_UNAUTHORIZED = "NODE_TLS_REJECT_UNAUTHORIZED";
/** Log level for SDK logging (DEBUG, INFO, WARN, ERROR, etc.). */
const ENV_GALILEO_LOG_LEVEL = "GALILEO_LOG_LEVEL";

export function isValidLogLevel(value: unknown): value is LogLevel {
  return typeof value === "string" && value in LOG_LEVEL_PRIORITY;
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
  const caCertPath =
    typeof obj["caCertPath"] === "string" ? obj["caCertPath"] : undefined;
  const caCertContent =
    typeof obj["caCertContent"] === "string" ? obj["caCertContent"] : undefined;
  const clientCertPath =
    typeof obj["clientCertPath"] === "string" ? obj["clientCertPath"] : undefined;
  const clientKeyPath =
    typeof obj["clientKeyPath"] === "string" ? obj["clientKeyPath"] : undefined;
  const rejectUnauthorized =
    typeof obj["rejectUnauthorized"] === "boolean"
      ? obj["rejectUnauthorized"]
      : undefined;
  const rawLogLevel = typeof obj["logLevel"] === "string" ? obj["logLevel"].toLowerCase() : undefined;
  const logLevel = isValidLogLevel(rawLogLevel) ? rawLogLevel : undefined;
  if (!apiKey && !u && !p && !ssoIdToken && !ssoProvider && !caCertPath && !caCertContent && !clientCertPath && !clientKeyPath && rejectUnauthorized === undefined) return null;
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
    ...(caCertPath ? { caCertPath } : {}),
    ...(caCertContent ? { caCertContent } : {}),
    ...(clientCertPath ? { clientCertPath } : {}),
    ...(clientKeyPath ? { clientKeyPath } : {}),
    ...(rejectUnauthorized !== undefined ? { rejectUnauthorized } : {}),
    ...(logLevel !== undefined && logLevel.length > 0 ? { logLevel } : {}),
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
    const rawLogLevel = env[ENV_GALILEO_LOG_LEVEL]?.toLowerCase();
    const logLevel = isValidLogLevel(rawLogLevel)
      ? rawLogLevel
      : undefined;

    // GALILEO_CA_CERT_PATH is used to clean existing CA certs list and use this instead.
    // Use NODE_EXTRA_CA_CERTS if you want to append CA certs to existing (default) list instead.
    const caCertPath =
      env[ENV_GALILEO_CA_CERT_PATH];

    const caCertContent = env[ENV_GALILEO_CA_CERT_CONTENT];
    const clientCertPath = env[ENV_GALILEO_CLIENT_CERT_PATH];
    const clientKeyPath = env[ENV_GALILEO_CLIENT_KEY_PATH];

    // Reject unauthorized: GALILEO_REJECT_UNAUTHORIZED > NODE_TLS_REJECT_UNAUTHORIZED
    // Empty strings are treated as undefined (not set) to avoid inadvertently disabling TLS.
    const rejectUnauthorizedRaw =
      env[ENV_GALILEO_REJECT_UNAUTHORIZED] ??
      env[ENV_NODE_TLS_REJECT_UNAUTHORIZED];
    const rejectUnauthorized =
      rejectUnauthorizedRaw === undefined || rejectUnauthorizedRaw === ""
        ? undefined
        : rejectUnauthorizedRaw === "true" || rejectUnauthorizedRaw === "1"
          ? true
          : rejectUnauthorizedRaw === "false" || rejectUnauthorizedRaw === "0"
            ? false
            : undefined;

    if (!apiKey && !username && !password && !ssoIdToken && !ssoProvider && !apiUrl && !consoleUrl && !projectName && !logStreamName && !logLevel && !caCertPath && !caCertContent && !clientCertPath && !clientKeyPath && rejectUnauthorized === undefined)
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
      ...(caCertPath ? { caCertPath } : {}),
      ...(caCertContent ? { caCertContent } : {}),
      ...(clientCertPath ? { clientCertPath } : {}),
      ...(clientKeyPath ? { clientKeyPath } : {}),
      ...(rejectUnauthorized !== undefined ? { rejectUnauthorized } : {}),
      ...(logLevel !== undefined && logLevel.length > 0 ? { logLevel } : {}),
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
    "caCertPath",
    "caCertContent",
    "clientCertPath",
    "clientKeyPath",
    "rejectUnauthorized",
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
    if (projectType === "gen_ai") return DEFAULT_API_URL;
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

/**
 * Singleton configuration for the Galileo SDK (env-aware across Node, Deno, and browser).
 */
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
  public readonly logLevel: LogLevel | undefined;
  public readonly projectName: string | undefined;
  public readonly logStreamName: string | undefined;
  public readonly caCertPath: string | undefined;
  public readonly caCertContent: string | undefined;
  public readonly clientCertPath: string | undefined;
  public readonly clientKeyPath: string | undefined;
  public readonly rejectUnauthorized: boolean | undefined;

  private constructor(input: GalileoConfigInput) {
    this.apiUrl = input.apiUrl ?? resolveApiUrl(input.consoleUrl, undefined, "gen_ai");
    this.consoleUrl = input.consoleUrl || DEFAULT_CONSOLE_URL;
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
    this.caCertPath = input.caCertPath;
    this.caCertContent = input.caCertContent;
    this.clientCertPath = input.clientCertPath;
    this.clientKeyPath = input.clientKeyPath;
    this.rejectUnauthorized = input.rejectUnauthorized;
  }

  private static readonly URL_KEYS: ReadonlySet<string> = new Set(["consoleUrl", "apiUrl"]);

  /**
   * Returns true if only consoleUrl and/or apiUrl are configured, with no other
   * meaningful configuration present. Used to detect instances created before
   * environment variables were fully loaded (e.g. late dotenv initialization).
   */
  private isMissingExternalConfig(): boolean {
    const self = this as unknown as Record<string, unknown>;
    for (const key of Object.keys(self)) {
      if (GalileoConfig.URL_KEYS.has(key) || self[key] == null) continue;
      return false;
    }
    return true;
  }

  /**
   * Returns a snapshot compatible with BaseEntity, including resolved apiUrl, apiKey, login, sso, and cert.
   * 
   * - apiUrl is resolved from consoleUrl if not explicitly set
   * - login contains username and/or password if present
   * - sso contains idToken and/or provider if present
   * - cert contains all configured TLS/certificate settings if any are present
   * 
   * @returns The config snapshot for entity authentication and API configuration.
   */
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
    const cert = this.getCertConfig();
    return {
      apiUrl,
      ...(this.apiKey !== undefined ? { apiKey: this.apiKey } : {}),
      ...(login ? { login } : {}),
      ...(sso ? { sso } : {}),
      ...(cert !== null ? { cert } : {}),
    };
  }

  /**
   * Returns the singleton config instance, resolving from environment and optional overrides.
   * 
   * On first call (or when overrides are provided), resolves configuration from:
   * 1. Environment variables or browser storage (via resolveFromEnvironment)
   * 2. Constructor overrides (via merge)
   * 
   * The instance is cached and reused on subsequent calls unless overrides are provided
   * or the cached instance has only URL defaults (no auth, certs, project, etc.),
   * which indicates environment variables may not have been loaded yet (e.g. late dotenv init).
   * To reset the singleton, call reset().
   * 
   * @param overrides - (Optional) Config values to merge over environment and defaults.
   * @returns The GalileoConfig singleton instance.
   */
  public static get(overrides: GalileoConfigInput = {}): GalileoConfig {
    const hasOverrides = Object.keys(overrides).length > 0;
    if (!GalileoConfig.instance || hasOverrides || GalileoConfig.instance.isMissingExternalConfig()) {
      const fromEnv = resolveFromEnvironment();
      const merged = merge(fromEnv, overrides);
      GalileoConfig.instance = new GalileoConfig(merged);
    }

    return GalileoConfig.instance;
  }

  /**
   * Clears the singleton instance.
   * 
   * Next call to get() will rebuild the instance from environment variables or browser storage.
   * Useful for testing or when configuration has changed and needs to be reloaded.
   */
  public static reset(): void {
    GalileoConfig.instance = null;
  }

  /**
   * Returns the API base URL, resolved from consoleUrl or explicit apiUrl.
   * 
   * Resolution logic:
   * 1. If apiUrl is set, return it as-is
   * 2. If consoleUrl is set, derive apiUrl by replacing "app.galileo.ai" or "console" with "api"
   * 3. For localhost consoleUrl, return "http://localhost:8088"
   * 4. If neither consoleUrl nor apiUrl is set, use projectType default (e.g., "gen_ai" → DEFAULT_API_URL)
   * 5. If no projectType and neither URL is set, throw an error
   * 
   * @param projectType - (Optional) Default project type for API URL when neither apiUrl nor consoleUrl is set.
   * @returns The resolved API URL.
   * @throws Error if apiUrl, consoleUrl, and projectType are all unset.
   */
  public getApiUrl(projectType?: string): string {
    return resolveApiUrl(this.consoleUrl, this.apiUrl, projectType);
  }

  /**
   * Returns the current authentication credentials.
   * 
   * Extracts and returns all present credentials: API key, username/password pair, and/or SSO tokens.
   * Only populated fields are included in the returned object.
   * 
   * @returns The AuthCredentials object with present credential values.
   */
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

  /**
   * Returns TLS/certificate configuration for API requests.
   * 
   * Extracts and returns all present certificate settings: CA certificate (path or content),
   * client certificate and key (for mTLS), and rejectUnauthorized flag.
   * Only populated fields are included in the returned object.
   * 
   * @returns The CertConfig object with present values, or null if no certificate configuration is set.
   */
  public getCertConfig(): CertConfig | null {
    const result: CertConfig = {
      ...(this.caCertPath !== undefined ? { caCertPath: this.caCertPath } : {}),
      ...(this.caCertContent !== undefined
        ? { caCertContent: this.caCertContent }
        : {}),
      ...(this.clientCertPath !== undefined
        ? { clientCertPath: this.clientCertPath }
        : {}),
      ...(this.clientKeyPath !== undefined
        ? { clientKeyPath: this.clientKeyPath }
        : {}),
      ...(this.rejectUnauthorized !== undefined
        ? { rejectUnauthorized: this.rejectUnauthorized }
        : {}),
    };
    return Object.keys(result).length > 0 ? result : null;
  }

  /**
   * Logs a safe summary of the current configuration to the console.
   * 
   * Omits sensitive values (passwords, API keys, SSO tokens) and instead logs boolean flags
   * (hasApiKey, hasPassword, hasSsoIdToken) to indicate their presence without revealing content.
   * Useful for debugging configuration issues in production environments.
   */
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
      hasCaCert: Boolean(this.caCertPath || this.caCertContent),
      hasClientCert: Boolean(this.clientCertPath && this.clientKeyPath),
      rejectUnauthorized: this.rejectUnauthorized,
    };
    console.info("[GalileoConfig]", safe);
  }
}
