import type { BeforeRequestContext, BeforeRequestHook } from "./types.js";

let cachedVersion: string | null = null;

async function loadVersion(): Promise<string> {
  if (cachedVersion) {
    return cachedVersion;
  }

  try {
    const packageModule = await import("../../package.json", {
      with: { type: "json" },
    });
    cachedVersion = packageModule.default.version;
    return cachedVersion;
  } catch {
    return "unknown";
  }
}

function getSdkIdentifier(version: string): string {
  return `galileo-generated/${version}`;
}

export class SDKIdentifierHook implements BeforeRequestHook {
  async beforeRequest(
    _hookCtx: BeforeRequestContext,
    request: Request,
  ): Promise<Request> {
    const version = await loadVersion();
    const sdkIdentifier = getSdkIdentifier(version);
    request.headers.set("X-Galileo-SDK", sdkIdentifier);
    return request;
  }
}
