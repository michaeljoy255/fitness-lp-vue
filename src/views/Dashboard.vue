<template lang="pug">
  v-container.mx-auto(v-if="workouts.length === 0")
    DefaultCard

  v-container.mx-auto(v-else)
    v-row

      ResumeCard(
        v-if="active.id"
        :id="active.id"
        :name="active.name"
        :exercises="active.exercises"
        :records="active.records"
      )
      
      WorkoutCard(
        v-for="workout in workouts"
        :key="workout.id"
        :id="workout.id"
        :name="workout.name"
        :exerciseIds="workout.exerciseIds"
      )
</template>

<script>
import DefaultCard from "../components/dashboard/DefaultCard";
import ResumeCard from "../components/dashboard/ResumeCard";
import WorkoutCard from "../components/dashboard/WorkoutCard";

export default {
  name: "Dashboard",
  components: {
    DefaultCard,
    ResumeCard,
    WorkoutCard
  },

  computed: {
    active() {
      return this.$store.state.active;
    },

    workouts() {
      return this.$store.state.workout.workouts;
    }
  }
};
</script>
