<template lang="pug">
  div
    //- Removed this attr from stepper. Could implement later though...
    //- :complete="$store.state.workout.step > step"
    v-stepper-step.pa-3( 
      :step="step"
      editable
    ) {{ name }}

    v-stepper-content.pl-0.pt-2(:step="step")
      ExerciseCard
</template>

<script>
import ExerciseCard from "./ExerciseCard";

export default {
  name: "WorkoutStep",
  components: {
    ExerciseCard
  },
  props: {
    step: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
