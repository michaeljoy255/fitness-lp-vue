<template lang="pug">
  v-container.mx-auto(v-if="isArrayWithData(workouts)")
    v-row

      ResumeCard(
        v-if="active.id"
        :id="active.id"
        :name="active.name"
        :exercises="active.exercises"
        :previous="active.previous"
        :records="active.records"
      )
      
      WorkoutCard(
        v-for="workout in workouts"
        :key="workout.id"
        :id="workout.id"
        :name="workout.name"
        :exerciseIds="workout.exerciseIds"
      )

  v-container.mx-auto(v-else)
    DefaultCard
</template>

<script>
import DefaultCard from "../components/dashboard/DefaultCard";
import ResumeCard from "../components/dashboard/ResumeCard";
import WorkoutCard from "../components/dashboard/WorkoutCard";
import { isArrayWithData } from "../helpers";

export default {
  name: "Dashboard",
  components: {
    DefaultCard,
    ResumeCard,
    WorkoutCard
  },
  data() {
    return {
      isArrayWithData
    };
  },

  created() {
    // Get all data for app ASAP
    this.$store.dispatch("initApp");
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
