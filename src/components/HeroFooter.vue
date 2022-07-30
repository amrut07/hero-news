<!--This is the common footer across the application -->
<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
};
</script>

<template>
  <v-footer dark class="bg-purple px-10">
    <v-card
      elevation="0"
      rounded="0"
      width="100%"
      class="bg-purple text-center"
    >
      <v-card-text>
        <v-btn class="mx-4" icon="mdi-home" variant="plain"></v-btn>
        <v-btn class="mx-4" icon="mdi-email" variant="plain"></v-btn>
        <v-btn class="mx-4" icon="mdi-calendar" variant="plain"></v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="text-white">
        {{ new Date().getFullYear() }} — <strong>Hero News</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
