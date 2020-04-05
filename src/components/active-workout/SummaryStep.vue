<template lang="pug">
  div
    v-stepper-step.pa-3(
      :step="step"
      editable
    ) Summary

    v-stepper-content.pl-0.pt-2(:step="step")
      v-card
        v-card-title Summary of Workout
        v-card-subtitle Progress graph, current duration, etc...
        v-card-actions
          v-container
            ConfirmAction(
              :rounded="true"
              :color="'success'"
              :block="true"
              :buttonText="'Finish Workout'"
              :buttonIcon="'check'"
              :title="'Finish Workout and Save Results?'"
              :content="'Click Confirm to save the results of this workout into your records.'"
              :action="'workout/submitWorkout'"
            )
</template>

<script>
import ConfirmAction from "../modals/ConfirmAction";

export default {
  name: "SummaryStep",
  components: {
    ConfirmAction
  },
  props: {
    step: {
      type: Number,
      required: true
    }
  }
};
</script>

<style></style>
