import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import UnocssVitePlugin from 'unocss/vite'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    UnocssVitePlugin(),
    vue({ template: { transformAssetUrls } }),
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),
    quasar(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: '../web',
    emptyOutDir: true,
  },
  server: {
    port: 37161,
  },
})
