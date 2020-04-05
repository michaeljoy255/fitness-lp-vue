<template lang="pug">
  v-container.mx-auto(v-if="workouts.length === 0")
    DefaultCard
    
  v-container(v-else fluid)
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
import WorkoutCard from "../components/home/WorkoutCard";

export default {
  name: "Home",
  components: {
    DefaultCard,
    WorkoutCard
  },
  computed: {
    workouts() {
      return this.$store.state.available.workouts;
    }
  }
};
</script>
