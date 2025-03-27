import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    cssCodeSplit: true
  },
  base: '/',
  //ALso host:true exposes in public addresses
  preview: {
    host: true,
    port: 8080
  }
})
