import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/log-stica-b2b-site/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
