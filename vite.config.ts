import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // project site：部署在 https://gino5566.github.io/GinoYu/，base 必須跟 repo 名一致
  base: '/GinoYu/',
})
