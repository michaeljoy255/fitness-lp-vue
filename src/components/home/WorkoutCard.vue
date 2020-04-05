<template lang="pug">
  v-col.col-12.col-sm-6.col-md-4.col-xl-3
    v-card
      v-card-title {{ name }}
      
      v-card-subtitle {{ new Date().toDateString() }}

      v-card-text
        v-icon timer
        span(v-html="this.getWorkoutTime(1, new Date())")

      v-card-actions
        v-btn(:to="{name: `ActiveWorkout`,params: {id: this.id}}" color="primary" block)
          span Begin Workout
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
  }
};
</script>

<style></style>
