<template lang="pug">
  v-container(fluid)
    v-card(shaped)
      v-card-title 404 Page Not Found
      v-card-subtitle Please try returning to the home page.
      v-btn.ml-3.mb-3(to="/" color="primary" rounded)
        span Home
        v-icon(right) home
</template>

<script>
export default {
  name: "About"
};
</script>

<style></style>
