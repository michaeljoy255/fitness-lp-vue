<template lang="pug">
  v-app-bar(app clipped-left color="secondary")
    v-app-bar-nav-icon(@click="toggleNavDrawer")
    v-toolbar-title.d-sm-none Fitness LP
    v-toolbar-title.d-none.d-sm-flex Fitness Linear Progression
    v-spacer
    span {{ new Date().toDateString() }}
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    toggleNavDrawer() {
      this.$store.dispatch("toggleNavDrawer");
    }
  }
};
</script>

<style></style>
