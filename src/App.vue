<template lang="pug">
  v-app
    DynamicModal
    NavDrawer
    AppBar
    v-content
      router-view
</template>

<script>
import DynamicModal from "./components/modals/DynamicModal";
import NavDrawer from "./components/app-ui/NavDrawer";
import AppBar from "./components/app-ui/AppBar";
import EventBusService from "./services/event-bus.service";

export default {
  name: "App",
  components: {
    DynamicModal,
    AppBar,
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
