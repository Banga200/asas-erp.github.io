// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
   
  },
  nitro: {
    ignore: ['/lib/js/*.map', '**/*.map'], // Add other source map patterns if needed
  },
  app:{
    
    head: {
      
      htmlAttrs: {
        dir: 'rtl',
        lang: 'ar',
      },
    },
  },
  plugins: ['~/plugins/directives/move-next-on-enter.js'],
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './nuxt-i18n.js', // custom path example
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;'
        }
      }
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL
    }
  },
  css: ["@/assets/scss/global.scss"],
  devtools: { enabled: true },
  ssr: true
})
