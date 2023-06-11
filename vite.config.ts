import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/todos-react/',
  plugins: [
    svgr(),
    react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      src: "/src"
    }
  },
  build: {
    outDir: path.join(__dirname, "todos-react"),
  },
})
