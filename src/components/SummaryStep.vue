<template lang="pug">
  div
    v-stepper-step.pa-3(:step="step" editable)
      span Summary
    v-stepper-content.pl-0.pt-2(:step="step")
      v-card
        v-container
          div Summary of workout: Progress image, timestamp, etc...
          v-spacer.mb-3
          v-btn(color="success" @click="submit" rounded)
            span Submit
            v-icon(right) done
</template>

<script>
export default {
  name: "SummaryStep",
  props: {
    step: {
      type: Number,
      required: true
    }
  },
  methods: {
    submit() {
      console.log("Submit Workout!");
      this.$store.dispatch("setWorkoutStep", 1);
    }
  }
};
</script>

<style></style>
