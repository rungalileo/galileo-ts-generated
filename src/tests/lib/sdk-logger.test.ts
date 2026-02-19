import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";
import {
  getSdkLogger,
  enableLogging,
  disableLogging,
  setLogger,
  type GalileoSdkLogger,
} from "../../lib/sdk-logger.js";
import { GalileoConfig } from "../../lib/galileo-config.js";

const GALILEO_LOG_LEVEL = "GALILEO_LOG_LEVEL";

function clearGalileoEnv(): void {
  delete process.env[GALILEO_LOG_LEVEL];
}

describe("SdkLogger", () => {
  beforeEach(() => {
    // Reset the config before each test
    GalileoConfig.reset();
    clearGalileoEnv();
    // Clear any custom logger
    setLogger(undefined);
  });

  afterEach(() => {
    clearGalileoEnv();
    GalileoConfig.reset();
    setLogger(undefined);
  });

  describe("initialization", () => {
    test("default log level is silent", () => {
      const logger = getSdkLogger();
      // Debug should be silenced by default
      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      logger.debug("test message");
      expect(debugSpy).not.toHaveBeenCalled();
      debugSpy.mockRestore();
    });

    test("respects GALILEO_LOG_LEVEL environment variable", () => {
      process.env[GALILEO_LOG_LEVEL] = "debug";
      GalileoConfig.reset();
      const logger = getSdkLogger();
      enableLogging("debug");

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      logger.debug("test message");
      expect(debugSpy).toHaveBeenCalledWith("test message");
      debugSpy.mockRestore();
    });

    test("normalizes log level to lowercase", () => {
      process.env[GALILEO_LOG_LEVEL] = "DEBUG";
      GalileoConfig.reset();
      const logger = getSdkLogger();
      enableLogging("debug");

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      logger.debug("test message");
      expect(debugSpy).toHaveBeenCalledWith("test message");
      debugSpy.mockRestore();
    });

    test("ignores invalid log levels", () => {
      process.env[GALILEO_LOG_LEVEL] = "invalid";
      GalileoConfig.reset();
      const logger = getSdkLogger();
      disableLogging();

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      logger.debug("test message");
      expect(debugSpy).not.toHaveBeenCalled();
      debugSpy.mockRestore();
    });
  });

  describe("logging levels", () => {
    test("silent level blocks all logs", () => {
      const logger = getSdkLogger();
      enableLogging("silent");

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      logger.debug("debug");
      logger.info("info");
      logger.warn("warn");
      logger.error("error");

      expect(debugSpy).not.toHaveBeenCalled();
      expect(infoSpy).not.toHaveBeenCalled();
      expect(warnSpy).not.toHaveBeenCalled();
      expect(errorSpy).not.toHaveBeenCalled();

      debugSpy.mockRestore();
      infoSpy.mockRestore();
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    });

    test("error level only logs errors", () => {
      const logger = getSdkLogger();
      enableLogging("error");

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      logger.debug("debug");
      logger.info("info");
      logger.warn("warn");
      logger.error("error");

      expect(debugSpy).not.toHaveBeenCalled();
      expect(infoSpy).not.toHaveBeenCalled();
      expect(warnSpy).not.toHaveBeenCalled();
      expect(errorSpy).toHaveBeenCalledWith("error");

      debugSpy.mockRestore();
      infoSpy.mockRestore();
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    });

    test("warn level logs warn and error", () => {
      const logger = getSdkLogger();
      enableLogging("warn");

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      logger.debug("debug");
      logger.info("info");
      logger.warn("warn");
      logger.error("error");

      expect(debugSpy).not.toHaveBeenCalled();
      expect(infoSpy).not.toHaveBeenCalled();
      expect(warnSpy).toHaveBeenCalledWith("warn");
      expect(errorSpy).toHaveBeenCalledWith("error");

      debugSpy.mockRestore();
      infoSpy.mockRestore();
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    });

    test("info level logs info, warn, and error", () => {
      const logger = getSdkLogger();
      enableLogging("info");

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      logger.debug("debug");
      logger.info("info");
      logger.warn("warn");
      logger.error("error");

      expect(debugSpy).not.toHaveBeenCalled();
      expect(infoSpy).toHaveBeenCalledWith("info");
      expect(warnSpy).toHaveBeenCalledWith("warn");
      expect(errorSpy).toHaveBeenCalledWith("error");

      debugSpy.mockRestore();
      infoSpy.mockRestore();
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    });

    test("debug level logs all messages", () => {
      const logger = getSdkLogger();
      enableLogging("debug");

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      logger.debug("debug");
      logger.info("info");
      logger.warn("warn");
      logger.error("error");

      expect(debugSpy).toHaveBeenCalledWith("debug");
      expect(infoSpy).toHaveBeenCalledWith("info");
      expect(warnSpy).toHaveBeenCalledWith("warn");
      expect(errorSpy).toHaveBeenCalledWith("error");

      debugSpy.mockRestore();
      infoSpy.mockRestore();
      warnSpy.mockRestore();
      errorSpy.mockRestore();
    });
  });

  describe("enableLogging and disableLogging", () => {
    test("enableLogging sets the log level", () => {
      const logger = getSdkLogger();
      enableLogging("debug");

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      logger.debug("test");
      expect(debugSpy).toHaveBeenCalledWith("test");
      debugSpy.mockRestore();
    });

    test("enableLogging defaults to info level", () => {
      const logger = getSdkLogger();
      enableLogging();

      const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

      logger.info("info");
      logger.debug("debug");

      expect(infoSpy).toHaveBeenCalledWith("info");
      expect(debugSpy).not.toHaveBeenCalled();

      infoSpy.mockRestore();
      debugSpy.mockRestore();
    });

    test("disableLogging silences all output", () => {
      const logger = getSdkLogger();
      enableLogging("debug");
      disableLogging();

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});

      logger.debug("debug");
      logger.info("info");

      expect(debugSpy).not.toHaveBeenCalled();
      expect(infoSpy).not.toHaveBeenCalled();

      debugSpy.mockRestore();
      infoSpy.mockRestore();
    });
  });

  describe("custom logger", () => {
    test("routes logs to custom logger when set", () => {
      const logger = getSdkLogger();
      enableLogging("info");

      const customLogger: GalileoSdkLogger = {
        debug: vi.fn(),
        info: vi.fn(),
        warn: vi.fn(),
        error: vi.fn(),
      };

      setLogger(customLogger);
      logger.info("test message");

      expect(customLogger.info).toHaveBeenCalledWith("test message");
    });

    test("uses custom logger for all log levels", () => {
      const logger = getSdkLogger();
      enableLogging("debug");

      const customLogger: GalileoSdkLogger = {
        debug: vi.fn(),
        info: vi.fn(),
        warn: vi.fn(),
        error: vi.fn(),
      };

      setLogger(customLogger);

      logger.debug("debug");
      logger.info("info");
      logger.warn("warn");
      logger.error("error");

      expect(customLogger.debug).toHaveBeenCalledWith("debug");
      expect(customLogger.info).toHaveBeenCalledWith("info");
      expect(customLogger.warn).toHaveBeenCalledWith("warn");
      expect(customLogger.error).toHaveBeenCalledWith("error");
    });

    test("respects log level filtering with custom logger", () => {
      const logger = getSdkLogger();
      enableLogging("warn");

      const customLogger: GalileoSdkLogger = {
        debug: vi.fn(),
        info: vi.fn(),
        warn: vi.fn(),
        error: vi.fn(),
      };

      setLogger(customLogger);

      logger.debug("debug");
      logger.info("info");
      logger.warn("warn");
      logger.error("error");

      expect(customLogger.debug).not.toHaveBeenCalled();
      expect(customLogger.info).not.toHaveBeenCalled();
      expect(customLogger.warn).toHaveBeenCalledWith("warn");
      expect(customLogger.error).toHaveBeenCalledWith("error");
    });

    test("clears custom logger when set to undefined", () => {
      const logger = getSdkLogger();
      enableLogging("info");

      const customLogger: GalileoSdkLogger = {
        debug: vi.fn(),
        info: vi.fn(),
        warn: vi.fn(),
        error: vi.fn(),
      };

      setLogger(customLogger);
      logger.info("first");
      expect(customLogger.info).toHaveBeenCalledWith("first");

      setLogger(undefined);

      const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
      logger.info("second");

      expect(infoSpy).toHaveBeenCalledWith("second");
      expect(customLogger.info).toHaveBeenCalledTimes(1);

      infoSpy.mockRestore();
    });

    test("falls back to console when custom logger not set", () => {
      const logger = getSdkLogger();
      enableLogging("info");

      const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
      logger.info("console output");

      expect(infoSpy).toHaveBeenCalledWith("console output");
      infoSpy.mockRestore();
    });
  });

  describe("logger with multiple arguments", () => {
    test("passes all arguments to console log", () => {
      const logger = getSdkLogger();
      enableLogging("info");

      const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
      logger.info("message", { key: "value" }, 123);

      expect(infoSpy).toHaveBeenCalledWith("message", { key: "value" }, 123);
      infoSpy.mockRestore();
    });

    test("passes all arguments to custom logger", () => {
      const logger = getSdkLogger();
      enableLogging("info");

      const customLogger: GalileoSdkLogger = {
        debug: vi.fn(),
        info: vi.fn(),
        warn: vi.fn(),
        error: vi.fn(),
      };

      setLogger(customLogger);
      logger.info("message", { key: "value" }, 123);

      expect(customLogger.info).toHaveBeenCalledWith(
        "message",
        { key: "value" },
        123,
      );
    });
  });

  describe("environment variable integration", () => {
    test("reads log level from GALILEO_LOG_LEVEL env var on startup", () => {
      process.env[GALILEO_LOG_LEVEL] = "info";
      GalileoConfig.reset();
      const logger = getSdkLogger();
      enableLogging("info");

      const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

      logger.info("info");
      logger.debug("debug");

      expect(infoSpy).toHaveBeenCalledWith("info");
      expect(debugSpy).not.toHaveBeenCalled();

      infoSpy.mockRestore();
      debugSpy.mockRestore();
    });

    test("handles mixed case env var value", () => {
      process.env[GALILEO_LOG_LEVEL] = "DeBuG";
      GalileoConfig.reset();
      const logger = getSdkLogger();
      enableLogging("debug");

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      logger.debug("test");

      expect(debugSpy).toHaveBeenCalledWith("test");
      debugSpy.mockRestore();
    });

    test("ignores invalid env var and defaults to silent", () => {
      process.env[GALILEO_LOG_LEVEL] = "notarealevel";
      GalileoConfig.reset();
      const logger = getSdkLogger();
      disableLogging();

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      logger.debug("test");

      expect(debugSpy).not.toHaveBeenCalled();
      debugSpy.mockRestore();
    });

    test("respects GalileoConfig override", () => {
      GalileoConfig.reset();
      GalileoConfig.get({ logLevel: "debug" });
      const logger = getSdkLogger();
      enableLogging("debug");

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
      logger.debug("test");

      expect(debugSpy).toHaveBeenCalledWith("test");
      debugSpy.mockRestore();
    });
  });

  describe("singleton behavior", () => {
    test("getSdkLogger returns the same instance", () => {
      const logger1 = getSdkLogger();
      const logger2 = getSdkLogger();
      expect(logger1).toBe(logger2);
    });

    test("state persists across getSdkLogger calls", () => {
      getSdkLogger();
      enableLogging("debug");

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

      const logger2 = getSdkLogger();
      logger2.debug("test");

      expect(debugSpy).toHaveBeenCalledWith("test");
      debugSpy.mockRestore();
    });
  });

  describe("edge cases", () => {
    test("empty string log message works", () => {
      const logger = getSdkLogger();
      enableLogging("info");

      const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
      logger.info("");

      expect(infoSpy).toHaveBeenCalledWith("");
      infoSpy.mockRestore();
    });

    test("null and undefined in args are passed through", () => {
      const logger = getSdkLogger();
      enableLogging("info");

      const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
      logger.info("message", null, undefined);

      expect(infoSpy).toHaveBeenCalledWith("message", null, undefined);
      infoSpy.mockRestore();
    });

    test("changing level multiple times works correctly", () => {
      const logger = getSdkLogger();

      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

      enableLogging("silent");
      logger.debug("1");
      expect(debugSpy).not.toHaveBeenCalled();

      enableLogging("debug");
      logger.debug("2");
      expect(debugSpy).toHaveBeenCalledWith("2");

      enableLogging("silent");
      logger.debug("3");
      expect(debugSpy).toHaveBeenCalledTimes(1);

      debugSpy.mockRestore();
    });
  });
});
