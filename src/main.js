import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router/index";
import Store from "./store/index"; // Creating store and importing to link with vue instance

// Loading some fonts which vuetify requires internally to get images and fonts
loadFonts();

const HeroApp = createApp(App);
HeroApp.use(router);
HeroApp.use(Store);
HeroApp.use(vuetify);

// loading the header data for page before the vue app initialization.
// this way we can fetch the data before the app start building the web pages.
Store.dispatch("getHeader");
Store.dispatch("getArticle");
HeroApp.mount("#app");
