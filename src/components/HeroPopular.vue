<template>
  <v-card class="pb-2">
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-avatar size="100" rounded="0">
        <v-img :src="popularNews.image"></v-img>
      </v-avatar>
      <div>
        <!-- <v-card-title class="text-h5"> Supermodel </v-card-title> -->

        <v-card-subtitle
          ><b>{{ popularNews.title }}</b></v-card-subtitle
        >

        <v-card-actions>
          <v-btn
            class="ml-2"
            variant="outlined"
            size="small"
            :href="popularNews.url"
            target="_blank"
          >
            Read More
          </v-btn>
        </v-card-actions>
      </div>
    </div>
    <v-divider> </v-divider>
  </v-card>
</template>

<script>
export default {
  name: "hero-popular",
  props: {
    popularNews: {},
  },
};
</script>
<style>
.v-card-subtitle {
  word-wrap: break-word;
  white-space: normal;
}
</style>
