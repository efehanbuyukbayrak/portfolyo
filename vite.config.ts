import { defineConfig } from 'vite'

export default defineConfig({
  base: '/portfolyo/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})