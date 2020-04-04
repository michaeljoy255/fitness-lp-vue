<template lang="pug">
  v-card
    v-card-title {{ $store.state.modal.title }}
    v-card-text {{ $store.state.modal.content }}
    v-btn.ml-3.mb-3(@click="modalConfirmed()" color="warning" rounded)
      span Confirm
    v-btn.ml-3.mb-3(@click="closeModal()" text rounded)
      span Cancel
</template>

<script>
export default {
  name: "ConfirmAction",
  methods: {
    modalConfirmed() {
      this.$store.dispatch(this.$store.state.modal.action);
      this.$store.dispatch("modal/close");
    },
    closeModal() {
      this.$store.dispatch("modal/close");
    }
  }
};
</script>

<style></style>
