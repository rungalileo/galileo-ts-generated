import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { describe, test, expect, beforeAll, afterAll, afterEach, beforeEach } from 'vitest';
import { GalileoConfig } from '../../lib/galileo-config.js';
import { BaseEntity } from '../../entities/base-entity.js';
import { GalileoGenerated } from '../../sdk/sdk.js';

const TEST_HOST = 'http://localhost:8088';
const MOCK_API_KEY = 'test-api-key-for-env-auth';
const MOCK_ACCESS_TOKEN = 'mock-access-token-from-login';
const MOCK_PROJECT_ID = 'proj-00000000-0000-0000-0000-000000000001';

/**
 * Captured request data from MSW handlers, used to assert that env vars
 * propagate correctly through the auth and hook chain.
 */
let capturedLoginBody: { api_key?: string } | null = null;
let capturedTraceHeaders: Record<string, string> = {};
let capturedTraceBody: Record<string, unknown> | null = null;

const loginApiKeyHandler = http.post(
  `${TEST_HOST}/login/api_key`,
  async ({ request }) => {
    capturedLoginBody = (await request.json()) as { api_key?: string };
    if (capturedLoginBody?.['api_key'] !== MOCK_API_KEY) {
      return HttpResponse.json(
        { detail: 'Invalid API key' },
        { status: 401 },
      );
    }
    return HttpResponse.json({
      access_token: MOCK_ACCESS_TOKEN,
      token_type: 'bearer',
    });
  },
);

const traceIngestionHandler = http.post(
  `${TEST_HOST}/projects/${MOCK_PROJECT_ID}/traces`,
  async ({ request }) => {
    capturedTraceHeaders = Object.fromEntries(request.headers.entries());
    capturedTraceBody = (await request.json()) as Record<string, unknown>;
    return HttpResponse.json({
      project_id: MOCK_PROJECT_ID,
      project_name: 'test-project',
      records_count: 1,
      traces_count: 1,
    });
  },
);

const server = setupServer(loginApiKeyHandler, traceIngestionHandler);

const ENV_KEYS = [
  'GALILEO_API_KEY',
  'GALILEO_CONSOLE_URL',
  'GALILEO_API_URL',
  'GALILEO_USERNAME',
  'GALILEO_PASSWORD',
  'GALILEO_PROJECT',
  'GALILEO_LOG_STREAM',
] as const;

function clearGalileoEnv(): void {
  for (const key of ENV_KEYS) {
    delete process.env[key];
  }
}

