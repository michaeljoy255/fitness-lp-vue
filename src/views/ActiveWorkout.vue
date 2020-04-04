<template lang="pug">
  v-container.mx-auto.mt-5
    v-stepper(v-model="step" vertical non-linear)
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
      workout: null,
      exercises: [
        { name: "Warmup" },
        { name: "Exercise" },
        { name: "Cooldown" },
        { name: "Stretching" }
      ]
    };
  },
  computed: {
    step: {
      get() {
        return this.$store.state.workout.step;
      },
      set(step) {
        if (step !== this.$store.state.workout.step) {
          this.$store.dispatch("workout/setStep", step);
        }
      }
    }
  }
};
</script>

<style></style>
