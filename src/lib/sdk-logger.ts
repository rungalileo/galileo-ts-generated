import { GalileoConfig } from "./galileo-config.js";

export type LogLevel = "silent" | "error" | "warn" | "info" | "debug";

export interface GalileoSdkLogger {
  debug: (message: string, ...args: unknown[]) => void;
  info: (message: string, ...args: unknown[]) => void;
  warn: (message: string, ...args: unknown[]) => void;
  error: (message: string, ...args: unknown[]) => void;
}

const LOG_LEVEL_PRIORITY: Record<LogLevel, number> = {
  silent: -1,
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

function isValidLogLevel(value: string): value is LogLevel {
  return value in LOG_LEVEL_PRIORITY;
}

class SdkLogger {
  private level: LogLevel;
  private customLogger?: GalileoSdkLogger | undefined;

  constructor() {
    // Respect GALILEO_LOG_LEVEL from config; fall back to 'silent'
    const envLevel = GalileoConfig.get().logLevel;
    this.level = envLevel && isValidLogLevel(envLevel) ? envLevel : "silent";
  }

  setLevel(level: LogLevel): void {
    this.level = level;
  }

  setLogger(logger: GalileoSdkLogger | undefined): void {
    this.customLogger = logger;
  }

  private shouldLog(level: LogLevel): boolean {
    return LOG_LEVEL_PRIORITY[this.level] >= LOG_LEVEL_PRIORITY[level];
  }

  debug(message: string, ...args: unknown[]): void {
    if (!this.shouldLog("debug")) return;
    (this.customLogger?.debug ?? console.debug)(message, ...args);
  }

  info(message: string, ...args: unknown[]): void {
    if (!this.shouldLog("info")) return;
    (this.customLogger?.info ?? console.info)(message, ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    if (!this.shouldLog("warn")) return;
    (this.customLogger?.warn ?? console.warn)(message, ...args);
  }

  error(message: string, ...args: unknown[]): void {
    if (!this.shouldLog("error")) return;
    (this.customLogger?.error ?? console.error)(message, ...args);
  }
}

const sdkLogger = new SdkLogger();

// Internal — used by all SDK modules
export function getSdkLogger(): SdkLogger {
  return sdkLogger;
}

/**
 * Enable SDK logging at the specified level (default: 'info').
 * Pass 'debug' to see all retry, task-handler, and span conversion messages.
 */
export function enableLogging(level: LogLevel = "info"): void {
  sdkLogger.setLevel(level);
}

/**
 * Disable all SDK logging (equivalent to GALILEO_LOG_LEVEL=silent).
 */
export function disableLogging(): void {
  sdkLogger.setLevel("silent");
}

/**
 * Route all SDK log output through a custom logger (e.g., Winston or Pino).
 * Call enableLogging() as well to activate output at the desired level.
 * Pass undefined to clear a previously set custom logger and revert to console output.
 */
export function setLogger(logger: GalileoSdkLogger | undefined): void {
  sdkLogger.setLogger(logger);
}
