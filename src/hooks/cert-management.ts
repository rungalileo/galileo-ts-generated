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
   * and returns SDKOptions with a custom HTTPClient using the configured agent.
   * 
   * @param opts - The original SDK options
   * @returns Enhanced SDKOptions with custom HTTPClient if TLS config is present, or original opts otherwise
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

      // Create undici Agent with the configured TLS settings
      const agent = new CertAgent({
        connect: connectOptions
      });

      // Create custom fetcher that injects the undici agent as the dispatcher
      // This applies TLS configuration to all fetch requests made through the SDK
      const customFetcher = (input: RequestInfo | URL, init?: RequestInit) => {
        return fetch(input, {
          ...init,
          // @ts-expect-error - dispatcher is Node.js-specific undici extension, not in standard fetch spec
          dispatcher: agent
        });
      };

      // Return enhanced SDK options with custom HTTPClient using the TLS-configured fetcher
      return {
        ...opts,
        httpClient: new HTTPClient({ fetcher: customFetcher })
      };

    } catch (error) {
      sdkLogger.error(`[TLS] Failed to configure custom certificates: ${error}`);
      return opts;
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
