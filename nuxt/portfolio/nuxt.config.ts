// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-icon', 'nuxt-simple-sitemap'],

  css: ['~/assets/css/tailwind.css'],

  content: {
    highlight: {
      theme: 'dracula',
      preload: ['python', 'javascript', 'css', 'html', 'bash', 'vue'],
    },
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://rafamed.dev',
    },
  },
});
