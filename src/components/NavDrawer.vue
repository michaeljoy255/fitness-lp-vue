<template lang="pug">
  v-navigation-drawer(v-model="drawerState" app clipped)
    v-list

      v-list-item(link to="/home")
        v-list-item-action
          v-icon home
        v-list-item-content Home

      v-list-item(link to="/charts")
        v-list-item-action
          v-icon timeline
        v-list-item-content Charts

      v-divider

      v-list-item(link to="/workouts")
        v-list-item-action
          v-icon assignment
        v-list-item-content Workouts

      v-list-item(link to="/exercises")
        v-list-item-action
          v-icon fitness_center
        v-list-item-content Exercises

      v-list-item(link to="/measurements")
        v-list-item-action
          v-icon straighten
        v-list-item-content Measurements

      v-list-item(link to="/records")
        v-list-item-action
          v-icon sd_card
        v-list-item-content Records

      v-divider

      v-list-item(link to="/about")
        v-list-item-action
          v-icon info
        v-list-item-content About

      v-list-item(@click="test")
        v-list-item-action
          v-icon announcement
        v-list-item-content TESTING
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
  },
  methods: {
    test() {
      console.log("---For Testing---");
    }
  }
};
</script>

<style></style>
