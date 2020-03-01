<template lang="pug">
  .home
    img(alt="Vue Logo" src="../assets/logo.png")
    HelloWorld(msg="Welcome to this Vue.js App")
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
