import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'add-redirects',
      writeBundle() {
        const distDir = resolve(__dirname, 'dist');

        // Ensure the dist directory exists
        if (!existsSync(distDir)) {
          mkdirSync(distDir);
        }

        const redirectsFile = resolve(distDir, '_redirects');
        const redirectsContent = '/*    /index.html   200';

        // Write the _redirects file
        writeFileSync(redirectsFile, redirectsContent);
        console.log('Created _redirects file successfully!');
      },
    },
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    cssCodeSplit: true,
  },
  base: '/',
  preview: {
    host: true,
    port: 8080,
  },
});