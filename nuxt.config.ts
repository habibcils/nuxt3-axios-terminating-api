// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  pages: true,
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      MODE: process.env.MODE,
      MODES: 'HMM',
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
