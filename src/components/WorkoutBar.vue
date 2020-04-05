<template lang="pug">
  v-app-bar(app clipped-left color="secondary")
    v-btn(@click.stop="$store.dispatch('setModalActive', true)" icon )
      v-icon clear
    ConfirmAction(
      :title="'Cancel this Workout?'"
      :content="'Click Confirm to cancel this workout and discard any exercise progress.'"
      :action="'workout/cancel'"
    )

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
import ConfirmAction from "../components/modals/ConfirmAction";
import { formattersMixin } from "../mixins/FormattersMixin";

export default {
  name: "AppBar",
  mixins: [formattersMixin],
  components: {
    ConfirmAction
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
