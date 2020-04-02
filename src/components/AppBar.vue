<template lang="pug">
  v-app-bar(app clipped-left color="secondary")
    v-app-bar-nav-icon(@click="toggleDrawer")
    v-toolbar-title.d-sm-none Fitness LP
    v-toolbar-title.d-none.d-sm-flex Fitness Linear Progression
    v-spacer
    span {{ new Date().toDateString() }}
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    toggleDrawer() {
      this.$store.dispatch("toggleDrawer");
    }
  }
};
</script>

<style></style>
