import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // React is already in your dependencies, but sometimes needs to be external
        'react',
        'react-dom',
        // Add any other modules that might be causing issues
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'] // Ensure these are optimized
  }
})