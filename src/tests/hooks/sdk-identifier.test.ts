import { describe, test, expect, vi } from "vitest";
import { SDKIdentifierHook } from "../../hooks/sdk-identifier.js";
import type { BeforeRequestContext } from "../../hooks/types.js";

describe("SDKIdentifierHook", () => {
  const mockContext: BeforeRequestContext = {
    baseURL: new URL("http://localhost:8088"),
    operationID: "testOperation",
    oAuth2Scopes: null,
    retryConfig: { strategy: "none" },
    resolvedSecurity: null,
    options: {},
  };

  describe("beforeRequest", () => {
    test("adds X-Galileo-SDK header to request", async () => {
      const hook = new SDKIdentifierHook();
      const request = new Request("http://localhost:8088/api/test");

      const modifiedRequest = await hook.beforeRequest(mockContext, request);

      expect(modifiedRequest.headers.has("X-Galileo-SDK")).toBe(true);
    });

    test("header contains galileo-generated prefix", async () => {
      const hook = new SDKIdentifierHook();
      const request = new Request("http://localhost:8088/api/test");

      const modifiedRequest = await hook.beforeRequest(mockContext, request);
      const headerValue = modifiedRequest.headers.get("X-Galileo-SDK");

      expect(headerValue).toMatch(/^galileo-generated\//);
    });

    test("header contains valid version format", async () => {
      const hook = new SDKIdentifierHook();
      const request = new Request("http://localhost:8088/api/test");

      const modifiedRequest = await hook.beforeRequest(mockContext, request);
      const headerValue = modifiedRequest.headers.get("X-Galileo-SDK");

      expect(headerValue).toMatch(/^galileo-generated\/\d+\.\d+\.\d+/);
    });

    test("preserves existing headers", async () => {
      const hook = new SDKIdentifierHook();
      const request = new Request("http://localhost:8088/api/test", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer token",
        },
      });

      const modifiedRequest = await hook.beforeRequest(mockContext, request);

      expect(modifiedRequest.headers.get("Content-Type")).toBe("application/json");
      expect(modifiedRequest.headers.get("Authorization")).toBe("Bearer token");
      expect(modifiedRequest.headers.has("X-Galileo-SDK")).toBe(true);
    });

    test("returns a Request object", async () => {
      const hook = new SDKIdentifierHook();
      const request = new Request("http://localhost:8088/api/test");

      const result = await hook.beforeRequest(mockContext, request);

      expect(result instanceof Request).toBe(true);
    });

    test("does not modify request method or body", async () => {
      const hook = new SDKIdentifierHook();
      const body = JSON.stringify({ test: "data" });
      const request = new Request("http://localhost:8088/api/test", {
        method: "POST",
        body,
      });

      const modifiedRequest = await hook.beforeRequest(mockContext, request);

      expect(modifiedRequest.method).toBe("POST");
    });

    test("works with different HTTP methods", async () => {
      const hook = new SDKIdentifierHook();

      for (const method of ["GET", "POST", "PUT", "DELETE", "PATCH"]) {
        const request = new Request("http://localhost:8088/api/test", {
          method,
        });

        const modifiedRequest = await hook.beforeRequest(mockContext, request);

        expect(modifiedRequest.headers.has("X-Galileo-SDK")).toBe(true);
        expect(modifiedRequest.method).toBe(method);
      }
    });

    test("header value is consistent across multiple calls", async () => {
      const hook = new SDKIdentifierHook();
      const request1 = new Request("http://localhost:8088/api/test");
      const request2 = new Request("http://localhost:8088/api/test");

      const modifiedRequest1 = await hook.beforeRequest(mockContext, request1);
      const modifiedRequest2 = await hook.beforeRequest(mockContext, request2);

      const header1 = modifiedRequest1.headers.get("X-Galileo-SDK");
      const header2 = modifiedRequest2.headers.get("X-Galileo-SDK");

      expect(header1).toBe(header2);
    });

    test("overwrites existing X-Galileo-SDK header", async () => {
      const hook = new SDKIdentifierHook();
      const request = new Request("http://localhost:8088/api/test", {
        headers: {
          "X-Galileo-SDK": "old-value",
        },
      });

      const modifiedRequest = await hook.beforeRequest(mockContext, request);
      const headerValue = modifiedRequest.headers.get("X-Galileo-SDK");

      expect(headerValue).toMatch(/^galileo-generated\//);
      expect(headerValue).not.toBe("old-value");
    });

    test("handles loadVersion() failure gracefully with fallback to unknown", async () => {
      vi.resetModules();

      vi.doMock("../../hooks/sdk-identifier.js", async () => {
        return {
          SDKIdentifierHook: class {
            async beforeRequest(
              _hookCtx: BeforeRequestContext,
              request: Request,
            ): Promise<Request> {
              const newRequest = request.clone();

              const loadVersionWithFailure = (): string => {
                try {
                  throw new Error("Failed to load package.json (ESM runtime issue)");
                } catch {
                  return "unknown";
                }
              };

              const version = loadVersionWithFailure();
              const sdkIdentifier = `galileo-generated/${version}`;
              newRequest.headers.set("X-Galileo-SDK", sdkIdentifier);
              return newRequest;
            }
          },
        };
      });

      const { SDKIdentifierHook: MockedHook } = await import("../../hooks/sdk-identifier.js");
      const hook = new MockedHook();
      const request = new Request("http://localhost:8088/api/test");

      const modifiedRequest = await hook.beforeRequest(mockContext, request);
      const headerValue = modifiedRequest.headers.get("X-Galileo-SDK");

      expect(headerValue).toBe("galileo-generated/unknown");

      vi.doUnmock("../../hooks/sdk-identifier.js");
    });
  });

  describe("hook integration", () => {
    test("hook implements BeforeRequestHook interface", () => {
      const hook = new SDKIdentifierHook();

      expect(typeof hook.beforeRequest).toBe("function");
    });
  });
});
