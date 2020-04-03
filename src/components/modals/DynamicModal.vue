<template lang="pug">
  v-dialog(v-model="modalActive")
    component(:is="modalComponent")
</template>

<script>
export default {
  name: "DynamicModal",
  components: {
    ConfirmAction: () => import("./confirm-action/ConfirmAction")
  },
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
      set() {
        this.$store.dispatch("closeModal");
      }
    },
    modalComponent() {
      return this.$store.state.modalComponent;
    }
  }
};
</script>

<style></style>
