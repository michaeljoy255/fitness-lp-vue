<template lang="pug">
  v-dialog(v-model="isActive" persistent light max-width="500")
    v-card
      v-card-title {{ title }}

      v-card-text {{ content }}

      v-divider

      v-card-actions
        v-spacer
        v-btn(@click="$store.dispatch('setModalActive', false)" text)
          span Cancel
        v-btn(@click="confirmModal()" color="warning")
          span Confirm
</template>

<script>
export default {
  name: "ConfirmAction",
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    }
  },
  methods: {
    confirmModal() {
      this.$store.dispatch("setModalActive", false);
      this.$store.dispatch(this.action);
    }
  },
  computed: {
    isActive: {
      get() {
        return this.$store.state.modalActive;
      },
      set(bool) {
        this.$store.dispatch("setModalActive", bool);
      }
    }
  }
};
</script>

<style></style>
