<template lang="pug">
  v-dialog(v-model="modalActive" width="500" light)
    component(:is="modalComponent")
</template>

<script>
export default {
  /**
   * The Dismissible Modal is meant to be used for small modals that have
   * only one simple action to complete them (such as confirming an action).
   * Dismissible means you can click outside of them to close them.
   */
  name: "DismissibleModal",
  components: {
    ConfirmAction: () => import("./ConfirmAction")
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
