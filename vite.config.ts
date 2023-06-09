import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nPlugin from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
    }),
  ],
  // server: {
  //   open: true,
  //   proxy: {
  //     '/api': {
  //       // "target": 'https://api101.lapaksemarang.com/',
  //       "target": 'https://api.jansenindonesia.com/',
  //       "changeOrigin" : true,
  //       "secure" : false,
  //       "ws":true,
  //       rewrite: (path) => path.replace(/^\/api/, '') 
  //     },
  //   },
  //   cors: false,
  // }
})
