// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  plugins: [`~/plugins/data.ts`],
  css: ["~/assets/css/base.css"],
  app: {
    head: {
      title: "SITHS Course Catalog",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Staten Island Technical High School Course Catalog and Schedule Builder",
        },
      ],
    },
  },
});
