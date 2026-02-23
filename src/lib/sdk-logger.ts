import { GalileoConfig } from "./galileo-config.js";

/**
 * Log level for SDK logging output.
 *
 * - `silent`: Disables all logging
 * - `error`: Only error messages
 * - `warn`: Warnings and errors
 * - `info`: Info, warnings, and errors (default when logging is enabled)
 * - `debug`: All messages including debug information
 */
export type LogLevel = "silent" | "error" | "warn" | "info" | "debug";

/**
 * Logger interface for SDK logging output.
 *
 * Used as:
 * - The public contract for getSdkLogger() (what callers use for logging)
 * - The interface that custom loggers must implement for setCustomLogger()
 *
 * Implement this interface to integrate SDK logging with custom loggers
 * (e.g., Winston, Pino, or other structured logging libraries).
 * Pass an implementation to setCustomLogger() to use it instead of console.
 */
export interface GalileoSdkLogger {
  debug: (message: string, ...args: unknown[]) => void;
  info: (message: string, ...args: unknown[]) => void;
  warn: (message: string, ...args: unknown[]) => void;
  error: (message: string, ...args: unknown[]) => void;
}

/**
 * Log level priority mapping for filtering log output.
 *
 * Higher numbers indicate more verbose output. Used internally
 * to determine which messages should be logged based on the current level.
 */
export const LOG_LEVEL_PRIORITY: Record<LogLevel, number> = {
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

  setCustomLogger(logger: GalileoSdkLogger | undefined): void {
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

let sdkLogger: SdkLogger | undefined;

/**
 * Get the singleton SdkLogger instance, creating it if necessary.
 * @returns The singleton SdkLogger instance.
 */
export function getSdkLogger(): GalileoSdkLogger {
  if (!sdkLogger) {
    sdkLogger = new SdkLogger();
  }
  return sdkLogger;
}

/**
 * Enable SDK logging at the specified level.
 * @param level - (Optional) The desired log level. Defaults to 'info'. Pass 'debug' to see detailed messages including retry attempts, task-handler operations, and span conversion information.
 */
export function enableLogging(level: LogLevel = "info"): void {
  (getSdkLogger() as SdkLogger).setLevel(level);
}

/**
 * Disable all SDK logging.
 */
export function disableLogging(): void {
  sdkLogger?.setLevel("silent");
}

/**
 * Route all SDK log output through a custom logger.
 * @param logger - (Optional) Custom logger implementing GalileoSdkLogger, or undefined to revert to console output.
 */
export function setCustomLogger(logger: GalileoSdkLogger | undefined): void {
  sdkLogger?.setCustomLogger(logger);
}

/**
 * Reset the SdkLogger singleton and create a fresh instance that reads the current GalileoConfig state.
 * @returns The newly created SdkLogger instance.
 */
export function resetSdkLogger(): GalileoSdkLogger {
  sdkLogger = new SdkLogger();
  return sdkLogger;
}
