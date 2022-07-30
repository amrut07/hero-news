<template>
  <v-content class="pr-16 mr-2"
    ><v-btn icon :href="data[0].url" target="_blank">
      <v-avatar color="grey" size="50" rounded="1">
        <v-img :src="data[0].hero_media.media_image"></v-img>
      </v-avatar>
    </v-btn>
    <div class="pt-4">
      By <b>{{ data[0].title }}</b>
    </div>
  </v-content>
</template>

<script>
export default {
  props: {
    data: [],
  },
};
</script>
