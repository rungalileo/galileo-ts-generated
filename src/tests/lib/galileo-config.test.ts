import { describe, test, expect, afterEach, vi } from 'vitest';
import { GalileoConfig } from '../../lib/galileo-config.js';

const ENV_KEYS = [
  'GALILEO_API_KEY',
  'GALILEO_USERNAME',
  'GALILEO_PASSWORD',
  'GALILEO_SSO_ID_TOKEN',
  'GALILEO_SSO_PROVIDER',
  'GALILEO_API_URL',
  'GALILEO_CONSOLE_URL',
  'GALILEO_PROJECT',
  'GALILEO_PROJECT_NAME',
  'GALILEO_LOG_STREAM',
  'GALILEO_LOG_STREAM_NAME',
  'GALILEO_CA_CERT_PATH',
  'GALILEO_CA_CERT_CONTENT',
  'GALILEO_CLIENT_CERT_PATH',
  'GALILEO_CLIENT_KEY_PATH',
  'GALILEO_REJECT_UNAUTHORIZED',
] as const;

function clearGalileoEnv(): void {
  for (const key of ENV_KEYS) {
    delete process.env[key];
  }
}

describe('GalileoConfig', () => {
  afterEach(() => {
    clearGalileoEnv();
    GalileoConfig.reset();
  });

  test('test get config with overrides', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      apiKey: 'test-key',
      apiUrl: 'https://api.example.com',
    });
    expect(config.snapshot.apiKey).toBe('test-key');
    expect(config.snapshot.apiUrl).toBe('https://api.example.com');
    expect(config.getApiUrl()).toBe('https://api.example.com');
  });

  test('test get config with empty overrides after reset', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({});
    expect(config).toBeDefined();
    expect(config.snapshot.apiUrl).toBe('https://api.galileo.ai');
    expect(config.consoleUrl).toBe('https://console.galileo.ai');
  });

  test('test merge behavior overrides take precedence', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      apiKey: 'first-key',
      apiUrl: 'https://first.example.com',
    });
    expect(config.snapshot.apiKey).toBe('first-key');
    GalileoConfig.reset();
    const config2 = GalileoConfig.get({
      apiKey: 'second-key',
      username: 'user',
    });
    expect(config2.snapshot.apiKey).toBe('second-key');
    expect(config2.snapshot.login?.username).toBe('user');
  });

  test('test getApiUrl returns explicit apiUrl', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      apiUrl: 'https://custom.api.com',
    });
    expect(config.getApiUrl()).toBe('https://custom.api.com');
    expect(config.getApiUrl('gen_ai')).toBe('https://custom.api.com');
  });

  test('test getApiUrl resolves app.galileo.ai to api.galileo.ai', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      consoleUrl: 'https://app.galileo.ai',
    });
    expect(config.getApiUrl()).toBe('https://api.galileo.ai');
  });

  test('test getApiUrl resolves console to api', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      consoleUrl: 'https://console.example.com',
    });
    expect(config.getApiUrl()).toBe('https://api.example.com');
  });

  test('test getApiUrl removes trailing slash', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      consoleUrl: 'https://app.galileo.ai/',
    });
    expect(config.getApiUrl()).toBe('https://api.galileo.ai');
  });

  test('test getApiUrl localhost returns http localhost 8088', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      consoleUrl: 'http://localhost:3000',
    });
    expect(config.getApiUrl()).toBe('http://localhost:8088');
  });

  test('test getApiUrl 127.0.0.1 returns http localhost 8088', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      consoleUrl: 'http://127.0.0.1:3000',
    });
    expect(config.getApiUrl()).toBe('http://localhost:8088');
  });

  test('test getApiUrl gen_ai default when no apiUrl no consoleUrl override', () => {
    GalileoConfig.reset();
    clearGalileoEnv();
    const config = GalileoConfig.get({});
    expect(config.getApiUrl('gen_ai')).toBe('https://api.galileo.ai');
  });

  test('test getAuthCredentials apiKey only', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      apiKey: 'key-only',
      apiUrl: 'https://api.example.com',
    });
    const creds = config.getAuthCredentials();
    expect(creds.apiKey).toBe('key-only');
    expect(creds.username).toBeUndefined();
    expect(creds.password).toBeUndefined();
    expect(creds.ssoIdToken).toBeUndefined();
    expect(creds.ssoProvider).toBeUndefined();
  });

  test('test getAuthCredentials username password only', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      username: 'u',
      password: 'p',
      apiUrl: 'https://api.example.com',
    });
    const creds = config.getAuthCredentials();
    expect(creds.username).toBe('u');
    expect(creds.password).toBe('p');
    expect(creds.apiKey).toBeUndefined();
  });

  test('test getAuthCredentials sso only', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      ssoIdToken: 'id-token',
      ssoProvider: 'okta',
      apiUrl: 'https://api.example.com',
    });
    const creds = config.getAuthCredentials();
    expect(creds.ssoIdToken).toBe('id-token');
    expect(creds.ssoProvider).toBe('okta');
  });

  test('test getAuthCredentials mixed', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      apiKey: 'k',
      username: 'u',
      password: 'p',
      apiUrl: 'https://api.example.com',
    });
    const creds = config.getAuthCredentials();
    expect(creds.apiKey).toBe('k');
    expect(creds.username).toBe('u');
    expect(creds.password).toBe('p');
  });

  test('test snapshot has login when username password set', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      username: 'snap-user',
      password: 'snap-pass',
      apiUrl: 'https://api.example.com',
    });
    expect(config.snapshot.login).toEqual({
      username: 'snap-user',
      password: 'snap-pass',
    });
    expect(config.snapshot.apiKey).toBeUndefined();
  });

  test('test snapshot has sso when sso credentials set', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      ssoIdToken: 'sso-id',
      ssoProvider: 'google',
      apiUrl: 'https://api.example.com',
    });
    expect(config.snapshot.sso).toEqual({
      idToken: 'sso-id',
      provider: 'google',
    });
  });

  test('test snapshot apiKey and apiUrl resolved', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      apiKey: 'ak',
      apiUrl: 'https://api.resolved.com',
    });
    expect(config.snapshot.apiKey).toBe('ak');
    expect(config.snapshot.apiUrl).toBe('https://api.resolved.com');
  });

  test('test reset then get returns fresh instance', () => {
    GalileoConfig.reset();
    GalileoConfig.get({
      apiKey: 'first',
      apiUrl: 'https://first.com',
    });
    GalileoConfig.reset();
    const config2 = GalileoConfig.get({
      apiKey: 'second',
      apiUrl: 'https://second.com',
    });
    expect(config2.snapshot.apiKey).toBe('second');
    expect(config2.snapshot.apiUrl).toBe('https://second.com');
  });

  test('test logConfig does not throw', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      apiKey: 'log-key',
      apiUrl: 'https://api.example.com',
    });
    const spy = vi.spyOn(console, 'info').mockImplementation(() => {});
    expect(() => config.logConfig()).not.toThrow();
    spy.mockRestore();
  });

  test('test getCertConfig returns cert fields from overrides', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      apiKey: 'key',
      apiUrl: 'https://api.example.com',
      caCertPath: '/path/to/ca.pem',
      caCertContent: '-----BEGIN CERTIFICATE-----',
      clientCertPath: '/path/to/client.pem',
      clientKeyPath: '/path/to/key.pem',
      rejectUnauthorized: false,
    });
    const cert = config.getCertConfig();
    expect(cert).not.toBeNull();
    if (!cert) throw new Error("unreachable");
    expect(cert.caCertPath).toBe('/path/to/ca.pem');
    expect(cert.caCertContent).toBe('-----BEGIN CERTIFICATE-----');
    expect(cert.clientCertPath).toBe('/path/to/client.pem');
    expect(cert.clientKeyPath).toBe('/path/to/key.pem');
    expect(cert.rejectUnauthorized).toBe(false);
  });

  test('test getCertConfig empty when no cert set', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      apiKey: 'key',
      apiUrl: 'https://api.example.com',
    });
    const cert = config.getCertConfig();
    expect(cert).toBeNull();
  });

  test('test snapshot includes cert when set', () => {
    GalileoConfig.reset();
    const config = GalileoConfig.get({
      apiKey: 'key',
      apiUrl: 'https://api.example.com',
      caCertPath: '/ca.pem',
      rejectUnauthorized: true,
    });
    expect(config.snapshot.cert).toEqual({
      caCertPath: '/ca.pem',
      rejectUnauthorized: true,
    });
  });

  test('test cert from env', () => {
    GalileoConfig.reset();
    process.env['GALILEO_API_KEY'] = 'env-key';
    process.env['GALILEO_CA_CERT_PATH'] = '/env/ca.pem';
    process.env['GALILEO_REJECT_UNAUTHORIZED'] = 'false';
    const config = GalileoConfig.get({});
    const cert = config.getCertConfig();
    expect(cert).not.toBeNull();
    if (!cert) throw new Error("unreachable");
    expect(cert.caCertPath).toBe('/env/ca.pem');
    expect(cert.rejectUnauthorized).toBe(false);
  });

  test('test empty GALILEO_REJECT_UNAUTHORIZED treated as undefined', () => {
    GalileoConfig.reset();
    process.env['GALILEO_API_KEY'] = 'env-key';
    process.env['GALILEO_REJECT_UNAUTHORIZED'] = '';
    const config = GalileoConfig.get({});
    const cert = config.getCertConfig();
    expect(cert).toBeNull();
  });

  test('test empty NODE_TLS_REJECT_UNAUTHORIZED treated as undefined', () => {
    GalileoConfig.reset();
    process.env['GALILEO_API_KEY'] = 'env-key';
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '';
    const config = GalileoConfig.get({});
    const cert = config.getCertConfig();
    expect(cert).toBeNull();
  });

  test('test explicit rejectUnauthorized values', () => {
    GalileoConfig.reset();
    process.env['GALILEO_API_KEY'] = 'env-key';
    
    // Test "true" string
    process.env['GALILEO_REJECT_UNAUTHORIZED'] = 'true';
    let config = GalileoConfig.get({});
    let cert = config.getCertConfig();
    expect(cert?.rejectUnauthorized).toBe(true);
    
    GalileoConfig.reset();
    process.env['GALILEO_REJECT_UNAUTHORIZED'] = '1';
    config = GalileoConfig.get({});
    cert = config.getCertConfig();
    expect(cert?.rejectUnauthorized).toBe(true);
    
    GalileoConfig.reset();
    process.env['GALILEO_REJECT_UNAUTHORIZED'] = 'false';
    config = GalileoConfig.get({});
    cert = config.getCertConfig();
    expect(cert?.rejectUnauthorized).toBe(false);
    
    GalileoConfig.reset();
    process.env['GALILEO_REJECT_UNAUTHORIZED'] = '0';
    config = GalileoConfig.get({});
    cert = config.getCertConfig();
    expect(cert?.rejectUnauthorized).toBe(false);
  });
});
