<template lang="pug">
  v-app-bar(app clipped-left color="secondary")
    v-app-bar-nav-icon(@click="toggleDrawer")

    //- Alter what is shown based on device size
    span
      v-toolbar-title.d-sm-none Fitness LP
      v-toolbar-title.d-none.d-sm-flex Fitness Linear Progression

    v-spacer
    span
      span.d-sm-none {{ new Date().toLocaleDateString() }}
      span.d-none.d-sm-flex {{ this.getLongDate() }}
</template>

<script>
import { formattersMixin } from "../mixins/FormattersMixin";

export default {
  name: "AppBar",
  mixins: [formattersMixin],
  methods: {
    toggleDrawer() {
      this.$store.dispatch("toggleDrawer");
    }
  }
};
</script>

<style></style>
