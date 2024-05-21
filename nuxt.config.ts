// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  
  nitro: {
    
    baseURL: "/",
    ignore: ['/lib/js/*.map', '**/*.map'], // Add other source map patterns if needed
  },
  app:{
    baseURL: '/',
    head: {
      
      htmlAttrs: {
        dir: 'rtl',
        lang: 'ar',
      },
    },
  },
  
  electron: {
    build: [
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/main.ts',
      },
      {
        entry: 'electron/preload.ts',
        onstart(options) {
          // Notify the renderer process to reload the page when the preload-script is completely loaded
          // Instead of restarting the entire electron app
          options.reload()
        }
      },
    ],
  },
  plugins: ['~/plugins/directives/move-next-on-enter.js'],
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', 'nuxt-electron'],
  i18n: {
    vueI18n: './nuxt-i18n.js', // custom path example
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  router: {
    options: {
      hashMode: true // فعله في حالة Desktop
    }
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
    app: {
      baseURL: '/',
    },
    public: {
      apiBase: process.env.BASE_URL
    }

  },
  css: ["@/assets/scss/global.scss"],
  devtools: { enabled: true },
  ssr: false,
  experimental: {
    appManifest: false,
  },
})
