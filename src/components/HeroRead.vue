<template>
  <div class="d-flex flex-no-wrap justify-space-between px-8">
    <div v-html="paragraph"></div>
    <v-card class="pb-2 mb-3 mx-3 bg-grey" max-width="200">
      <v-card-title class="text-h5"> {{ readNews.label }} </v-card-title>
      <v-card-subtitle
        ><b
          ><a :href="readNews.link" target="_blank">{{ readNews.title }}</a></b
        ></v-card-subtitle
      >
    </v-card>
  </div>
</template>

<script>
export default {
  name: "hero-popular",
  props: {
    readNews: {},
    paragraph: {},
  },
};
</script>
<style>
.v-card-subtitle {
  word-wrap: break-word;
  white-space: normal;
}
</style>
