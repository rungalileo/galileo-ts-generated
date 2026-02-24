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

