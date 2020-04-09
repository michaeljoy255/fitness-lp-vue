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

    WorkoutFooter(:beginTime="workout.beginTime")
</template>

<script>
import WorkoutStep from "../components/active-workout/WorkoutStep";
import SummaryStep from "../components/active-workout/SummaryStep";
import WorkoutFooter from "../components/active-workout/WorkoutFooter";

export default {
  name: "ActiveWorkout",
  components: {
    WorkoutStep,
    SummaryStep,
    WorkoutFooter
  },

  /**
   * Created hook prepares the Active Workout view
   * - Fresh workouts get initialized using route params
   * - Resumed workouts get loaded from state
   */
  created() {
    if (this.$route.params.exerciseIds) {
      // Fresh Workout - Only has the exerciseIds ready
      this.$store.dispatch("workout/start", {
        id: this.$route.params.id,
        name: this.$route.params.name,
        exerciseIds: this.$route.params.exerciseIds
      });
    }
  },

  /**
   * Mounted hook handles the page loading with no workout and shuts the nav
   * - Return user to Dashboard if a workout isn't loaded
   * - Closes the nav drawer
   */
  mounted() {
    if (!this.$store.state.workout.id) {
      // No workout id found, return to Dashboard
      this.$router.push("/dashboard");
    }

    this.$store.dispatch("setDrawerActive", false);
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
