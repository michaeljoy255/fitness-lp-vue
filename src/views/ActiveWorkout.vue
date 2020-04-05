<template lang="pug">
  v-container.mx-auto
    v-stepper(v-model="currentStep" vertical non-linear)
      WorkoutStep(
        v-for="(exercise, i) in exercises"
        :key="i"
        :step="i+1"
        :name="exercise.name"
      )
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
  computed: {
    currentStep: {
      get() {
        return this.$store.state.workout.step;
      },
      set(step) {
        this.$store.dispatch("workout/setStep", step);
      }
    },
    exercises() {
      return this.$store.getters["available/getExercisesByWorkoutId"](
        this.$route.params.id
      );
    }
  }
};
</script>

<style></style>
