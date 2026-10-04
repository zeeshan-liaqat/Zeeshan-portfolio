import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset URLs so the build works on GitHub Pages' /<repo>/ sub-path.
  base: './',
})
