import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
  base: '/',
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: 'src/setupTests.ts',
    includeSource: ['src/components/**/*.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportOnFailure: true,
      include: ['src/components/**/*.{ts,tsx}'],
      exclude: [
        'node_modules/',
        'src/components/index.ts',
        'src/setupTests.ts',
        'src/components/**/*.stories.{ts,tsx}'
      ],
    },
  }
})
