<template lang="pug">
  v-container.mx-auto
    v-card(shaped)
      v-card-title 404 Page Not Found

      v-card-subtitle Please return to the home page.
      
      v-card-actions
        v-container
          v-btn(to="/" color="primary" rounded)
            span Home
            v-icon(right) home
</template>

<script>
export default {
  name: "About"
};
</script>

<style></style>
