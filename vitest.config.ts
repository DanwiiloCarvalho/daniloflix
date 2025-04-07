/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest-setup.ts',
    include: ['src/**/*.spec.tsx', 'src/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      exclude: [
        './src/main.tsx',
        './src/Router',
        './cypress',
        './*.config.ts',
        '.eslintrc.cjs',
        './src/vite-env.d.ts',
      ]
    },
    env: {
      VITE_IMAGE: `https://image.tmdb.org/t/p/original`,
    },
  },
})