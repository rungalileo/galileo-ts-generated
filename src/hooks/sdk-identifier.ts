import type { BeforeRequestContext, BeforeRequestHook } from "./types.js";

let cachedVersion: string | null = null;

function loadVersion(): string {
  if (cachedVersion) {
    return cachedVersion;
  }

  try {
    // NOTES: require is being used for now, using import demands appropriate
    // compiler configuration, which won't be enabled yet due to Speakeasy's
    // particular way of enabling persistent edits conflicting with workflow.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const packageJson = require("../../package.json");
    cachedVersion = packageJson.version;
    return cachedVersion ?? "unknown";
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
    const version = loadVersion();
    const sdkIdentifier = getSdkIdentifier(version);
    request.headers.set("X-Galileo-SDK", sdkIdentifier);
    return request;
  }
}
