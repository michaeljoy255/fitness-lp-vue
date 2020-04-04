<template lang="pug">
  v-dialog(v-model="modalActive" width="500" light)
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
        return this.$store.state.modal.isActive;
      },
      set() {
        this.$store.dispatch("modal/close");
      }
    },
    modalComponent() {
      return this.$store.state.modal.component;
    }
  }
};
</script>

<style></style>
