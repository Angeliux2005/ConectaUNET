import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'lottie-player'
        }
      }
    }),
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})
