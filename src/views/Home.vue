<template lang="pug">
  v-container.mx-auto(v-if="workouts.length === 0")
    DefaultCard

  v-container(v-else fluid)
    v-container.mx-auto(v-if="currentWorkout.id")
      ResumeCard(
        :id="currentWorkout.id"
        :name="currentWorkout.name"
        :exercises="currentWorkout.exercises"
        :records="currentWorkout.records"
      )

    v-row
      WorkoutCard(
        v-for="workout in workouts"
        :key="workout.id"
        :id="workout.id"
        :name="workout.name"
        :exerciseIds="workout.exerciseIds"
      )
</template>

<script>
import DefaultCard from "../components/home/DefaultCard";
import ResumeCard from "../components/home/ResumeCard";
import WorkoutCard from "../components/home/WorkoutCard";

export default {
  name: "Home",
  components: {
    DefaultCard,
    ResumeCard,
    WorkoutCard
  },
  computed: {
    currentWorkout() {
      return this.$store.state.workout;
    },
    workouts() {
      return this.$store.state.available.workouts;
    }
  }
};
</script>
