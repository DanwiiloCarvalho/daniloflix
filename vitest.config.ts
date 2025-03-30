/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest-setup.ts',
    include: ['src/**/*.spec.tsx', 'src/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
    }
  },
})