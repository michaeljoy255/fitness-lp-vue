<template lang="pug">
  v-col.col-12.col-sm-6.col-md-4.col-xl-3
    v-card
      v-card-title {{ name }}
      
      v-card-subtitle Previously completed {{ this.getLongDateMixin() }}

      v-card-text
        Timer(:beginTime="1" :endTime="new Date().getTime()")

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
import { datesMixin } from "../../mixins/datesMixin";
import Timer from "../miscellaneous/Timer";

export default {
  name: "WorkoutCard",
  mixins: [datesMixin],
  components: {
    Timer
  },
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
          id: this.id,
          name: this.name,
          exerciseIds: this.exerciseIds
        }
      };
    }
  }
};
</script>
