import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'pdfjs-dist': path.resolve(__dirname, 'node_modules/pdfjs-dist')
    }
  },
  optimizeDeps: {
    exclude: [
      'pdfjs-dist/build/pdf.worker.mjs',
      'pdfjs-dist/build/pdf.worker.mjs?url'
    ]
  }
})
