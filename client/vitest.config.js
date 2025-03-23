import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        statements: 5,
        branches: 30,
        functions: 11,
        lines: 5,
      },
      exclude: [
        'node_modules',
        '**/*.config.*',
        '**/*.test.*',
        '**/src/main.js',
        '**/src/App.vue',
        '**/src/plugins',
        '**/src/router',
      ],
    },
  },
})