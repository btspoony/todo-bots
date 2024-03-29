import { defineNuxtConfig } from "nuxt";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // set source dir
  srcDir: "src/",
  // Environment Variables
  runtimeConfig: {},
  // meta
  meta: {
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Global CSS
   */
  css: [
    // 加载第三方 css
  ],
  // ts config
  typescript: {
    shim: false,
  },
  // auto import components
  components: true,
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/tailwindcss-module
    "@nuxtjs/tailwindcss",
  ],
  // build
  build: {
    transpile: ["element-plus"],
  },
  // vite configure
  vite: {
    plugins: [
      // ...
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  nitro: {
    preset: "vercel",
  },
});
