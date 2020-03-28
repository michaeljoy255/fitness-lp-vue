<template lang="pug">
  v-app-bar(app clipped-left color="secondary")
    v-app-bar-nav-icon(@click="toggleNavDrawer")
    v-toolbar-title Fitness LP
    v-spacer
    span {{ new Date().toDateString() }} &nbsp;
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
