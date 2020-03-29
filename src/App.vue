<template lang="pug">
  v-app
    NavDrawer
    AppBar
    v-content
      router-view
</template>

<script>
import NavDrawer from "./components/NavDrawer";
import AppBar from "./components/AppBar";

export default {
  name: "App",
  components: {
    AppBar,
    NavDrawer
  },
  created() {
    // Get data for the app
    /**
     * @todo
     */
  }
};
</script>

<style lang="stylus"></style>
