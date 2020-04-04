<template lang="pug">
  v-navigation-drawer(v-model="drawerActive" app clipped)
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

      v-list-item(@click="testON")
        v-list-item-action
          v-icon announcement
        v-list-item-content TESTING ON
      v-list-item(@click="testOFF")
        v-list-item-action
          v-icon announcement
        v-list-item-content TESTING OFF
</template>

<script>
export default {
  name: "Drawer",
  computed: {
    drawerActive: {
      get() {
        return this.$store.state.drawerActive;
      },
      set(payload) {
        // This stops redundent state mutations between toggles and sets
        if (payload !== this.$store.state.drawerActive) {
          this.$store.dispatch("setDrawer", payload);
        }
      }
    }
  },
  methods: {
    testON() {
      console.log("TEST: Modal - Remove all defaults");

      this.$store.dispatch("modal/open", {
        component: "ConfirmAction",
        title: "Remove Workouts and Exercises?",
        content: `Click Confirm to remove all exercises and workouts.`,
        action: "available/clearAll"
      });
    },
    testOFF() {
      console.log("TEST: Modal - Cancel workout");

      this.$store.dispatch("modal/open", {
        component: "ConfirmAction",
        title: "Cancel this Workout?",
        content: `No progress will be saved by canceling a workout. Click
                  Confirm to complete this action.`,
        action: ""
      });
    }
  }
};
</script>

<style></style>
