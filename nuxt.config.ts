import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@formkit/auto-animate/nuxt', "@nuxtjs/i18n", '@nuxt/icon'],
  build: {
    transpile: [/vue-i18n/]
  },
  vite: {
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
      }
    },
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ]
  },
  css: ['animate.css/animate.css','@/plugins/hover.css','aos/dist/aos.css'],  //这里使用的wowjs库里面的css，如果需要animate官方的动画，可自行下载、配置
  plugins: [
      { src: '@/plugins/wow.js', ssr: false },
      { src:'@/plugins/vue-kinesis.js'},'@/plugins/vue-kinesis.js','@/plugins/aos.js'
  ],
  icon: {
    serverBundle: {
      collections: ['uil', 'mdi'] // <!--- 这里
    }
  }
})