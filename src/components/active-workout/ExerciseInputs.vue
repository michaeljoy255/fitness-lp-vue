<template lang="pug">
div
  v-container Description: Exercise description if its set to be viewable...
  v-container Notes: Place to add notes about the exercises?
  v-expansion-panels(popout dense)
    v-expansion-panel(v-for="(item, i) in this.len" :key="i")
      v-expansion-panel-header Set {{ i+1 }}
      v-expansion-panel-content
        v-row
          v-col.col-6.col-sm-3.py-0.px-2
            v-text-field(label="Weight" dense outlined prepend-icon="fitness_center" persistent-hint hint="125 lbs")
          v-col.col-6.col-sm-3.py-0.px-2
            v-text-field(label="Reps" dense outlined prepend-icon="filter_list" persistent-hint hint="12 count")
          v-col.col-6.col-sm-3.py-0.px-2
            v-text-field(label="Distance" dense outlined prepend-icon="place" persistent-hint hint="2.3 miles") 
          v-col.col-6.col-sm-3.py-0.px-2
            v-text-field(label="Duration" dense outlined prepend-icon="timer" persistent-hint hint="32m 19s")

  v-container
    v-btn(fab small @click="len++" color="success")
      v-icon add
    v-btn(fab small @click="len--" color="error")
      v-icon remove
</template>

<script>
export default {
  name: "ExerciseCard",
  data() {
    return {
      len: 3
    };
  }
};
</script>
