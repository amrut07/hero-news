<template>
  <v-toolbar-items class="hidden-sm-and-down">
    <span v-for="field of fields" :key="field.field_id">
      <v-btn :href="field.absolute_url" class="px-2"> {{ field.title }} </v-btn>
      <v-divider vertical></v-divider>
    </span>
  </v-toolbar-items>
</template>
<script>
export default {
  props: {
    fields: Object,
  },
  data() {
    return {};
  },
};
</script>
