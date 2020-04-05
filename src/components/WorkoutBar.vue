<template lang="pug">
  v-app-bar(app clipped-left color="secondary")
    v-btn(@click.stop="openModal()" icon )
      v-icon clear

    //- Alter what is shown based on device size
    span
      v-toolbar-title.d-sm-none {{ workoutName }}
      v-toolbar-title.d-none.d-sm-flex {{ workoutName }}

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
    openModal() {
      this.$store.dispatch("modal/open", {
        component: "ConfirmAction",
        title: "Cancel this Workout?",
        content:
          "Click Confirm to cancel this workout and discard any exercise progress.",
        action: "workout/cancel"
      });
    }
  },
  computed: {
    isRouteWorkout() {
      return this.$route.name === "ActiveWorkout";
    },
    workoutName() {
      return this.$store.state.workout.name;
    }
  }
};
</script>

<style></style>
