import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options 입력 // 자세한 내용 : https://www.npmjs.com/package/unplugin-vue-router */
      routesFolder: ['src/pages'], // Folder(s) to scan for vue components and generate routes. Can be a string, or an object, or an array of those.
      extensions: ['.vue'], // allowed extensions to be considered as routes
      exclude: ['**/*Popup*.vue', '**/*Tab*.vue', '**/*Ex*.vue'], // Popup, tab, Ex file에 대해서 auto routing 예외처리
    }),
    vue(),
    vuetify({ autoImport: true }), // autoImport: true, styles: 'none' // 자세한 내용 : https://www.npmjs.com/package/vite-plugin-vuetify
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
