<template lang="pug">
  v-navigation-drawer(v-model="drawerActive" app clipped)
    v-list(nav)

      v-list-item(link to="/dashboard")
        v-list-item-action
          v-icon dashboard
        v-list-item-content Dashboard

      v-divider

      v-list-item(link to="/charts")
        v-list-item-action
          v-icon timeline
        v-list-item-content Charts

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
        v-list-item-content Testing
</template>

<script>
import { DateTime, Interval } from "luxon";

export default {
  name: "Drawer",

  computed: {
    drawerActive: {
      get() {
        return this.$store.state.isDrawerActive;
      },
      set(bool) {
        // This stops redundent state mutations for the drawer
        if (bool !== this.$store.state.isDrawerActive) {
          this.$store.dispatch("setDrawerActive", bool);
        }
      }
    }
  },

  /**
   * @todo Remove testing methods
   */
  methods: {
    test() {
      const dt1 = DateTime.fromISO(DateTime.local(2020, 4, 17).toISO());
      const dt2 = DateTime.fromISO(DateTime.local().toISO());
      const i = Interval.fromDateTimes(dt1, dt2)
        .toDuration(["hours", "minutes", "seconds"])
        .toObject();

      console.log(dt1, dt2, i);
    }
  }
};
</script>
