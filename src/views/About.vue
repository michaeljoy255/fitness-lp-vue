<template lang="pug">
  v-card(shaped)
    v-card-title About
    v-card-subtitle I built many versions of this app starting in fall 2019 as a way to learn JavaScript and it's ecosystem.
    v-card-text Fitness Linear Progression created by Michael Joy
    v-btn.ml-3.mb-3(href="https://github.com/michaeljoy255" target="_blank" color="primary" rounded)
      span GitHub
      v-icon(right) language
</template>

<script>
export default {
  name: "About"
};
</script>

<style></style>
