<template lang="pug">
  v-col.col-12.col-sm-6.col-md-4.col-xl-3
    v-card
      v-card-title {{ name }}
      
      v-card-subtitle {{ this.getLongDate() }}

      v-card-text
        v-icon timer
        span(v-html="this.getWorkoutTime(1, new Date())")

      v-card-actions
        v-container
          v-btn(
            :to="this.routeToObject()"
            color="primary"
            block
            rounded
          )
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
    },
    exerciseIds: {
      type: Array,
      required: true
    }
  },
  methods: {
    routeToObject() {
      return {
        name: `ActiveWorkout`,
        params: {
          newWorkout: true,
          id: this.id,
          name: this.name,
          exerciseIds: this.exerciseIds
        }
      };
    }
  }
};
</script>

<style></style>
