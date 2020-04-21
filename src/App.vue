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
  },

  computed: {
    isActiveWorkout() {
      return this.$route.name === "ActiveWorkout";
    }
  }
};
</script>
