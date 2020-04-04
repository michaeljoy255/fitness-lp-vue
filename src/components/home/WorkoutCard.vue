<template lang="pug">
  v-col.col-12.col-sm-6.col-md-4.col-xl-3
    v-card(shaped)
      v-card-text(align="center")
        p.title.text--primary.mb-0 {{ name }}
        p.text--secondary {{ new Date().toDateString() }}
        p.text--primary
          v-icon timer
          span(v-html="this.getWorkoutTime(1, new Date())")
        v-btn(@click="routeFunc" :to="{name: `ActiveWorkout`,params: {id: this.id}}" color="primary" rounded)
          span Begin
          v-icon(right) play_arrow
</template>

<script>
/**
 * @todo Remember to un-hardcode the time for workout cards
 */
import { formattersMixin } from "../../mixins/FormattersMixin";

export default {
  name: "WorkoutCard",
  mixins: [formattersMixin],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    routeFunc() {
      console.log("ROUTE FUNC");
      // Set active workout state
      /**
       * @todo Need exercises(ids?) and records
       */
      this.$store.dispatch("workout/startWorkout", {
        id: this.id,
        name: this.name,
        step: 1,
        exercises: [
          { name: "Warmup" },
          { name: "Exercise" },
          { name: "Cooldown" },
          { name: "Stretching" }
        ],
        records: []
      });
    }
  }
};
</script>

<style></style>
