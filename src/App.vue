<!--
This is the entry point of News app, the first page to be displayed on web browser,
It contains Header, Main content, Footer. 
Here, We Load the default path page and from there start navigating to application
Assumption is user opened the link and retrieved the data for the particular site.
Based on the route opening the page.
class- px-10: adds the padding on left and right side that creates similar padding to header througout the application.
      -->
<template>
  <v-app>
    <header-menu v-if="logedIn" />
    <v-main class="px-10">
      <router-view />
    </v-main>
    <footer><hero-footer /></footer>
  </v-app>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import HeaderMenu from "@/views/HeaderMenu.vue";
import HeroFooter from "@/components/HeroFooter.vue";
export default {
  name: "App",
  components: {
    HeaderMenu,
    HeroFooter,
  },
  computed: {
    ...mapState({ logedIn: (state) => state.user }),
  },
  methods: {
    ...mapActions({
      getPopularNews: "getPopularNews",
      getArticle: "getArticle",
    }),
    ...mapMutations({
      setUser: "setUser",
    }),
  },
  async created() {
    await this.getPopularNews();
  },
};
</script>
<style>
body {
  background-color: #9c27b0;
  /* background-color: #212121; */
}
/* .v-main {
  background-color: black;
  color: white;
} */
</style>
