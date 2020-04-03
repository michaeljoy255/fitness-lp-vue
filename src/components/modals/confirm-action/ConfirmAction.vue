<template lang="pug">
  v-card
    v-card-title Modal Parent
    v-card-subtitle Want to do some kind of dynamic components in the modal...
    v-btn.ml-3.mb-3(color="secondary" rounded)
      span Confirm
    v-btn.ml-3.mb-3(@click="$store.dispatch('closeModal')" text rounded)
      span Cancel
</template>

<script>
export default {
  name: "ConfirmAction"
};
</script>

<style></style>
