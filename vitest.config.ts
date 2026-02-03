/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/tests/**/*.test.ts'],
    globals: false,
  },
  resolve: {
    alias: [
      { find: /^(\\.{1,2}\/.*)\.js$/, replacement: '$1' },
    ],
  },
});
