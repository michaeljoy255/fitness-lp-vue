<template lang="pug">
  v-app
    DynamicModal
    NavDrawer
    AppBar
    v-content
      router-view
</template>

<script>
import NavDrawer from "./components/NavDrawer";
import AppBar from "./components/AppBar";
import DynamicModal from "./components/modals/DynamicModal";

export default {
  name: "App",
  components: {
    AppBar,
    NavDrawer,
    DynamicModal
  },
  created() {
    // Get all data for app ASAP
    this.$store.dispatch("initApp");
  }
};
</script>

<style lang="stylus"></style>
