<!-- This could be the standalone component which could feature only publish and last updated date and can be used anywhere is the web page-->
<template>
  <v-content class="pt-5">
    <v-list-item-title
      ><i
        >Publish Date <b> {{ new Date(publishdate).toDateString() }}</b></i
      ></v-list-item-title
    >
    <v-list-item-title
      ><i
        >Last Updated <b>{{ new Date(lastupdated).toDateString() }} </b></i
      ></v-list-item-title
    >
  </v-content>
</template>

<script>
export default {
  props: {
    lastupdated: String,
    publishdate: String,
  },
};
</script>
