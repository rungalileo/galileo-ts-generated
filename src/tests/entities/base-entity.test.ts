/// <reference types="jest" />
import { BaseEntity } from '../../entities/base-entity.js';
import { GalileoConfig } from '../../lib/galileo-config.js';
import type { Result } from '../../types/fp.js';

const mockLoginApiKey = jest.fn().mockResolvedValue({ accessToken: 'mock-token' });
const mockLoginEmail = jest.fn().mockResolvedValue({ accessToken: 'mock-token' });

jest.mock('../../index.js', () => ({
  GalileoGenerated: jest.fn().mockImplementation(() => ({
    auth: {
      loginApiKeyLoginApiKeyPost: mockLoginApiKey,
      loginEmailLoginPost: mockLoginEmail,
    },
  })),
  SDKOptions: {},
}));

class TestEntity extends BaseEntity {
  callEnsureNotDeleted(): void {
    this.ensureNotDeleted();
  }
  static async callSafeExecute<T>(
    operation: () => Promise<T>
  ): Promise<Result<T, Error>> {
    return BaseEntity.safeExecute(operation);
  }
}

describe('BaseEntity', () => {
  afterEach(() => {
    jest.clearAllMocks();
    GalileoConfig.reset();
    BaseEntity.resetForTesting();
  });

  describe('getToken', () => {
    test('test getToken with apiKey triggers auth and returns token', async () => {
      GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'test-key' });
      const token = await BaseEntity.getToken();
      expect(token).toBe('mock-token');
      expect(mockLoginApiKey).toHaveBeenCalled();
    });

    test('test getToken returns cached token on second call', async () => {
      GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'test-key' });
      const first = await BaseEntity.getToken();
      const second = await BaseEntity.getToken();
      expect(first).toBe('mock-token');
      expect(second).toBe('mock-token');
      expect(mockLoginApiKey).toHaveBeenCalledTimes(1);
    });

    test('test setToken then getToken returns set value', async () => {
      BaseEntity.setToken('manual-token');
      const token = await BaseEntity.getToken();
      expect(token).toBe('manual-token');
      expect(mockLoginApiKey).not.toHaveBeenCalled();
      expect(mockLoginEmail).not.toHaveBeenCalled();
    });

    test('test getToken with username password triggers email login', async () => {
      GalileoConfig.get({
        apiUrl: 'https://api.example.com',
        username: 'user',
        password: 'pass',
      });
      const token = await BaseEntity.getToken();
      expect(token).toBe('mock-token');
      expect(mockLoginEmail).toHaveBeenCalled();
    });

    test('test getToken with no credentials returns null', async () => {
      GalileoConfig.get({ apiUrl: 'https://api.example.com' });
      const token = await BaseEntity.getToken();
      expect(token).toBeNull();
    });
  });

  describe('setToken', () => {
    test('test setToken then getToken returns set token', async () => {
      BaseEntity.setToken('custom');
      const token = await BaseEntity.getToken();
      expect(token).toBe('custom');
    });
  });

  describe('getCLient', () => {
    test('test getCLient returns same instance on second call', () => {
      GalileoConfig.get({ apiUrl: 'https://api.example.com' });
      const client1 = BaseEntity.getCLient();
      const client2 = BaseEntity.getCLient();
      expect(client1).toBe(client2);
    });

    test('test getCLient uses apiUrl from config', async () => {
      GalileoConfig.get({ apiUrl: 'https://api.example.com', apiKey: 'key' });
      await BaseEntity.getToken();
      expect(mockLoginApiKey).toHaveBeenCalled();
    });
  });

  describe('ensureNotDeleted', () => {
    test('test ensureNotDeleted does not throw when not deleted', () => {
      const entity = new TestEntity();
      expect(() => entity.callEnsureNotDeleted()).not.toThrow();
    });

    test('test ensureNotDeleted throws when deleted', () => {
      const entity = new TestEntity();
      (entity as unknown as { deleted: boolean }).deleted = true;
      expect(() => entity.callEnsureNotDeleted()).toThrow(
        'Cannot perform operation on deleted entity'
      );
    });
  });

  describe('safeExecute', () => {
    test('test safeExecute returns OK on success', async () => {
      const result = await TestEntity.callSafeExecute(async () => 42);
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.value).toBe(42);
      }
    });

    test('test safeExecute returns ERR on throw', async () => {
      const result = await TestEntity.callSafeExecute(async () => {
        throw new Error('fail');
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error).toBeInstanceOf(Error);
        expect(result.error.message).toBe('fail');
      }
    });

    test('test safeExecute wraps non-Error throw in Error', async () => {
      const result = await TestEntity.callSafeExecute(async () => {
        throw 'string-error';
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error).toBeInstanceOf(Error);
        expect(result.error.message).toBe('string-error');
      }
    });
  });
});
