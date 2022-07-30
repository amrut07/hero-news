<!--This view is intended to group all the Header component and Provide a functionality of 
showing Header Title, Header Menus and the Search and User Account option -->
<template>
  <v-app-bar class="px-10" color="purple" dark>
    <h1>
      <!-- <v-icon dark color="primary" v-bind="props">
        mdi-newspaper-variant
      </v-icon> -->
      Hero News
    </h1>
    <v-divider class="mx-4" vertical></v-divider>
    <v-app-bar-title>
      <header-field :fields="headerFields" />
    </v-app-bar-title>

    <!-- <v-spacer></v-spacer> -->

    <v-divider class="mx-4" vertical></v-divider>
    <v-tooltip bottom>
      <template v-slot:activator="{ props }">
        <v-icon class="mr-4" dark v-bind="props"> mdi-magnify </v-icon>
      </template>
      <span>Search</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ props }">
        <span>
          <v-icon dark v-bind="props"> mdi-account </v-icon>
          <!-- <h3>Sign In</h3> -->
        </span>
      </template>
      <span>Sign In</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
import HeaderField from "@/components/HeaderField.vue";

export default {
  name: "HeaderMenu",
  components: {
    HeaderField,
  },
  computed: {
    ...mapState({
      headerFields: (state) => state.heroNews.header,
    }),
  },
  async created() {
    // const data = await getHeader();
    // Header fields need to be sorted based on the weight, lowest value could be displayed first and so on.
    console.log(this.headerFields);
  },
};
</script>
