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
    // Make sure nav drawer is closed
    this.$store.dispatch("setDrawerActive", false);

    /**
     * @todo This code is messy, find a better way!!!
     */
    // this.$route.params.exerciseIds
    if (this.$route.params.newWorkout) {
      // Init new workout with provided params (id, name, exerciseIds)
      this.$store.dispatch("workout/start", {
        id: this.$route.params.id,
        name: this.$route.params.name,
        exercises: this.$store.getters["available/getExercisesByIds"](
          this.$route.params.exerciseIds
        ),
        records: [] // @todo - need a getter for this
      });
    } else if (this.$route.params.id) {
      // Init new workout with just provided id
      const workout = this.$store.getters["available/getWorkoutById"](
        this.$route.params.id
      );

      this.$store.dispatch("workout/start", {
        id: this.$route.params.id,
        name: workout.name,
        exercises: this.$store.getters["available/getExercisesByIds"](
          workout.exerciseIds
        ),
        records: [] // @todo - need a getter for this
      });
    } else {
      // Resume the incomplete workout
    }
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
      return this.$store.state.workout.exercises;
    },
    records() {
      return this.$store.state.workout.records;
    }
  }
};
</script>
