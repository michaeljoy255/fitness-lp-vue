<template lang="pug">
  v-container(fluid)
    v-row
      WorkoutCard(v-for="(card, i) in cards" :key="i")
</template>

<script>
import WorkoutCard from "../components/WorkoutCard";

export default {
  name: "Home",
  components: {
    WorkoutCard
  },
  data() {
    return {
      cards: 7 // Number of test cards to create
    };
  }
};
</script>
