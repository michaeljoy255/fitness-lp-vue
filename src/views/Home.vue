<template lang="pug">
  DefaultCard(v-if="!workouts")
  v-row(v-else)
    WorkoutCard(v-for="workout in workouts"
    :key="workout.id"
    :name="workout.name"
    :id="workout.id")
</template>

<script>
import DefaultCard from "../components/DefaultCard";
import WorkoutCard from "../components/WorkoutCard";

export default {
  name: "Home",
  components: {
    DefaultCard,
    WorkoutCard
  },
  computed: {
    workouts() {
      return this.$store.state.workouts;
    }
  }
};
</script>
