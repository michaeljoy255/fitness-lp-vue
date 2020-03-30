<template lang="pug">
  v-container.mx-auto.mt-5(v-if="!workouts")
    DefaultCard
  v-container(v-else fluid)
    v-row
      WorkoutCard(v-for="workout in workouts"
      :key="workout.id"
      :name="workout.name"
      :id="workout.id")
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
