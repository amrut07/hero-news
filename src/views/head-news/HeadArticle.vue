<template>
  <v-container class="mb-7">
    <v-row>
      <v-col
        cols="6"
        style="min-width: 100px; max-width: 100%"
        class="flex-grow-1 flex-shrink-0"
      >
        <hero-article-body
          :article="currArticle.content[0].body"
          :components="currArticle.components"
        ></hero-article-body>
        <hero-topics :topics="currArticle.topics"></hero-topics>
        <v-divider class="pb-8"> </v-divider>
        <v-row>
          <v-col
            cols="1"
            style="min-width: 100px; max-width: 400px"
            class="flex-grow-1 flex-shrink-0"
            ><hero-subscribe
          /></v-col>
          <v-col cols="2" class="flex-grow-1 flex-shrink-0">
            <hero-telegram
          /></v-col>
        </v-row>
      </v-col>
      <!-- <v-divider vertical></v-divider> -->
      <v-col cols="3" class="flex-grow-1 flex-shrink-0">
        <h2 class="pb-3">Popular News</h2>
        <v-card v-for="item of popularNews" :key="item.id">
          <hero-popular :popularNews="item"> </hero-popular>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import HeroTelegram from "@/components/HeroTelegram.vue";
import HeroPopular from "@/components/HeroPopular.vue";
import HeroSubscribe from "@/components/HeroSubscribe.vue";
import HeroTopics from "@/components/HeroTopics.vue";
import HeroArticleBody from "./HeroArticleBody.vue";
export default {
  name: "head-news",
  components: {
    HeroTelegram,
    HeroPopular,
    HeroSubscribe,
    HeroTopics,
    HeroArticleBody,
  },
  props: {
    currArticle: {},
  },
  mounted() {
    console.log("content body", this.contentBody);
  },
  computed: {
    ...mapState({
      article: (state) => state.heroNews.article,
      popularNews: (state) => state.heroNews.popularNews.items,
    }),
  },
  bylineInformation() {
    console.log(this.currArticle.byline_detail[0]);
    return this.currArticle.byline_detail[0];
  },
};
</script>
<style>
.v-card {
  box-shadow: none;
}
.wrap-text {
  word-wrap: break-word;
  white-space: normal;
}
</style>
