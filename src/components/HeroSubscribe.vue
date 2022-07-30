<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <p class="text-h5 text--primary">Stay in the know. Anytime. Anywhere.</p>
      <v-divider> </v-divider>
      <div class="text--primary py-4">
        Subscribe to get daily news updates, insights and must reads delivered
        straight to your inbox.
      </div>
    </v-card-text>
    <v-card-actions>
      <v-text-field
        label="Email"
        variant="solo"
        placeholder="abc@abc.com"
      ></v-text-field>
      <v-btn size="x-large" variant="text" color="teal-accent-4" class="mb-7">
        Subscribe
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<style scoped>
.v-card {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.v-card-actions {
  height: 20px;
}
</style>
