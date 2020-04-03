<template lang="pug">
  v-col.col-12.col-sm-6.col-md-4.col-xl-3
    v-card(shaped)
      v-card-text(align="center")
        p.title.text--primary.mb-0 {{ name }}
        p.text--secondary {{ new Date().toDateString() }}
        p.text--primary
          v-icon timer
          span(v-html="this.getWorkoutTime(1, new Date())")
        v-btn(:to="{name: 'ActiveWorkout', params: {id: this.id}}" color="primary" rounded)
          span Begin
          v-icon(right) play_arrow
</template>

<script>
import { formattersMixin } from "../../mixins/FormattersMixin";
/**
 * @todo Remember to un-hardcode the time for workout cards
 */

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
