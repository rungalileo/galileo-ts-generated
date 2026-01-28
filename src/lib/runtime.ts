/*
 * Runtime detection helpers.
 */

const gt: unknown = typeof globalThis === "undefined" ? null : globalThis;
const webWorkerLike = typeof gt === "object"
  && gt != null
  && "importScripts" in gt
  && typeof gt["importScripts"] === "function";

export function isBrowserLike(): boolean {
  return webWorkerLike
    || (typeof navigator !== "undefined" && "serviceWorker" in navigator)
    || (typeof window === "object" && typeof window.document !== "undefined");
}

export function isDeno(): boolean {
  return typeof gt === "object" && gt != null && "Deno" in gt;
}

export function isNodeLike(): boolean {
  const proc = (typeof globalThis === "undefined"
    ? null
    : (globalThis as { process?: { versions?: { node?: string }; release?: { name?: string } } })
      .process) ?? null;
  if (!proc) {
    return false;
  }

  const versions = proc.versions;
  const release = proc.release;
  return typeof versions === "object"
    && typeof versions?.node === "string"
    && typeof release === "object"
    && (release?.name === "node" || release?.name === "io.js");
}
