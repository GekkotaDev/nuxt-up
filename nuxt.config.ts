// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@unocss/nuxt",
    "@vueuse/nuxt",
  ],
});
