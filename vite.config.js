import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/project1repo/',  // <-- match your GitHub repo name if using gh-pages
  plugins: [react()],
})
