/*
 * Certificate management hook: configures TLS using undici Agent with custom CA certificates.
 * Reads configuration from GalileoConfig singleton.
 * 
 * ⚠️  REQUIRES Node.js >= 20.18.1 due to undici's dispatcher support in fetch API.
 * This feature will gracefully skip on Node 18/early Node 20, falling back to global TLS settings.
 */

import { readFileSync, existsSync } from 'fs';
import { HTTPClient } from '../lib/http.js';
import { GalileoConfig } from '../lib/galileo-config.js';
import { isNodeLike } from '../lib/runtime.js';
import type { SDKInitHook } from './types.js';
import type { SDKOptions } from '../lib/config.js';

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
  // console.warn until unified logger is implemented
  console.warn(`[TLS] Failed to import undici: ${error}`);
}


/**
 * Hook that configures TLS/SSL certificates from GalileoConfig.
 *
 * Supports environment variables (via GalileoConfig):
 * - GALILEO_CA_CERT_PATH (highest priority)
 * - SSL_CERT_FILE (Python httpx compatibility)
 * - NODE_EXTRA_CA_CERTS (Node.js native, fallback)
 *
 * Also supports:
 * - GALILEO_CA_CERT_CONTENT (direct certificate content)
 * - GALILEO_CLIENT_CERT_PATH (mutual TLS)
 * - GALILEO_CLIENT_KEY_PATH (mutual TLS)
 * - GALILEO_REJECT_UNAUTHORIZED / NODE_TLS_REJECT_UNAUTHORIZED
 *
 */
export class CertManagementHook implements SDKInitHook {
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
      // Determine CA certificate source
      let ca: string | undefined | null;

      if (cert.caCertContent) {
        // CA provided directly (programmatic configuration)
        ca = cert.caCertContent;
      } else if (cert.caCertPath) {
        // CA path provided (from env vars or programmatic)
        ca = this.readFileWarning(cert.caCertPath, 'CA certificate');
        if (!ca) return opts;
      }

      // Build undici Agent connect options (TLS options passed to undici's connector)
      const connectOptions: {
        ca?: string;
        cert?: string;
        key?: string;
        rejectUnauthorized?: boolean;
      } = {};

      if (ca) {
        connectOptions.ca = ca;
      }

      // Validate mTLS: both cert and key must be configured together
      if ((cert.clientCertPath || cert.clientKeyPath) && !(cert.clientCertPath && cert.clientKeyPath)) {
        console.error('[TLS] Mutual TLS requires both GALILEO_CLIENT_CERT_PATH and GALILEO_CLIENT_KEY_PATH to be set');
        return opts;
      }

      // Add client certificate if provided (mutual TLS)
      const clientCert = cert.clientCertPath ? this.readFileWarning(cert.clientCertPath, 'Client cert') : null;
      if (cert.clientCertPath && !clientCert) return opts;
      if (clientCert) connectOptions.cert = clientCert;

      const clientKey = cert.clientKeyPath ? this.readFileWarning(cert.clientKeyPath, 'Client key') : null;
      if (cert.clientKeyPath && !clientKey) return opts;
      if (clientKey) connectOptions.key = clientKey;

      if(cert.rejectUnauthorized !== undefined) 
        connectOptions.rejectUnauthorized = cert.rejectUnauthorized;

      // Guard: Only create Agent if connectOptions has meaningful TLS customization
      const hasCertCustomization = Boolean(connectOptions.ca || connectOptions.cert || connectOptions.key || connectOptions.rejectUnauthorized === false);
      if (!hasCertCustomization) {
        return opts;
      }

      // Create undici Agent with TLS configuration
      const agent = new CertAgent({
        connect: connectOptions
      });

      // Create custom fetcher with the agent as dispatcher
      const customFetcher = (input: RequestInfo | URL, init?: RequestInit) => {
        return fetch(input, {
          ...init,
          // @ts-expect-error - dispatcher is Node.js-specific, not in standard fetch spec
          dispatcher: agent
        });
      };

      // Return options with custom HTTP client
      return {
        ...opts,
        httpClient: new HTTPClient({ fetcher: customFetcher })
      };

    } catch (error) {
      console.error(`[TLS] Failed to configure custom certificates: ${error}`);
      return opts;
    }
  }

  /**
   * Safely reads a certificate/key file from disk.
   * @param filePath - Path to the file
   * @param fileType - Description for error messages (e.g., "CA certificate", "Client cert", "Client key")
   * @returns File content as string, or null if file doesn't exist or read fails
   */
  private readFileWarning(filePath: string, fileType: string): string | null {
    if (!existsSync(filePath)) {
      console.warn(`[TLS] ${fileType} file not found: ${filePath}`);
      return null;
    }
    return readFileSync(filePath, 'utf-8');
  }
}
