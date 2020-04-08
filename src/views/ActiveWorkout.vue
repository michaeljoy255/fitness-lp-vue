<template lang="pug">
  v-container.mx-auto
    v-stepper(v-model="step" vertical non-linear)
      WorkoutStep(
        v-for="(exercise, i) in workout.exercises"
        :key="i"
        :step="i+1"
        :name="exercise.name"
      )
      SummaryStep(:step="workout.exercises.length+1")
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
  /**
   * Created hook prepares the Active Workout view
   * - Closes the nav drawer
   * - Fresh workouts get initialized using route params
   * - Resumed workouts get loaded from state
   */
  created() {
    this.$store.dispatch("setDrawerActive", false);

    if (this.$route.params.exerciseIds) {
      // Fresh Workout - Only has the exerciseIds ready
      this.$store.dispatch("workout/start", {
        id: this.$route.params.id,
        name: this.$route.params.name,
        exerciseIds: this.$route.params.exerciseIds
      });
    }
  },
  computed: {
    step: {
      get() {
        return this.$store.state.workout.step;
      },
      set(step) {
        this.$store.dispatch("workout/setStep", step);
      }
    },
    workout() {
      return this.$store.state.workout;
    }
  }
};
</script>
