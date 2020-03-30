<template lang="pug">
  v-card(shaped)
    v-card-title No Workouts Found
    v-card-subtitle Would you like to prefill the app with default data to start?
    v-card-text
      | Push the button below to load defaults for exercises and workouts. You
      | can also enter your own exercises and workouts into the app using the
      | options in the menu in the top left of the screen.
    v-btn.ml-3.mb-3(@click="setDefaults" color="success" rounded)
      span Use Defaults
      v-icon(right) system_update_alt
</template>

<script>
export default {
  name: "DefaultCard",
  methods: {
    setDefaults() {
      this.$store.dispatch("setAvailableDefaults");
    }
  }
};
</script>

<style></style>
