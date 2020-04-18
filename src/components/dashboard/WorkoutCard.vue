<template lang="pug">
  v-col.col-12.col-sm-6.col-md-4.col-xl-3
    v-card(min-height="214")
      v-card-title {{ name }}
      
      v-card-subtitle {{ displayDate }}

      v-card-text
        Timer(:duration="duration")

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
import { DateTime } from "luxon";
import Timer from "../miscellaneous/Timer";

export default {
  name: "WorkoutCard",
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
  data() {
    return {
      DateTime
    };
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
  },

  computed: {
    mostRecentRecord() {
      console.log("update recent record");
      return this.$store.getters["workoutRecord/getMostRecentById"](this.id);
    },

    duration() {
      const record = this.mostRecentRecord;
      console.log("update duration ");
      if (record) {
        return record.duration;
      } else {
        return null;
      }
    },

    displayDate() {
      if (!this.mostRecentRecord) {
        return "No previous records found";
      } else {
        const time = DateTime.fromISO(this.mostRecentRecord.createdAt);

        return `Previously completed ${time.toLocaleString(
          DateTime.DATE_HUGE
        )}`;
      }
    }
  }
};
</script>
