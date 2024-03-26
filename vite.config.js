import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': '/src/styles/css',
      '@assets': '/src/assets',
      '@components': '/src/scripts/components',
      '@pages': '/src/scripts/pages',
      '@globals': '/src/scripts/globals',
      '@data': '/src/scripts/data',
    },
  },
})
