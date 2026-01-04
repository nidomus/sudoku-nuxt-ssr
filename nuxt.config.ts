// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    'bulma'
  ],

  vite:{
    server: {
      allowedHosts: ['nuxt.herbertdev.com.br']
    }
  },

  modules: ['@nuxt/icon', '@nuxt/fonts']
})