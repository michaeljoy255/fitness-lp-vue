<template lang="pug">
  v-app
    ModalParent
    NavDrawer
    AppBar
    v-content
      router-view
</template>

<script>
import NavDrawer from "./components/NavDrawer";
import AppBar from "./components/AppBar";
import ModalParent from "./components/modals/ModalParent";

export default {
  name: "App",
  components: {
    AppBar,
    NavDrawer,
    ModalParent
  },
  created() {
    // Get all data for app ASAP
    this.$store.dispatch("initApp");
  }
};
</script>

<style lang="stylus"></style>
