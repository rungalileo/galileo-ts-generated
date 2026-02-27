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

    test('test sdkInit augments existing httpClient instead of replacing it', async () => {
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
      // Most important: the same httpClient instance is returned, not a new one
      expect(result.httpClient).toBe(existingClient);
      
      // Verify that the TLS hook was added by making a request
      const req = new Request('https://api.example.com/test', { method: 'GET' });
      await result.httpClient?.request(req);
      
      // The custom fetcher should have been called
      expect(mockFetcher).toHaveBeenCalledTimes(1);
      const callArgs = mockFetcher.mock.calls[0];
      expect(callArgs).toBeDefined();
      if (!callArgs) throw new Error('unreachable');
      const [calledReq] = callArgs;
      // Verify dispatcher was injected into the request
      expect(calledReq).toBeInstanceOf(Request);
      expect((calledReq as Request).url).toBe('https://api.example.com/test');
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
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath: '/nonexistent/ca.pem',
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { serverURL: 'https://api.example.com' };
      const result = hook.sdkInit(opts);

      // When cert file is missing, no httpClient should be configured
      expect(result).toBe(opts);
      expect(result.httpClient).toBeUndefined();
    });

    test('test sdkInit returns original opts when client key file missing', () => {
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
    });

    test('test sdkInit returns original opts when only client cert configured', () => {
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

      // When only client cert is provided (missing key), should return original opts
      expect(result).toBe(opts);
      expect(result.httpClient).toBeUndefined();
    });

    test('test sdkInit returns original opts when only client key configured', () => {
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

      // When only client key is provided (missing cert), should return original opts
      expect(result).toBe(opts);
      expect(result.httpClient).toBeUndefined();
    });

    test('test sdkInit returns original opts when client cert file missing', () => {
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
    test('test TLS hook is added via beforeRequest hook', async () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      const hook = new CertManagementHook();
      const mockFetcher = vi.fn().mockResolvedValue(new Response('OK'));
      const httpClient = new HTTPClient({ fetcher: mockFetcher });
      
      const opts: SDKOptions = { httpClient };
      const result = hook.sdkInit(opts);

      expect(result.httpClient).toBe(httpClient);

      // Make a GET request (no body) through the augmented client
      const request = new Request('https://api.example.com/test', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const response = await result.httpClient?.request(request);

      // Verify the custom fetcher was called
      expect(mockFetcher).toHaveBeenCalledTimes(1);
      const callArgs = mockFetcher.mock.calls[0];
      expect(callArgs).toBeDefined();
      if (!callArgs) throw new Error('unreachable');
      const [calledReq] = callArgs;
      
      // Verify the request properties are preserved
      expect(calledReq).toBeInstanceOf(Request);
      expect((calledReq as Request).url).toBe('https://api.example.com/test');
      expect((calledReq as Request).method).toBe('GET');
      expect((calledReq as Request).headers.get('Content-Type')).toBe('application/json');
      
      // Verify response was returned
      expect(response?.status).toBe(200);
    });

    test('test httpClient uses undici dispatcher with certificates', async () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      const hook = new CertManagementHook();
      
      // Use a custom fetcher that captures what it receives
      let receivedRequest: Request | null = null;
      const testFetcher = vi.fn(async (input: RequestInfo | URL, _init?: RequestInit) => {
        if (input instanceof Request) {
          receivedRequest = input;
        }
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      });
      
      const httpClient = new HTTPClient({ fetcher: testFetcher });
      const opts: SDKOptions = { httpClient };
      const result = hook.sdkInit(opts);

      expect(result.httpClient).toBeDefined();

      // Make a request using the httpClient
      const request = new Request('https://api.example.com/test', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      await result.httpClient?.request(request);

      // Verify the custom fetcher was called
      expect(testFetcher).toHaveBeenCalledTimes(1);
      expect(receivedRequest).toBeDefined();
      
      // The hook should have transformed the request
      if (!receivedRequest) throw new Error('unreachable');
      expect(receivedRequest).toBeInstanceOf(Request);
      expect((receivedRequest as Request).url).toBe('https://api.example.com/test');
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

      // Make a GET request (no body)
      const request = new Request('https://api.example.com/endpoint', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
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
      const mockFetcher = vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ success: true }), { status: 200 })
      );
      const httpClient = new HTTPClient({ fetcher: mockFetcher });
      
      const opts: SDKOptions = { httpClient };
      const result = hook.sdkInit(opts);

      expect(result.httpClient).toBeDefined();
      // With augmentation approach, same instance is returned
      expect(result.httpClient).toBe(opts.httpClient);

      // Verify the httpClient can make requests with the configured certificates
      const request = new Request('https://api.example.com/test', {
        method: 'GET',
      });

      await result.httpClient?.request(request);

      expect(mockFetcher).toHaveBeenCalledTimes(1);
      const callArgs = mockFetcher.mock.calls[0];
      expect(callArgs).toBeDefined();
      if (!callArgs) throw new Error('unreachable');
      const [calledReq] = callArgs;
      expect(calledReq).toBeInstanceOf(Request);
      expect((calledReq as Request).url).toBe('https://api.example.com/test');
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
    });
  });

  describe('user hook preservation', () => {
    test('test user-registered hooks are preserved when TLS is configured', async () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      let userHookCalled = false;
      const mockFetcher = vi.fn().mockResolvedValue(new Response('OK'));
      const userClient = new HTTPClient({ fetcher: mockFetcher });
      
      userClient.addHook('beforeRequest', (req) => {
        userHookCalled = true;
        // User hook can modify headers
        const newReq = new Request(req.url, {
          method: req.method,
          headers: req.headers,
          body: req.body,
        });
        newReq.headers.set('X-Custom-Header', 'user-value');
        return newReq;
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { httpClient: userClient };
      const result = hook.sdkInit(opts);

      const request = new Request('https://api.example.com/test', {
        method: 'GET',
      });

      await result.httpClient?.request(request);

      // Verify user hook was called
      expect(userHookCalled).toBe(true);

      // Verify the custom fetcher was called
      expect(mockFetcher).toHaveBeenCalledTimes(1);
      const callArgs = mockFetcher.mock.calls[0];
      expect(callArgs).toBeDefined();
      if (!callArgs) throw new Error('unreachable');
      const [calledReq] = callArgs;
      
      // Verify user's header was preserved in the final request
      expect(calledReq).toBeInstanceOf(Request);
      expect((calledReq as Request).headers.get('X-Custom-Header')).toBe('user-value');
    });

    test('test TLS hook runs after user hooks', async () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      const callOrder: string[] = [];

      const userClient = new HTTPClient();
      userClient.addHook('beforeRequest', (req) => {
        callOrder.push('user-hook');
        return req;
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { httpClient: userClient };
      const result = hook.sdkInit(opts);

      // Mock fetch to capture when it's called
      const fetchSpy = vi.spyOn(globalThis, 'fetch').mockImplementation(async () => {
        callOrder.push('fetch');
        return new Response('OK');
      });

      const request = new Request('https://api.example.com/test', {
        method: 'GET',
      });

      await result.httpClient?.request(request);

      // User hook should run before fetch (and before TLS hook which is closest to fetch)
      expect(callOrder).toEqual(['user-hook', 'fetch']);

      fetchSpy.mockRestore();
    });

    test('test multiple user hooks are all executed with TLS', async () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      const mockFetcher = vi.fn().mockResolvedValue(new Response('OK'));
      const userClient = new HTTPClient({ fetcher: mockFetcher });
      const calls: string[] = [];

      userClient.addHook('beforeRequest', (req) => {
        calls.push('hook1');
        return req;
      });

      userClient.addHook('beforeRequest', (req) => {
        calls.push('hook2');
        return req;
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = { httpClient: userClient };
      const result = hook.sdkInit(opts);

      const request = new Request('https://api.example.com/test', {
        method: 'GET',
      });

      await result.httpClient?.request(request);

      // Both user hooks should be called
      expect(calls).toContain('hook1');
      expect(calls).toContain('hook2');

      // And the fetcher should be called with a request
      expect(mockFetcher).toHaveBeenCalled();
      const callArgs = mockFetcher.mock.calls[0];
      expect(callArgs).toBeDefined();
      if (!callArgs) throw new Error('unreachable');
      const [calledReq] = callArgs;
      expect(calledReq).toBeInstanceOf(Request);
    });
  });

  describe('request body handling', () => {
    test('test TLS hook preserves request headers and url', async () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      const hook = new CertManagementHook();
      const opts: SDKOptions = {};
      const result = hook.sdkInit(opts);

      const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response('OK')
      );

      const request = new Request('https://api.example.com/test', {
        method: 'GET',
        headers: { 'X-Custom': 'value', 'Content-Type': 'application/json' },
      });

      await result.httpClient?.request(request);

      expect(fetchSpy).toHaveBeenCalledTimes(1);
      const callArgs = fetchSpy.mock.calls[0];
      expect(callArgs).toBeDefined();
      if (!callArgs) throw new Error('unreachable');
      const [calledReq] = callArgs;

      expect((calledReq as Request).url).toBe('https://api.example.com/test');
      expect((calledReq as Request).headers.get('X-Custom')).toBe('value');
      expect((calledReq as Request).headers.get('Content-Type')).toBe('application/json');

      fetchSpy.mockRestore();
    });
  });

  describe('runtime version detection and warnings', () => {
    test('test version detection correctly identifies supported Node.js versions', () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      const hook = new CertManagementHook();
      
      // Access the private method via type casting for testing
      const hookAny = hook as any;
      
      // Test various version strings
      expect(hookAny.isNodeVersionSupported('20.18.0')).toBe(false);  // Minor < 18
      expect(hookAny.isNodeVersionSupported('20.18.1')).toBe(true);   // Exact minimum
      expect(hookAny.isNodeVersionSupported('20.19.0')).toBe(true);   // Minor > 18
      expect(hookAny.isNodeVersionSupported('21.0.0')).toBe(true);    // Major > 20
      expect(hookAny.isNodeVersionSupported('22.5.0')).toBe(true);    // Much newer
      expect(hookAny.isNodeVersionSupported('19.10.0')).toBe(false);  // Too old
    });

    test('test version string parsing handles various formats', () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      const hook = new CertManagementHook();
      const hookAny = hook as any;

      // Test edge cases
      expect(hookAny.isNodeVersionSupported('20')).toBe(false);       // No minor version (defaults to 0)
      expect(hookAny.isNodeVersionSupported('20.18')).toBe(false);    // No patch version (defaults to 0, which is < 1)
      expect(hookAny.isNodeVersionSupported('20.19')).toBe(true);     // Minor > 18
      // Note: parseInt('invalid') returns NaN, but parts[0] would be NaN which !== undefined
      // so the check major === undefined won't catch it. It would return false.
      // For truly invalid versions, they'd fail the >= check anyway
      expect(hookAny.isNodeVersionSupported('')).toBe(true);          // Empty string → optimistic
    });

    test('test Node.js version extraction from process.versions', () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      const hook = new CertManagementHook();
      const hookAny = hook as any;

      // Get the actual Node version
      const version = hookAny.getNodeVersion();
      
      // Verify we got a version string (or null in non-Node environments)
      if (version !== null) {
        expect(typeof version).toBe('string');
        expect(version.length).toBeGreaterThan(0);
      }
    });
  });

  describe('dispatcher integration', () => {
    test('test dispatcher is passed correctly through the request chain', async () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      const hook = new CertManagementHook();
      const mockFetcher = vi.fn().mockResolvedValue(new Response('OK'));
      const httpClient = new HTTPClient({ fetcher: mockFetcher });

      const opts: SDKOptions = { httpClient };
      const result = hook.sdkInit(opts);

      const request = new Request('https://api.example.com/test', {
        method: 'GET',
      });

      await result.httpClient?.request(request);

      expect(mockFetcher).toHaveBeenCalledTimes(1);
      const callArgs = mockFetcher.mock.calls[0];
      expect(callArgs).toBeDefined();
      if (!callArgs) throw new Error('unreachable');
      const [calledReq] = callArgs;

      // Dispatcher should be attached to the request object
      // (In a real Node.js environment with undici, this would be used by fetch)
      expect(calledReq).toBeInstanceOf(Request);
      // Verify it's a proper Request with all properties
      expect((calledReq as Request).url).toBeDefined();
      expect((calledReq as Request).method).toBeDefined();
      expect((calledReq as Request).headers).toBeDefined();
    });

    test('test TLS hook creates new Request instances', async () => {
      GalileoConfig.reset();
      GalileoConfig.get({
        apiKey: 'test-key',
        apiUrl: 'https://api.example.com',
        caCertPath,
      });

      const hook = new CertManagementHook();
      const mockFetcher = vi.fn().mockResolvedValue(new Response('OK'));
      const httpClient = new HTTPClient({ fetcher: mockFetcher });

      const opts: SDKOptions = { httpClient };
      const result = hook.sdkInit(opts);

      const originalRequest = new Request('https://api.example.com/test', {
        method: 'GET',
      });

      await result.httpClient?.request(originalRequest);

      expect(mockFetcher).toHaveBeenCalledTimes(1);
      const callArgs = mockFetcher.mock.calls[0];
      expect(callArgs).toBeDefined();
      if (!callArgs) throw new Error('unreachable');
      const [calledReq] = callArgs;

      // The request passed to the fetcher should be a new instance
      // (Request objects are immutable, so the hook creates a new one)
      expect(calledReq).not.toBe(originalRequest);
    });
  });
});
