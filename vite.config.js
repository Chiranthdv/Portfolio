import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // ✅ Exposes to 0.0.0.0 (important for Render)
    port: 10000,
  },
  build: {
    outDir: 'dist', // Ensure the build output goes to the 'dist' directory
  },
  preview: {
    host: true,        // ✅ Exposes preview server as well
    port: 10000,
  },
})
