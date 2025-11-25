import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Important for repo Pages served at: https://<user>.github.io/Portfolio/
  base: '/Portfolio/',
  plugins: [react()],
  build: {
    outDir: 'docs',      // emit production build to docs/ so Pages can serve from main/docs
    emptyOutDir: true,
  },
})
