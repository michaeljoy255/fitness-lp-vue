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
  created() {
    // Get exercises using workout id from route
    // Must be in created hook for stepper steps
    /**
     * @todo You need to set these exercises and other properties for the workout in the WORKOUT.js state file!!!!!!!
     */
    this.exercises = this.$store.getters["available/getExercisesByWorkoutId"](
      this.$route.params.id
    );

    console.log("AW - exercises:", this.exercises);
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
