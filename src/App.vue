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
  components: { AppBar, NavDrawer }
};
</script>

<style lang="stylus"></style>
