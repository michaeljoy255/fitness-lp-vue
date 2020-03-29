<template lang="pug">
  v-col.col-12.col-md-6.col-lg-4.col-xl-3
    v-card.d-flex(shaped)
      v-spacer
      div
        v-card-title Workout Name
        v-card-subtitle {{ new Date().toDateString() }}
        v-btn.ml-3.mb-3(color="secondary") Start Workout
          v-icon play_arrow
      v-spacer
      div(align="center")
        v-card-title Time
        v-card-subtitle 45m
        v-icon timer
      v-spacer
</template>

<script>
export default {
  name: "WorkoutCard"
};
</script>

<style></style>
