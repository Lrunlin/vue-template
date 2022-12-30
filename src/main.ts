// import { createApp } from "vue";
import App from "./App.vue";

import "@/style/index.scss";

import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
// createApp(App).use(router).use(createPinia()).use(vueMeta).mount("#app");
import { ViteSSG } from "vite-ssg";

import { setupLayouts } from "virtual:generated-layouts";
import pages from '~pages'
const routes = setupLayouts(pages);

export const createApp = ViteSSG(
  App,
  { routes: routes, base: import.meta.env.BASE_URL },
  ({ app, router, routes, isClient, initialState }) => {
    app.use(router).use(createPinia()).use(createHead());
  }
);
