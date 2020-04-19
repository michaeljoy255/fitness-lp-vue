<template lang="pug">
  v-app
    DismissibleModal
    NavDrawer
    AppBar
    v-content
      router-view
</template>

<script>
import DismissibleModal from "./components/modals/dismissible/DismissibleModal";
import NavDrawer from "./components/app-ui/NavDrawer";
import AppBar from "./components/app-ui/AppBar";
import EventBusService from "./services/event-bus.service";

export default {
  name: "App",
  components: {
    DismissibleModal,
    AppBar,
    NavDrawer
  },

  created() {
    // Get all initial data for app ASAP
    this.$store.dispatch("initApp");

    EventBusService.$on("toRoutePath", path => {
      // Fix for dupelicated route bug
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    });
  },

  computed: {
    isActiveWorkout() {
      return this.$route.name === "ActiveWorkout";
    }
  }
};
</script>
