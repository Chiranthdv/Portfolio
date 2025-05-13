import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 server: {
    host: true,
    port: 10000,
    allowedHosts: ['.onrender.com'], // ✅ Allow all Render subdomains
  },
  preview: {
    host: true,
    port: 10000,
    allowedHosts: ['.onrender.com'], // ✅ Same for preview mode
  },
})
