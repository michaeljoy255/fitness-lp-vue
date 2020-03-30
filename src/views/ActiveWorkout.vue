<template lang="pug">
  v-container.mx-auto.mt-5
    v-stepper(v-model="getStep" vertical non-linear)
      div(v-for="(exercise, i) in exercises" :key="i")
        WorkoutStep(:step="i+1" :name="exercise.name")
      SummaryStep(:step="exercises.length+1")
</template>

<script>
import WorkoutStep from "../components/active-workout/WorkoutStep";
import SummaryStep from "../components/active-workout/SummaryStep";

export default {
  name: "ActiveWorkout",
  components: {
    WorkoutStep,
    SummaryStep
  },
  data() {
    return {
      // Test Stepper Data - more to state
      /**
       * @todo
       */
      exercises: [
        { name: "Warmup" },
        { name: "Exercise" },
        { name: "Cooldown" }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("setActiveWorkoutStep", 1);

    console.log(this.$route.params.id);
    /**
     * @todo Make getWorkoutById so you can get the exerciseIds from it
     */
    // this.$store.dispatch();
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
