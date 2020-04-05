<template lang="pug">
  v-dialog(v-model="isActive" persistent light max-width="500")

    template(v-slot:activator="{ on }")
      v-btn(
        v-on="on"
        :rounded="rounded"
        :text="text"
        :color="color"
        :block="block"
      )
        span {{ buttonText }}
        v-icon(right) {{ buttonIcon }}

    v-card
      v-card-title {{ title }}
      v-card-text {{ content }}
      v-card-actions
        v-spacer
        v-btn.ml-3.mb-3(@click="isActive = false" text rounded)
          span Cancel
        v-btn.ml-3.mb-3(@click="confirmModal()" color="warning" rounded)
          span Confirm
</template>

<script>
export default {
  name: "ConfirmAction",
  props: {
    rounded: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ""
    },
    block: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      required: true
    },
    buttonIcon: {
      type: String,
      default: ""
    },
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
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    confirmModal() {
      this.isActive = false;
      this.$store.dispatch(this.action);
    }
  }
};
</script>

<style></style>
