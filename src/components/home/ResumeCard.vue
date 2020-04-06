<template lang="pug">
  v-card(shaped)
    v-card
      v-card-title {{ name }}
      
      v-card-subtitle This workout was started on {{ this.getLongDate() }}

      v-card-actions
        v-container
          v-btn(
            :to="this.routeToObject()"
            color="error"
            block
            rounded
          )
            span Discard Workout
            v-icon(right) delete

          v-btn.mt-4(
            :to="this.routeToObject()"
            color="success"
            block
            rounded
          )
            span Resume Workout
            v-icon(right) directions_run
</template>

<script>
import { formattersMixin } from "../../mixins/FormattersMixin";

export default {
  name: "ResumeCard",
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
    exercises: {
      type: Array,
      required: true
    },
    records: {
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
          exercises: this.exercises,
          records: this.records
        }
      };
    }
  }
};
</script>
