<template lang="pug">
  v-container(fluid)
    v-stepper(v-model="getStep" vertical non-linear)
      div(v-for="(exercise, i) in exercises" :key="i")
        WorkoutStep(:step="i+1" :name="exercise.name")
      SummaryStep(:step="exercises.length+1")
</template>

<script>
import WorkoutStep from "../components/WorkoutStep";
import SummaryStep from "../components/SummaryStep";

export default {
  name: "WorkoutStepper",
  components: {
    WorkoutStep,
    SummaryStep
  },
  data() {
    return {
      // Test Stepper Data - more to state
      exercises: [
        { name: "Warmup" },
        { name: "Exercise" },
        { name: "Cooldown" }
      ]
    };
  },
  /**
   * Set the state to reflect the current workout
   * @todo
   */
  mounted() {
    // more
    this.$store.dispatch("setWorkoutStep", 1);
  },
  computed: {
    getStep: {
      get() {
        return this.$store.state.workout.step;
      },
      set(step) {
        if (step !== this.$store.state.workout.step) {
          this.$store.dispatch("setWorkoutStep", step);
        }
      }
    }
  }
};
</script>

<style></style>
