<template lang="pug">
  v-col.col-12.col-md-6.col-lg-4.col-xl-3
    v-card.d-flex(shaped)
      v-spacer
      div
        v-card-title {{ name }}
        v-card-subtitle {{ new Date().toDateString() }}
        v-btn.mb-3(:to="`/workout/${id}`" color="primary" rounded)
          span Start Workout
          v-icon(right) play_arrow
      v-spacer
      div(align="center")
        v-card-title Time
        v-card-subtitle 45m
        v-icon timer
      v-spacer
</template>

<script>
export default {
  name: "WorkoutCard",
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
