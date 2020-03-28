<template lang="pug">
  v-navigation-drawer(v-model="drawerState" app clipped)
    v-list
      v-list-item(link to="/home")
        v-list-item-action
          v-icon forward
        v-list-item-content Home
      v-list-item(link to="/workout")
        v-list-item-action
          v-icon forward
        v-list-item-content Workout
      v-list-item(link to="/about")
        v-list-item-action
          v-icon forward
        v-list-item-content About
</template>

<script>
export default {
  name: "NavDrawer",
  computed: {
    drawerState: {
      get() {
        return this.$store.state.navDrawerActive;
      },
      set(payload) {
        if (payload !== this.$store.state.navDrawerActive) {
          this.$store.dispatch("setNavDrawer", payload);
        }
      }
    }
  }
};
</script>

<style></style>
