<template>
  <div v-for="(news, index) of paragraphs" :key="index">
    <!--Difficult section of the news 
    I have to separate out the sections as 
    - List section
    - Paragraph section
    - Consider adding break line tag after each paragraph
    - Adding the "Read Also" section in between bit tricky, I might go with some thing different here
    --->
    <br />
    <div v-if="index % 5 || index === 0" class="px-8" v-html="news"></div>
    <hero-read
      v-else-if="showHeroRead(index)"
      :readNews="components[getIndex(index)]"
      :paragraph="news"
    ></hero-read>
  </div>
</template>
<script>
import HeroRead from "@/components/HeroRead.vue";
export default {
  components: { HeroRead },
  name: "hero-article-body",

  props: {
    article: {},
    components: {},
  },
  computed: {
    // creating array of paragraps by spliting the articles content through string split and considering every article is starting with <p> tag
    // split removes the <p> tag that's why need to add the <p> tag to the string element.
    paragraphs() {
      const list = this.article.split("<p>");
      list.forEach((item) => `<p>${item}`);
      return list;
    },
  },
  methods: {
    // Returning the index of hero read article
    getIndex(index) {
      return index / 5 - 1;
    },

    // checking whether to show hero read or not
    showHeroRead(index) {
      return index / 5 <= this.components.length || false;
    },
  },
};
</script>
