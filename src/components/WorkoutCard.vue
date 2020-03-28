<template lang="pug">
  v-col.col-12.col-sm-6.col-md-4.col-xl-3
    v-card(shaped)
      v-card-title Workout
      v-card-subtitle {{ new Date().toDateString() }} (45m)
      v-card-actions
        v-spacer
        v-btn(color="secondary") Start Workout
          v-icon play_arrow
        v-spacer
</template>

<script>
export default {
  name: "WorkoutCard"
};
</script>

<style></style>
