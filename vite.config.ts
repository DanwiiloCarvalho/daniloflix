import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/daniloflix/',
  server: {
    host: "127.0.0.1"
  }
})

// export default defineConfig({
//   plugins: [react()],
//   base: '/',
//   preview: {
//     port: 4173,
//     host: true
//   }
// })
