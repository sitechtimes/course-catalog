// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  plugins: [`~/plugins/data.ts`],
  css: ["~/assets/css/base.css"],
  app: {
    head: {
      title: "Course Catalog",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
