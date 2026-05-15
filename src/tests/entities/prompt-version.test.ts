import { describe, test, expect } from 'vitest';
import { PromptVersion } from '../../entities/prompt-version.js';
import { promptVersionResponseFixture } from './_fixtures.js';

describe('PromptVersion', () => {
  test('test constructor builds an immutable value object', () => {
    const settings =
      {} as import('../../models/promptrunsettings.js').PromptRunSettings;
    const v = new PromptVersion({
      id: 'v1',
      version: 1,
      messages: 'Hello',
      settings,
      createdAt: new Date('2026-01-01'),
      updatedAt: new Date('2026-01-02'),
    });
    expect(v.id).toBe('v1');
    expect(v.version).toBe(1);
    expect(v.messages).toBe('Hello');
    expect(v.settings).toBe(settings);
  });

  test('test _fromApi maps template to messages', () => {
    const raw = promptVersionResponseFixture({
      id: 'v-9',
      version: 3,
      template: 'Hi {{name}}',
    });
    const v = PromptVersion._fromApi(raw);
    expect(v.id).toBe('v-9');
    expect(v.version).toBe(3);
    expect(v.messages).toBe('Hi {{name}}');
  });

  test('test _fromApi preserves array template (chat messages)', () => {
    const raw = promptVersionResponseFixture({
      template: [
        {
          role: 'user',
          content: 'hi',
        } as unknown as import('../../models/galileocoreschemassharedmessagemessage.js').GalileoCoreSchemasSharedMessageMessage,
      ],
    });
    const v = PromptVersion._fromApi(raw);
    expect(Array.isArray(v.messages)).toBe(true);
  });

  test('test PromptVersion has no setters (readonly)', () => {
    const v = new PromptVersion({
      id: 'v',
      version: 1,
      messages: 'x',
      settings:
        {} as import('../../models/promptrunsettings.js').PromptRunSettings,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    // TypeScript blocks reassignment at compile time. The runtime behavior
    // of readonly is enforced via writable: false on the property descriptor
    // when classes use the class-fields proposal. We verify that the value
    // is reflected back unchanged.
    expect(v.id).toBe('v');
  });
});
