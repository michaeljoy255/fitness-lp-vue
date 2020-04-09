<template lang="pug">
  div
    v-stepper-step.pa-3(
      :step="step"
      editable
    ) Summary

    v-stepper-content.pl-0.pt-2.ml-6(:step="step")
      v-card
        v-card-title Summary of Workout
        v-card-subtitle Progress graph, current duration, etc...
        v-card-actions
          v-container
            v-btn(@click.stop="openModal()" rounded color="success" block)
              span Finish Workout
              v-icon(right) check
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
    openModal() {
      this.$store.dispatch("modal/open", {
        component: "ConfirmAction",
        title: "Finish Workout",
        content: `Saves the results of this workout into your records and
                  returns you to the Dashboard.`,
        action: "workout/submit"
      });
    }
  }
};
</script>
