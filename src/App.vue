<template lang="pug">
  v-app
    DismissibleModal
    NavDrawer
    AppBar
    v-content
      router-view
</template>

<script>
import DismissibleModal from "./components/modals/DismissibleModal";
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
    // Get all data for app ASAP
    this.$store.dispatch("initApp");

    EventBusService.$on("storeChangedRoute", route => {
      this.$router.push(route);
    });
  }
};
</script>
