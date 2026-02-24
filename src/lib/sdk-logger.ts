import { GalileoConfig, isValidLogLevel } from "./galileo-config.js";
import type { LogLevel, GalileoSdkLogger } from "../types/sdk-logger.types.js";
import { LOG_LEVEL_PRIORITY } from "../types/sdk-logger.types.js";

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
  (getSdkLogger() as SdkLogger).setLevel("silent");
}

/**
 * Route all SDK log output through a custom logger.
 * @param logger - (Optional) Custom logger implementing GalileoSdkLogger, or undefined to revert to console output.
 */
export function setCustomLogger(logger: GalileoSdkLogger | undefined): void {
  (getSdkLogger() as SdkLogger).setCustomLogger(logger);
}

/**
 * Reset the SdkLogger singleton and create a fresh instance that reads the current GalileoConfig state.
 * @returns The newly created SdkLogger instance.
 */
export function resetSdkLogger(): GalileoSdkLogger {
  sdkLogger = new SdkLogger();
  return sdkLogger;
}
