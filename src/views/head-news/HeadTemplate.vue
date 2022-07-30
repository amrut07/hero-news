<!--The Headline news and article are part of same news, that means they both need to be in sync and in same place. If we separate head-news layout and head-article layout then we could place them in appropriate style -->
<template>
  <head-news :currArticle="getCurrentArticle" />
  <head-article :currArticle="getCurrentArticle" />
</template>

<script>
import { mapState } from "vuex";
import HeadNews from "./HeadNews.vue";
import HeadArticle from "./HeadArticle.vue";
export default {
  name: "HeadTemplate",
  components: {
    HeadNews,
    HeadArticle,
  },
  computed: {
    ...mapState({
      article: (state) => state.heroNews.article,
    }),
    getCurrentArticle() {
      const params = this.$route.meta;
      const data = this.article.find(
        (art) => art?.category?.[0].landing_page === params.field_id
      );
      return data;
      //return this.article[0];
    },
  },
};
</script>
