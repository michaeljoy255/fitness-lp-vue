<template lang="pug">
  v-dialog(v-model="modalActive")
    v-card
      v-card-title Modal Parent
      v-card-subtitle Want to do some kind of dynamic components in the modal...
      v-btn.ml-3.mb-3(color="secondary" rounded)
        span Confirm
      v-btn.ml-3.mb-3(@click="modalActive = false" text rounded)
        span Cancel
</template>

<script>
export default {
  name: "ModalParent",
  methods: {
    confirm() {
      console.log("Modal Confirmed!!!");
    }
  },
  computed: {
    modalActive: {
      get() {
        return this.$store.state.modalActive;
      },
      set(payload) {
        this.$store.dispatch("setModal", payload);
      }
    }
  }
};
</script>

<style></style>
