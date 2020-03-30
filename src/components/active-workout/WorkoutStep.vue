<template lang="pug">
  div
    v-stepper-step.pa-3(:complete="getStep > step" :step="step" editable)
      span {{ name }}
    v-stepper-content.pl-0.pt-2(:step="step")
      ExerciseCard
</template>

<script>
import ExerciseCard from "./ExerciseCard";

export default {
  name: "WorkoutStep",
  components: {
    ExerciseCard
  },
  props: {
    step: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    getStep: {
      get() {
        return this.$store.state.activeWorkout.step;
      },
      set(step) {
        if (step !== this.$store.state.activeWorkout.step) {
          this.$store.dispatch("setActiveWorkoutStep", step);
        }
      }
    }
  }
};
</script>

<style></style>
