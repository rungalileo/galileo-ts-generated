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
        expect.stringContaining('[TLS] Certificate file not found')
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
  });

  describe('environment variable priority', () => {
    test('test GALILEO_CA_CERT_PATH takes priority over SSL_CERT_FILE', () => {
      const altCertPath = join(tmpDir, 'alt-ca.pem');
      writeFileSync(altCertPath, '-----BEGIN CERTIFICATE-----\nALT_CA\n-----END CERTIFICATE-----');

      GalileoConfig.reset();
      process.env['GALILEO_API_KEY'] = 'env-key';
      process.env['GALILEO_CA_CERT_PATH'] = caCertPath;
      process.env['SSL_CERT_FILE'] = altCertPath;

      const config = GalileoConfig.get({});
      const cert = config.getCertConfig();

      expect(cert).not.toBeNull();
      if (!cert) throw new Error("unreachable");
      expect(cert.caCertPath).toBe(caCertPath);

      delete process.env['GALILEO_API_KEY'];
      delete process.env['GALILEO_CA_CERT_PATH'];
      delete process.env['SSL_CERT_FILE'];
    });

    test('test SSL_CERT_FILE takes priority over NODE_EXTRA_CA_CERTS', () => {
      const altCertPath = join(tmpDir, 'alt-ca.pem');
      writeFileSync(altCertPath, '-----BEGIN CERTIFICATE-----\nALT_CA\n-----END CERTIFICATE-----');

      GalileoConfig.reset();
      process.env['GALILEO_API_KEY'] = 'env-key';
      process.env['SSL_CERT_FILE'] = caCertPath;
      process.env['NODE_EXTRA_CA_CERTS'] = altCertPath;

      const config = GalileoConfig.get({});
      const cert = config.getCertConfig();

      expect(cert).not.toBeNull();
      if (!cert) throw new Error("unreachable");
      expect(cert.caCertPath).toBe(caCertPath);

      delete process.env['GALILEO_API_KEY'];
      delete process.env['SSL_CERT_FILE'];
      delete process.env['NODE_EXTRA_CA_CERTS'];
    });

    test('test NODE_EXTRA_CA_CERTS used when higher priority vars absent', () => {
      GalileoConfig.reset();
      process.env['GALILEO_API_KEY'] = 'env-key';
      process.env['NODE_EXTRA_CA_CERTS'] = caCertPath;

      const config = GalileoConfig.get({});
      const cert = config.getCertConfig();

      expect(cert).not.toBeNull();
      if (!cert) throw new Error("unreachable");
      expect(cert.caCertPath).toBe(caCertPath);

      delete process.env['GALILEO_API_KEY'];
      delete process.env['NODE_EXTRA_CA_CERTS'];
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

      delete process.env['GALILEO_API_KEY'];
      delete process.env['GALILEO_CA_CERT_PATH'];
      delete process.env['GALILEO_CLIENT_CERT_PATH'];
      delete process.env['GALILEO_CLIENT_KEY_PATH'];
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

      delete process.env['GALILEO_API_KEY'];
      delete process.env['GALILEO_CA_CERT_PATH'];
      delete process.env['GALILEO_REJECT_UNAUTHORIZED'];
      delete process.env['NODE_TLS_REJECT_UNAUTHORIZED'];
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

      delete process.env['GALILEO_API_KEY'];
      delete process.env['GALILEO_CA_CERT_PATH'];
      delete process.env['NODE_TLS_REJECT_UNAUTHORIZED'];
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
  });
});
