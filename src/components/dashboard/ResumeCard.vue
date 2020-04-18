<template lang="pug">
  v-col.col-12.col-sm-6.col-md-4.col-xl-3
    v-card
      v-card-title {{ name }}
      
      v-card-subtitle.pb-1 Workout started on {{ this.getLongDateMixin() }}

      v-card-actions
        v-container
          v-btn(
            @click.stop="openModal()"
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
import { datesMixin } from "../../mixins/datesMixin";

export default {
  name: "ResumeCard",
  mixins: [datesMixin],
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
    previous: {
      type: Array,
      required: true
    },
    records: {
      type: Array,
      required: true
    }
  },

  methods: {
    openModal() {
      this.$store.dispatch("modal/open", {
        component: "ConfirmAction",
        title: "Discard Workout",
        content: "Discards this workout and removes it from the Dashboard.",
        action: "active/cancel"
      });
    },

    routeToObject() {
      return {
        name: `ActiveWorkout`,
        params: {
          id: this.id,
          name: this.name,
          exercises: this.exercises,
          previous: this.previous,
          records: this.records
        }
      };
    }
  }
};
</script>
