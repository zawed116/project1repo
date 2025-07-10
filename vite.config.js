import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/project1repo/', // 👈 important! Replace with your GitHub repo name exactly
  plugins: [react()],
})
