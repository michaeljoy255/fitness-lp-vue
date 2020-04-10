<template lang="pug">
  v-app-bar(app clipped-left color="secondary")
  
    v-app-bar-nav-icon(@click="toggleDrawer()")

    //- App
    span(v-if="!isActiveWorkout")
      //- Alter what is shown based on device size
      v-toolbar-title.d-sm-none Fitness LP
      v-toolbar-title.d-none.d-sm-flex Fitness Linear Progression

    //- Active Workout
    span(v-else)
      //- Alter what is shown based on device size
      .mt-1.text-no-wrap.d-sm-none {{ active.name }}
      .mt-1.text-no-wrap.d-none.d-sm-flex {{ active.name }}

    v-spacer

    //- App
    span(v-if="!isActiveWorkout")
      span.d-sm-none {{ new Date().toLocaleDateString() }}
      span.d-none.d-sm-flex {{ this.getLongDateMixin() }}

    //- Active Workout
    v-btn(v-else @click.stop="openModal()" icon absolute right)
      v-icon clear
</template>

<script>
import { datesMixin } from "../../mixins/datesMixin";

export default {
  name: "AppBar",
  mixins: [datesMixin],

  methods: {
    toggleDrawer() {
      this.$store.dispatch("toggleDrawer");
    },

    openModal() {
      this.$store.dispatch("modal/open", {
        component: "ConfirmAction",
        title: "Cancel Workout",
        content: `Cancels and discards this workout and returns you to the
                  Dashboard.`,
        action: "active/cancel"
      });
    }
  },

  computed: {
    isActiveWorkout() {
      return this.$route.name === "ActiveWorkout";
    },

    active() {
      return this.$store.state.active;
    }
  }
};
</script>