describe('env vars → auth → trace ingestion', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
  afterAll(() => server.close());

  beforeEach(() => {
    capturedLoginBody = null;
    capturedTraceHeaders = {};
    capturedTraceBody = null;
    GalileoConfig.reset();
    BaseEntity.resetForTesting();
  });

  afterEach(() => {
    server.resetHandlers();
    clearGalileoEnv();
  });

  test('test GALILEO_API_KEY from env reaches the login endpoint', async () => {
    process.env['GALILEO_CONSOLE_URL'] = TEST_HOST;
    process.env['GALILEO_API_KEY'] = MOCK_API_KEY;

    const token = await BaseEntity.getToken();

    expect(capturedLoginBody).not.toBeNull();
    expect(capturedLoginBody?.['api_key']).toBe(MOCK_API_KEY);
    expect(token).toBe(MOCK_ACCESS_TOKEN);
  });

  test('test auth token is injected into trace ingestion request via hook', async () => {
    process.env['GALILEO_CONSOLE_URL'] = TEST_HOST;
    process.env['GALILEO_API_KEY'] = MOCK_API_KEY;

    // Authenticate — populates BaseEntity.token via the hook chain
    await BaseEntity.getToken();

    // Create a fresh SDK client that reads from GalileoConfig (which got TEST_HOST)
    const client = new GalileoGenerated({ serverURL: TEST_HOST });

    // Call trace ingestion through the SDK
    await client.trace.logTracesProjectsProjectIdTracesPost(
      {}, // security — empty: let the TokenManagementHook inject the Bearer token
      {
        projectId: MOCK_PROJECT_ID,
        body: {
          traces: [{ input: 'hello', output: 'world', name: 'test-trace' }],
          logStreamId: 'ls-test',
        },
      },
    );

    // The TokenManagementHook should have added the Bearer token
    expect(capturedTraceHeaders['authorization']).toBe(
      `Bearer ${MOCK_ACCESS_TOKEN}`,
    );
  });

  test('test trace ingestion receives correct payload', async () => {
    process.env['GALILEO_CONSOLE_URL'] = TEST_HOST;
    process.env['GALILEO_API_KEY'] = MOCK_API_KEY;

    await BaseEntity.getToken();

    const client = new GalileoGenerated({ serverURL: TEST_HOST });

    await client.trace.logTracesProjectsProjectIdTracesPost(
      {},
      {
        projectId: MOCK_PROJECT_ID,
        body: {
          traces: [{ input: 'test-input', output: 'test-output', name: 'trace-1' }],
          logStreamId: 'ls-abc',
          isComplete: true,
        },
      },
    );

    expect(capturedTraceBody).not.toBeNull();
    expect(capturedTraceBody?.['log_stream_id']).toBe('ls-abc');
    expect(capturedTraceBody?.['is_complete']).toBe(true);

    const traces = capturedTraceBody?.['traces'] as Array<Record<string, unknown>>;
    expect(traces).toHaveLength(1);
    expect(traces[0]?.['input']).toBe('test-input');
    expect(traces[0]?.['output']).toBe('test-output');
    expect(traces[0]?.['name']).toBe('trace-1');
  });

  test('test SDK identifier header is present on trace ingestion', async () => {
    process.env['GALILEO_CONSOLE_URL'] = TEST_HOST;
    process.env['GALILEO_API_KEY'] = MOCK_API_KEY;

    await BaseEntity.getToken();

    const client = new GalileoGenerated({ serverURL: TEST_HOST });

    await client.trace.logTracesProjectsProjectIdTracesPost(
      {},
      {
        projectId: MOCK_PROJECT_ID,
        body: {
          traces: [{ input: 'x', output: 'y', name: 'n' }],
          logStreamId: 'ls-test',
        },
      },
    );

    expect(capturedTraceHeaders['x-galileo-sdk']).toMatch(
      /^galileo-generated\/\d+\.\d+\.\d+$/,
    );
  });

  test('test wrong GALILEO_API_KEY causes authentication error', async () => {
    process.env['GALILEO_CONSOLE_URL'] = TEST_HOST;
    process.env['GALILEO_API_KEY'] = 'wrong-api-key';

    await expect(BaseEntity.getToken()).rejects.toThrow();

    // Login was attempted with the wrong key
    expect(capturedLoginBody?.['api_key']).toBe('wrong-api-key');
    // No token was cached — trace requests would have no auth header
    BaseEntity.resetForTesting();
    const token = await BaseEntity.getToken().catch(() => null);
    expect(token).toBeNull();
  });

  test('test no credentials in env means no auth header on request', async () => {
    process.env['GALILEO_CONSOLE_URL'] = TEST_HOST;
    // No GALILEO_API_KEY, no USERNAME/PASSWORD

    const token = await BaseEntity.getToken();
    expect(token).toBeNull();

    const client = new GalileoGenerated({ serverURL: TEST_HOST });

    await client.trace.logTracesProjectsProjectIdTracesPost(
      {},
      {
        projectId: MOCK_PROJECT_ID,
        body: {
          traces: [{ input: 'a', output: 'b', name: 'c' }],
          logStreamId: 'ls-test',
        },
      },
    );

    // TokenManagementHook skips injection when token is null
    expect(capturedTraceHeaders['authorization']).toBeUndefined();
  });

  test('test full chain: env var set after config reset is picked up', async () => {
    // Simulate late env loading (e.g. dotenv.config() called after first import)
    const configBefore = GalileoConfig.get();
    expect(configBefore.apiKey).toBeUndefined();

    // Now "load" the env vars (as dotenv would)
    process.env['GALILEO_CONSOLE_URL'] = TEST_HOST;
    process.env['GALILEO_API_KEY'] = MOCK_API_KEY;

    // GalileoConfig.get() re-reads env when instance has no external config
    // (isMissingExternalConfig returns true → singleton is rebuilt)
    const configAfter = GalileoConfig.get();
    expect(configAfter.apiKey).toBe(MOCK_API_KEY);

    // Auth picks up the new config
    const token = await BaseEntity.getToken();
    expect(token).toBe(MOCK_ACCESS_TOKEN);

    // And the token flows through to the request
    const client = new GalileoGenerated({ serverURL: TEST_HOST });
    await client.trace.logTracesProjectsProjectIdTracesPost(
      {},
      {
        projectId: MOCK_PROJECT_ID,
        body: {
          traces: [{ input: 'late', output: 'load', name: 'dotenv-test' }],
          logStreamId: 'ls-test',
        },
      },
    );

    expect(capturedTraceHeaders['authorization']).toBe(
      `Bearer ${MOCK_ACCESS_TOKEN}`,
    );
  });
});
