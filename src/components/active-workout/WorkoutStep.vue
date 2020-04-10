<template lang="pug">
  div
    v-stepper-step.pa-3( 
      :step="step"
      editable
    ) {{ name }}

    v-stepper-content.pl-0.pt-2.pr-12.ml-3(:step="step")
      ExerciseInputs
</template>

<script>
import ExerciseInputs from "./ExerciseInputs";

export default {
  name: "WorkoutStep",
  components: {
    ExerciseInputs
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
