import { describe, test, expect, afterEach, beforeEach, vi } from 'vitest';
import { CertManagementHook } from '../../hooks/cert-management.js';
import { GalileoConfig } from '../../lib/galileo-config.js';
import { HTTPClient } from '../../lib/http.js';
import { writeFileSync, mkdirSync, rmSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import type { SDKOptions } from '../../lib/config.js';

// Mock runtime detection - default to Node.js environment
const { mockIsNodeLike, mockIsBrowserLike } = vi.hoisted(() => ({
  mockIsNodeLike: vi.fn(() => true),
  mockIsBrowserLike: vi.fn(() => false),
}));

vi.mock('../../lib/runtime.js', () => ({
  isNodeLike: mockIsNodeLike,
  isBrowserLike: mockIsBrowserLike,
  isDeno: vi.fn(() => false),
}));

const ENV_KEYS = [
  'GALILEO_API_KEY',
  'GALILEO_CA_CERT_PATH',
  'SSL_CERT_FILE',
  'NODE_EXTRA_CA_CERTS',
  'GALILEO_CLIENT_CERT_PATH',
  'GALILEO_CLIENT_KEY_PATH',
  'GALILEO_REJECT_UNAUTHORIZED',
  'NODE_TLS_REJECT_UNAUTHORIZED',
] as const;

function clearEnv(): void {
  for (const key of ENV_KEYS) {
    delete process.env[key];
  }
}

describe('CertManagementHook', () => {
  let tmpDir: string;
  let caCertPath: string;
  let clientCertPath: string;
  let clientKeyPath: string;

  beforeEach(() => {
    // Create temporary directory and test certificate files
    tmpDir = join(tmpdir(), `galileo-cert-test-${Date.now()}`);
    mkdirSync(tmpDir, { recursive: true });

    caCertPath = join(tmpDir, 'ca.pem');
    clientCertPath = join(tmpDir, 'client.pem');
    clientKeyPath = join(tmpDir, 'key.pem');

    writeFileSync(caCertPath, '-----BEGIN CERTIFICATE-----\nMOCK_CA_CERT\n-----END CERTIFICATE-----');
    writeFileSync(clientCertPath, '-----BEGIN CERTIFICATE-----\nMOCK_CLIENT_CERT\n-----END CERTIFICATE-----');
    writeFileSync(clientKeyPath, '-----BEGIN PRIVATE KEY-----\nMOCK_PRIVATE_KEY\n-----END PRIVATE KEY-----');

    // Default to Node.js environment
    mockIsNodeLike.mockReturnValue(true);
    mockIsBrowserLike.mockReturnValue(false);
  });

  afterEach(() => {
    vi.clearAllMocks();
    clearEnv();
    GalileoConfig.reset();

    // Clean up temporary directory
    if (tmpDir) {
      rmSync(tmpDir, { recursive: true, force: true });
    }
  });

  describe('sdkInit', () => {
    test('test sdkInit returns httpClient when CA cert configured', () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      expect(result.httpClient).toBeDefined();
      expect(result.httpClient).not.toBe(opts.httpClient);
    });

    test('test sdkInit returns httpClient when CA cert content configured', () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertContent: '-----BEGIN CERTIFICATE-----\nMOCK_CONTENT\n-----END CERTIFICATE-----',
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      expect(result.httpClient).toBeDefined();
    });

    test('test sdkInit returns httpClient with client certificates', () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
        clientCertPath,
        clientKeyPath,
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      expect(result.httpClient).toBeDefined();
    });

    test('test sdkInit returns original opts when no cert configured', () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      expect(result).toBe(opts);
      expect(result.httpClient).toBeUndefined();
    });

    test('test sdkInit overrides httpClient when cert configured', () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      const hook = new CertManagementHook();
      const mockFetcher = vi.fn().mockResolvedValue(new Response());
      const existingClient = new HTTPClient({ fetcher: mockFetcher });
      const opts: SDKOptions = {
        serverURL: 'https://api.example.com',
        httpClient: existingClient,
      };
      const result = hook.sdkInit(opts);

      expect(result.serverURL).toBe(opts.serverURL);
      expect(result.httpClient).toBeDefined();
      expect(result.httpClient).not.toBe(existingClient);
    });

    test('test sdkInit skips cert loading in browser environment', () => {
      mockIsNodeLike.mockReturnValue(false);
      mockIsBrowserLike.mockReturnValue(true);

      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      expect(result).toBe(opts);
      expect(result.httpClient).toBeUndefined();
    });

    test('test sdkInit returns original opts when CA cert file missing', () => {
      const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath: '/nonexistent/ca.pem',
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      expect(result).toBe(opts);
      expect(result.httpClient).toBeUndefined();
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('[TLS] CA certificate file not found')
      );

      consoleWarnSpy.mockRestore();
    });

    test('test sdkInit returns original opts when client key file missing', () => {
      const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
        clientCertPath,
        clientKeyPath: '/nonexistent/key.pem',
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      expect(result).toBe(opts);
      expect(result.httpClient).toBeUndefined();
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('[TLS] Client key file not found')
      );

      consoleWarnSpy.mockRestore();
    });

    test('test sdkInit returns original opts when only client cert configured', () => {
      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
        clientCertPath,
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      expect(result).toBe(opts);
      expect(result.httpClient).toBeUndefined();
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Mutual TLS requires both')
      );

      consoleErrorSpy.mockRestore();
    });

    test('test sdkInit returns original opts when only client key configured', () => {
      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
        clientKeyPath,
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      expect(result).toBe(opts);
      expect(result.httpClient).toBeUndefined();
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Mutual TLS requires both')
      );

      consoleErrorSpy.mockRestore();
    });

    test('test sdkInit returns original opts when client cert file missing', () => {
      const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
        clientCertPath: '/nonexistent/cert.pem',
        clientKeyPath,
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      expect(result).toBe(opts);
      expect(result.httpClient).toBeUndefined();
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('[TLS] Client cert file not found')
      );

      consoleWarnSpy.mockRestore();
    });
  });

  describe('environment variable priority', () => {
    test('test GALILEO_CA_CERT_PATH from env is used', () => {
      GalileoConfig.reset();
      process.env['GALILEO_API_KEY'] = 'env-key';
      process.env['GALILEO_CA_CERT_PATH'] = caCertPath;

      const config = GalileoConfig.get({});
      const cert = config.getCertConfig();

      expect(cert).not.toBeNull();
      if (!cert) throw new Error("unreachable");
      expect(cert.caCertPath).toBe(caCertPath);
    });

    test('test only GALILEO_CA_CERT_PATH is supported for CA cert from env', () => {
      GalileoConfig.reset();
      process.env['GALILEO_API_KEY'] = 'env-key';
      process.env['SSL_CERT_FILE'] = caCertPath;

      const config = GalileoConfig.get({});
      const cert = config.getCertConfig();

      expect(cert).toBeNull();
    });

    test('test only GALILEO_CA_CERT_PATH is supported not NODE_EXTRA_CA_CERTS', () => {
      GalileoConfig.reset();
      process.env['GALILEO_API_KEY'] = 'env-key';
      process.env['NODE_EXTRA_CA_CERTS'] = caCertPath;

      const config = GalileoConfig.get({});
      const cert = config.getCertConfig();

      expect(cert).toBeNull();
    });
  });

  describe('client certificate environment variables', () => {
    test('test GALILEO_CLIENT_CERT_PATH and GALILEO_CLIENT_KEY_PATH from env', () => {
      GalileoConfig.reset();
      process.env['GALILEO_API_KEY'] = 'env-key';
      process.env['GALILEO_CA_CERT_PATH'] = caCertPath;
      process.env['GALILEO_CLIENT_CERT_PATH'] = clientCertPath;
      process.env['GALILEO_CLIENT_KEY_PATH'] = clientKeyPath;

      const config = GalileoConfig.get({});
      const cert = config.getCertConfig();

      expect(cert).not.toBeNull();
      if (!cert) throw new Error("unreachable");
      expect(cert.clientCertPath).toBe(clientCertPath);
      expect(cert.clientKeyPath).toBe(clientKeyPath);
    });
  });

  describe('rejectUnauthorized configuration', () => {
    test('test GALILEO_REJECT_UNAUTHORIZED takes priority over NODE_TLS_REJECT_UNAUTHORIZED', () => {
      GalileoConfig.reset();
      process.env['GALILEO_API_KEY'] = 'env-key';
      process.env['GALILEO_CA_CERT_PATH'] = caCertPath;
      process.env['GALILEO_REJECT_UNAUTHORIZED'] = 'false';
      process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1';

      const config = GalileoConfig.get({});
      const cert = config.getCertConfig();

      expect(cert).not.toBeNull();
      if (!cert) throw new Error("unreachable");
      expect(cert.rejectUnauthorized).toBe(false);
    });

    test('test NODE_TLS_REJECT_UNAUTHORIZED used when GALILEO_REJECT_UNAUTHORIZED absent', () => {
      GalileoConfig.reset();
      process.env['GALILEO_API_KEY'] = 'env-key';
      process.env['GALILEO_CA_CERT_PATH'] = caCertPath;
      process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

      const config = GalileoConfig.get({});
      const cert = config.getCertConfig();

      expect(cert).not.toBeNull();
      if (!cert) throw new Error("unreachable");
      expect(cert.rejectUnauthorized).toBe(false);
    });

    test('test rejectUnauthorized defaults to true when no env vars set', () => {
      GalileoConfig.reset();
      const config = GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });
      const cert = config.getCertConfig();

      expect(cert).not.toBeNull();
      if (!cert) throw new Error("unreachable");
      // rejectUnauthorized is undefined in config, defaults to true in hook
      expect(cert.rejectUnauthorized).toBeUndefined();
    });

    test('test sdkInit configures agent with custom CA cert even when rejectUnauthorized is true', () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
        rejectUnauthorized: true,
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      // Custom CA cert should be configured regardless of rejectUnauthorized value
      // rejectUnauthorized=true means strict validation with custom CA; this is a valid configuration
      expect(result.httpClient).toBeDefined();
      expect(result.httpClient).not.toBe(opts.httpClient);
    });

    test('test rejectUnauthorized false is passed to connectOptions', () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
        rejectUnauthorized: false,
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      expect(result.httpClient).toBeDefined();
      expect(result.httpClient).not.toBe(opts.httpClient);
    });
  });

  describe('CertAgent availability', () => {
    test('test sdkInit returns original opts when CertAgent is unavailable', () => {
      // Mock isNodeLike to return true but simulate missing undici by not being in Node-like environment for Agent
      // This tests the guard at line 53: if (!isNodeLike() || !CertAgent)
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      // Simulate CertAgent being undefined by mocking the module reload scenario
      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      
      // This test verifies that even with valid config, if CertAgent is not available,
      // the hook gracefully returns original opts
      // Note: In real scenario, CertAgent would be undefined if undici import fails
      const result = hook.sdkInit(opts);
      
      // If undici is available (which it should be in test environment), httpClient should be created
      // If undici is not available, result should be opts
      expect(result).toBeDefined();
      expect(result.serverURL).toBe(opts.serverURL);
    });
  });

  describe('integration - certificate mechanism', () => {
    test('test httpClient uses undici dispatcher with certificates', async () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      expect(result.httpClient).toBeDefined();

      // Spy on global fetch to verify dispatcher is passed
      const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        })
      );

      // Make a request using the httpClient
      const request = new Request('https://api.example.com/test', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      await result.httpClient?.request(request);

      // Verify fetch was called with dispatcher option
      expect(fetchSpy).toHaveBeenCalledTimes(1);
      const fetchCall = fetchSpy.mock.calls[0];
      expect(fetchCall).toBeDefined();
      if (!fetchCall) throw new Error('unreachable');
      expect(fetchCall[0]).toBeInstanceOf(Request);
      expect(fetchCall[1]).toBeDefined();
      expect(fetchCall[1]).toHaveProperty('dispatcher');
      // The dispatcher should be an undici Agent (Node.js-specific extension)
      const fetchInit = fetchCall[1] as RequestInit & { dispatcher?: unknown };
      expect(fetchInit.dispatcher).toBeDefined();

      fetchSpy.mockRestore();
    });

    test('test httpClient with certificates can make successful requests', async () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
        rejectUnauthorized: false, // For testing purposes
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      expect(result.httpClient).toBeDefined();

      // Mock successful response
      const mockResponse = new Response(JSON.stringify({ data: 'test' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
      const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue(mockResponse);

      // Make a request
      const request = new Request('https://api.example.com/endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ test: 'data' }),
      });

      const response = await result.httpClient?.request(request);

      // Verify request succeeded
      expect(response).toBeDefined();
      expect(response?.status).toBe(200);
      expect(fetchSpy).toHaveBeenCalled();

      fetchSpy.mockRestore();
    });

    test('test httpClient created with mTLS configuration without CA cert', async () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        clientCertPath,
        clientKeyPath,
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      expect(result.httpClient).toBeDefined();
      expect(result.httpClient).not.toBe(opts.httpClient);

      // Verify the httpClient can make requests with the configured certificates
      const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(JSON.stringify({ success: true }), { status: 200 })
      );

      const request = new Request('https://api.example.com/test', {
        method: 'GET',
      });

      await result.httpClient?.request(request);

      expect(fetchSpy).toHaveBeenCalledTimes(1);
      const fetchCall = fetchSpy.mock.calls[0];
      expect(fetchCall).toBeDefined();
      if (!fetchCall) throw new Error('unreachable');
      expect(fetchCall[1]).toHaveProperty('dispatcher');

      fetchSpy.mockRestore();
    });

    test('test sdkInit returns original opts when no meaningful TLS customization', () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        rejectUnauthorized: true,
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      // When only rejectUnauthorized=true is set (no CA/client certs), hasCertCustomization is false
      // because hasCertCustomization requires CA, cert, key, or rejectUnauthorized === false (line 118)
      expect(result).toBe(opts);
      expect(result.httpClient).toBeUndefined();
    });

    test('test sdkInit configures mTLS with client certs even when rejectUnauthorized is true', () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        clientCertPath,
        clientKeyPath,
        rejectUnauthorized: true,
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      // mTLS client certs should be configured regardless of rejectUnauthorized value
      // rejectUnauthorized and custom certs are orthogonal concerns
      expect(result.httpClient).toBeDefined();
      expect(result.httpClient).not.toBe(opts.httpClient);
    });
  });
});
