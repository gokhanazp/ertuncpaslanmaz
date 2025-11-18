import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path - Netlify için root path
  base: '/',
  // Build ayarları - Build settings
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Chunk size uyarılarını kapat
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000,
    open: true
  }
})

