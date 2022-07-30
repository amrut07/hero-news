<template>
  <v-card class="mx-auto" max-width="100%">
    <v-card-text>
      <p class="text-h5 text--primary">Hero Topics</p>
      <div class="pa-4">
        <v-chip-group active-class="primary--text" column>
          <v-chip v-for="topic in topics" :key="topic.id">
            {{ topic.name }}
          </v-chip>
        </v-chip-group>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "hero-topics",

  props: {
    topics: [],
  },
};
</script>
