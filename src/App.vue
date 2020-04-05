<template lang="pug">
  v-app
    NavDrawer(v-if="this.$route.name !== 'ActiveWorkout'")
    AppBar(v-if="this.$route.name !== 'ActiveWorkout'")
    WorkoutBar(v-if="this.$route.name === 'ActiveWorkout'")
    v-content
      router-view
</template>

<script>
import NavDrawer from "./components/NavDrawer";
import AppBar from "./components/AppBar";
import WorkoutBar from "./components/WorkoutBar";
import EventBusService from "./services/event-bus.service";

export default {
  name: "App",
  components: {
    AppBar,
    WorkoutBar,
    NavDrawer
  },
  created() {
    // Get all data for app ASAP
    this.$store.dispatch("initApp");

    EventBusService.$on("storeChangedRoute", route => {
      this.$router.push(route);
    });
  }
};
</script>

<style lang="stylus"></style>
