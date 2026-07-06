import {resolve} from 'node:path';
import {defineConfig} from 'vite';

export default defineConfig({
  base: './',
  publicDir: './public',
  server: {
    open: 'index.html',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, './index.html'),
        examen: resolve(__dirname, './src/exercises/examen/public/buffon.html'),

      },
    },
  },
});
