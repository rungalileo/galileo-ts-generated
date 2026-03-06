/*
 * Certificate management SDK init hook: configures TLS/SSL for fetch API using undici Agent.
 * 
 * Reads certificate configuration from GalileoConfig singleton and applies it to all SDK HTTP requests.
 * Supports custom CA certificates, client certificates (mutual TLS), and certificate validation controls.
 * 
 * Configuration sources (via GalileoConfig):
 * - GALILEO_CA_CERT_PATH / GALILEO_CA_CERT_CONTENT: Custom CA certificate(s)
 * - GALILEO_CLIENT_CERT_PATH + GALILEO_CLIENT_KEY_PATH: Client certificate and key for mTLS
 * - GALILEO_REJECT_UNAUTHORIZED / NODE_TLS_REJECT_UNAUTHORIZED: Control certificate validation
 * - SSL_CERT_FILE: Python httpx compatibility (treated as CA certificate)
 * - NODE_EXTRA_CA_CERTS: Node.js native support for appending to default CA list (works without this hook)
 * 
 * ⚠️  REQUIRES Node.js >= 20.18.1 for undici dispatcher support in fetch API.
 * ⚠️  Gracefully skips on older Node.js versions or non-Node.js runtimes (browser, Deno).
 * ⚠️  Only creates undici Agent if meaningful TLS customization is detected (prevents unnecessary overhead).
 */

import { readFileSync, existsSync } from 'fs';
import { HTTPClient } from '../lib/http.js';
import { GalileoConfig } from '../lib/galileo-config.js';
import { isNodeLike } from '../lib/runtime.js';
import type { SDKInitHook } from './types.js';
import type { SDKOptions } from '../lib/config.js';
import { getSdkLogger } from '../lib/sdk-logger.js';
const sdkLogger = getSdkLogger();

type AgentConstructor = new (options: {
  connect: {
    ca?: string;
    cert?: string;
    key?: string;
    rejectUnauthorized?: boolean;
  };
}) => object;

let CertAgent: AgentConstructor | undefined;

try {
  // Using synchronous require to support both ESM and CommonJS contexts
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  CertAgent = require('undici').Agent;
} catch (error) {
  sdkLogger.warn(`[TLS] Failed to import undici: ${error}`);
}


/**
 * SDK initialization hook that configures TLS/SSL certificates for all SDK HTTP requests.
 * 
 * This hook reads certificate configuration from GalileoConfig and applies it by creating
 * a custom undici Agent as the fetch dispatcher. Only runs on Node.js >= 20.18.1 with undici available.
 * 
 * Configuration sources (environment variables resolved via GalileoConfig):
 * - GALILEO_CA_CERT_PATH or GALILEO_CA_CERT_CONTENT: Custom CA certificate(s) for server verification
 * - GALILEO_CLIENT_CERT_PATH + GALILEO_CLIENT_KEY_PATH: Client certificate and key for mutual TLS (both required)
 * - GALILEO_REJECT_UNAUTHORIZED: Control whether to accept self-signed/unauthorized certificates
 *   (also falls back to NODE_TLS_REJECT_UNAUTHORIZED if GALILEO_REJECT_UNAUTHORIZED not set)
 * - SSL_CERT_FILE: Python httpx-style CA cert file (supported for compatibility)
 * 
 * Implementation details:
 * - Skips gracefully on browsers, Deno, or Node.js without undici support
 * - Returns original opts if no certificate configuration is present
 * - Validates mutual TLS: requires both clientCertPath and clientKeyPath; fails if only one is set
 * - Only creates undici Agent if there's meaningful TLS customization (avoids unnecessary overhead)
 * - Wraps fetch with a custom dispatcher to apply the TLS configuration to all SDK requests
 * 
 * @implements {SDKInitHook}
 */
