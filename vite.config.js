import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.js',
  },
  base: '/front_6th_chapter2-1/',
  build: {
    rollupOptions: {
      input: 'index.advanced.html',
    },
  },
});
