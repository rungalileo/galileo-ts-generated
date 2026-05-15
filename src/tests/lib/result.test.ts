import { describe, test, expect } from 'vitest';
import { safeExecute } from '../../lib/result.js';

describe('safeExecute', () => {
  test('test safeExecute returns OK on success', async () => {
    const result = await safeExecute(async () => 42);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBe(42);
    }
  });

  test('test safeExecute returns ERR on throw', async () => {
    const result = await safeExecute(async () => {
      throw new Error('fail');
    });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toBeInstanceOf(Error);
      expect(result.error.message).toBe('fail');
    }
  });

  test('test safeExecute wraps non-Error throw in Error', async () => {
    const result = await safeExecute(async () => {
      throw 'string-error';
    });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toBeInstanceOf(Error);
      expect(result.error.message).toBe('string-error');
    }
  });
});
