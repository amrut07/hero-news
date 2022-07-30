<template>
  <v-container>
    <v-card class="mx-auto">
      <h1 class="py-12">{{ currArticle.title }}</h1>
      <v-img
        class="align-end text-white"
        height="400"
        :src="currArticle.image.media_image"
        cover
      >
        <v-card-title>{{
          currArticle.image.image_byline_and_source.byline[0]
        }}</v-card-title>
      </v-img>
      <v-card-subtitle class="pt-4 px-0 wrap-text">
        <div v-html="currArticle.image.description"></div>
      </v-card-subtitle>
      <!-- this part will for the byline information and created and updated date -->
      <v-card-text class="d-flex mb-6 px-0">
        <byline-info class="mr-auto" :data="currArticle.byline_detail" />
        <published-date
          :publishdate="currArticle.publishdate"
          :lastupdated="currArticle.lastupdated"
        />
      </v-card-text>
    </v-card>
    <v-divider horizontal class="md-5"></v-divider>
  </v-container>
</template>

<script>
import BylineInfo from "@/components/BylineInfo.vue";
import { mapState } from "vuex";
import PublishedDate from "@/components/PublishedDate.vue";
export default {
  name: "head-news",
  components: {
    BylineInfo,
    PublishedDate,
  },
  props: {
    currArticle: {},
  },
  computed: {
    ...mapState({
      article: (state) => state.heroNews.article,
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