export class CertManagementHook implements SDKInitHook {
  /**
   * Initializes SDK options with TLS certificate configuration.
   * 
   * Reads certificate config from GalileoConfig, creates an undici Agent if needed,
   * and augments the HTTPClient (if present) with a beforeRequest hook that injects
   * the TLS dispatcher. This approach preserves any custom HTTPClient and its hooks
   * while layering TLS configuration on top.
   * 
   * @param opts - The original SDK options
   * @returns Enhanced SDKOptions with TLS configuration applied, or original opts otherwise
   */
  sdkInit(opts: SDKOptions): SDKOptions {
    if (!isNodeLike() || !CertAgent) {
      return opts;
    }

    // Get certificate configuration from GalileoConfig singleton
    const cert = GalileoConfig.get().getCertConfig();
    if (!cert) {
      return opts;
    }

    try {
      // Determine CA certificate source (prefer direct content over file path)
      let ca: string | undefined | null;

      if (cert.caCertContent) {
        // CA provided directly as string (GALILEO_CA_CERT_CONTENT)
        ca = cert.caCertContent;
      } else if (cert.caCertPath) {
        // CA certificate path provided (GALILEO_CA_CERT_PATH); read file from disk
        ca = this.readFileWarning(cert.caCertPath, 'CA certificate');
        if (!ca) return opts;
      }

      // Build undici Agent connect options (TLS settings passed to undici's socket connector)
      const connectOptions: {
        ca?: string;
        cert?: string;
        key?: string;
        rejectUnauthorized?: boolean;
      } = {};

      if (ca) {
        connectOptions.ca = ca;
      }

      // Validate mutual TLS: both cert and key must be configured together (all-or-nothing)
      if ((cert.clientCertPath || cert.clientKeyPath) && !(cert.clientCertPath && cert.clientKeyPath)) {
        sdkLogger.error('[TLS] Mutual TLS requires both GALILEO_CLIENT_CERT_PATH and GALILEO_CLIENT_KEY_PATH to be set');
        return opts;
      }

      // Load client certificate (mutual TLS) if provided
      const clientCert = cert.clientCertPath ? this.readFileWarning(cert.clientCertPath, 'Client cert') : null;
      if (cert.clientCertPath && !clientCert) return opts;
      if (clientCert) connectOptions.cert = clientCert;

      // Load client key (mutual TLS) if provided
      const clientKey = cert.clientKeyPath ? this.readFileWarning(cert.clientKeyPath, 'Client key') : null;
      if (cert.clientKeyPath && !clientKey) return opts;
      if (clientKey) connectOptions.key = clientKey;

      // Apply certificate validation setting (whether to accept self-signed/unauthorized certs)
      if (cert.rejectUnauthorized !== undefined) 
        connectOptions.rejectUnauthorized = cert.rejectUnauthorized;

      // Guard: Only create undici Agent if there's meaningful TLS customization
      // This avoids unnecessary overhead when only rejectUnauthorized=true (default behavior)
      const hasCertCustomization = Boolean(connectOptions.ca || connectOptions.cert || connectOptions.key || connectOptions.rejectUnauthorized === false);
      if (!hasCertCustomization) {
        return opts;
      }

      // Create undici Agent with the configured TLS settings (singleton, reused for all requests)
      const agent = new CertAgent({
        connect: connectOptions
      });

      // Get or create HTTPClient to augment
      const httpClient = opts.httpClient || new HTTPClient();

      // Warn if this runtime may not support Request.dispatcher (Node.js < 20.18.1)
      this.warnIfDispatcherUnsupported();

      // Add a beforeRequest hook that injects the TLS dispatcher into requests.
      // This hook attaches the pre-created agent to the request, applying TLS configuration
      // while preserving any user-registered hooks (which execute before this one).
      // 
      // The dispatcher option is a Node.js-specific extension for undici integration.
      // Supported on Node.js >= 20.18.1 with undici available.
      // On older runtimes or non-Node.js environments, the dispatcher will be silently ignored
      // (Request constructor doesn't throw on unknown properties, just ignores them).
      // See: https://nodejs.org/docs/latest/api/fetch.html#fetchinit-options
      httpClient.addHook('beforeRequest', (req: Request): Request => {
        // Create a new Request with the TLS dispatcher injected.
        // The hook receives a cloned request, so the body is readable and safe to transfer.
        return new Request(req.url, {
          method: req.method,
          headers: req.headers,
          body: req.body,
          // @ts-expect-error - dispatcher is Node.js-specific undici extension, not in standard fetch spec
          dispatcher: agent
        });
      });

      return {
        ...opts,
        httpClient: httpClient
      };

    } catch (error) {
      sdkLogger.error(`[TLS] Failed to configure custom certificates: ${error}`);
      return opts;
    }
  }

