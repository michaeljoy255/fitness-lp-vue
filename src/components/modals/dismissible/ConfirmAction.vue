<template lang="pug">
  v-card
    v-card-title {{ title }}

    v-card-text {{ content }}

    v-divider

    v-card-actions
      v-spacer
      v-btn(@click="$store.dispatch('modal/close')" text)
        span Cancel
      v-btn(@click="confirm" color="warning")
        span Confirm
</template>

<script>
export default {
  name: "ConfirmAction",

  methods: {
    confirm() {
      // Modal confirmed by user
      const { modal } = this.$store.state;

      this.$store.dispatch(modal.action);

      if (modal.route) {
        this.$router.replace(modal.route);
      }

      this.$store.dispatch("modal/close");
    }
  },

  computed: {
    title() {
      return this.$store.state.modal.title;
    },

    content() {
      return this.$store.state.modal.content;
    }
  }
};
</script>
