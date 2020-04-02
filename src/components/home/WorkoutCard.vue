<template lang="pug">
  v-col.col-12.col-sm-6.col-md-4.col-xl-3
    v-card(shaped)
      v-card-text(align="center")
        p.title.text--primary.mb-0 {{ name }}
        p.text--secondary {{ new Date().toDateString() }}
        p.text--primary
          //- Design a method/mixin to handle converting times to these (with html/classes)
          v-icon timer
          span &nbsp; 1
          span.overline h
          span &nbsp; 46
          span.overline m
        v-btn(:to="{name: 'ActiveWorkout', params: {id: this.id}}" color="primary" rounded)
          span Begin
          v-icon(right) play_arrow
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