  /**
   * Warns if the current Node.js version may not support Request.dispatcher.
   * 
   * Request.dispatcher is a Node.js-specific extension for undici integration.
   * It's supported on Node.js >= 20.18.1. On older versions, the dispatcher
   * property will be silently ignored, and TLS certificates may not be applied.
   * 
   * See: https://nodejs.org/docs/latest/api/fetch.html#fetchinit-options
   */
  private warnIfDispatcherUnsupported(): void {
    // Only check on Node.js-like environments; skip on browser/Deno
    if (!isNodeLike()) {
      return; // Non-Node.js runtimes don't support dispatcher anyway (expected)
    }

    try {
      const nodeVersion = this.getNodeVersion();
      if (nodeVersion && !this.isNodeVersionSupported(nodeVersion)) {
        sdkLogger.warn(
          `[TLS] Node.js ${nodeVersion} detected. Request.dispatcher (required for TLS support) ` +
          `is available from Node.js 20.18.1+. Upgrade Node.js to ensure certificates are applied. ` +
          `See: https://nodejs.org/docs/latest/api/fetch.html#fetchinit-options`
        );
      }
    } catch (error) {
      // If version detection fails, silently skip the warning
      // (version detection is best-effort for user convenience)
    }
  }

  /**
   * Extracts the Node.js version from process.versions.
   * 
   * @returns Version string (e.g., "20.10.0") or null if not detectable
   */
  private getNodeVersion(): string | null {
    try {
      const proc = (globalThis as unknown as {
        process?: { versions?: { node?: string } };
      }).process;
      
      if (proc?.versions?.node) {
        return proc.versions.node;
      }
    } catch {
      // Ignore errors; version detection is non-critical
    }
    return null;
  }

  /**
   * Checks if a Node.js version is >= 20.18.1 (minimum for Request.dispatcher support).
   * 
   * @param versionStr - Version string (e.g., "20.10.0", "21.0.0")
   * @returns true if version >= 20.18.1, false otherwise
   */
  private isNodeVersionSupported(versionStr: string): boolean {
    try {
      // Handle empty or obviously invalid strings early
      if (!versionStr || typeof versionStr !== 'string') {
        return true; // Can't parse, assume supported (optimistic)
      }

      const parts = versionStr.split('.').map(v => parseInt(v, 10));
      const major = parts[0];
      const minor = parts[1] ?? 0;
      const patch = parts[2] ?? 0;

      // If major version couldn't be parsed (NaN or undefined), assume supported
      if (major === undefined || Number.isNaN(major)) return true;

      // Need: major > 20 OR (major === 20 AND minor > 18) OR (major === 20 AND minor === 18 AND patch >= 1)
      if (major > 20) return true;
      if (major === 20) {
        if (minor > 18) return true;
        if (minor === 18 && patch >= 1) return true;
      }
      return false;
    } catch {
      // If any parsing error occurs, assume version is supported (optimistic)
      return true;
    }
  }

  /**
   * Safely reads a certificate/key file from disk with error reporting.
   * 
   * Checks file existence before reading to provide clear warning messages.
   * Returns null if file doesn't exist or read fails; logs a warning in either case.
   * 
   * @param filePath - Absolute or relative path to the certificate/key file
   * @param fileType - Human-readable description for error messages (e.g., "CA certificate", "Client cert", "Client key")
   * @returns File content as UTF-8 string, or null if file doesn't exist or read fails
   */
  private readFileWarning(filePath: string, fileType: string): string | null {
    if (!existsSync(filePath)) {
      sdkLogger.warn(`[TLS] ${fileType} file not found: ${filePath}`);
      return null;
    }
    return readFileSync(filePath, 'utf-8');
  }
}
