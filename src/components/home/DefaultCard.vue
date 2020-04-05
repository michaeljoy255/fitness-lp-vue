<template lang="pug">
  v-card(shaped)
    v-card-title No Workouts Found

    v-card-subtitle Would you like to prefill the app with default data to start?

    v-card-text
      | Push the button below to load defaults for exercises and workouts. You
      | can also enter your own exercises and workouts into the app using the
      | options in the menu in the top left of the screen.
      
    v-card-actions
      ConfirmAction(
        :rounded="true"
        :text="false"
        :color="'success'"
        :buttonText="'Use Defaults'"
        :buttonIcon="'system_update_alt'"
        :title="'Generate Default Exercises and Workouts?'"
        :content="'Using defaults will overwrite any existing exercises or workouts you have created. Click Confirm to generate the defaults.'"
        :action="'available/setDefaults'"
      )
</template>

<script>
import ConfirmAction from "../modals/ConfirmAction";

export default {
  name: "DefaultCard",
  components: {
    ConfirmAction
  }
};
</script>

<style></style>
