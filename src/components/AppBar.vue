<template lang="pug">
  v-app-bar(app clipped-left color="secondary")
    v-app-bar-nav-icon(v-if="!isRouteWorkout" @click="toggleDrawer")
    v-btn(v-if="isRouteWorkout" icon)
      v-icon clear

    //- Alter what is shown based on device size
    span(v-if="!isRouteWorkout")
      v-toolbar-title.d-sm-none Fitness LP
      v-toolbar-title.d-none.d-sm-flex Fitness Linear Progression
    span(v-if="isRouteWorkout")
      v-toolbar-title.d-sm-none Active Workout
      v-toolbar-title.d-none.d-sm-flex {{ workout }}

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
  },
  computed: {
    isRouteWorkout() {
      return this.$route.name === "ActiveWorkout";
    },
    workout() {
      return this.$store.state.workout.name;
    }
  }
};
</script>

<style></style>
