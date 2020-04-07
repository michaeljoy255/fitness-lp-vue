<template lang="pug">
  v-app-bar(app clipped-left color="secondary")
  
    v-app-bar-nav-icon(@click="toggleDrawer()")

    //- App
    span(v-if="notActiveWorkout")
      //- Alter what is shown based on device size
      v-toolbar-title.d-sm-none Fitness LP
      v-toolbar-title.d-none.d-sm-flex Fitness Linear Progression

    //- Active Workout
    span(v-else)
      //- Alter what is shown based on device size
      .mt-1.text-no-wrap.d-sm-none {{ workout.name }}
      .mt-1.text-no-wrap.d-none.d-sm-flex {{ workout.name }}

    v-spacer

    //- App
    span(v-if="notActiveWorkout")
      span.d-sm-none {{ new Date().toLocaleDateString() }}
      span.d-none.d-sm-flex {{ this.getLongDateMixin() }}

    //- Active Workout
    v-btn(v-else @click.stop="openModal()" icon absolute right)
      v-icon clear
</template>

<script>
import { formattersMixin } from "../../mixins/FormattersMixin";

export default {
  name: "AppBar",
  mixins: [formattersMixin],
  methods: {
    toggleDrawer() {
      this.$store.dispatch("toggleDrawer");
    },
    openModal() {
      this.$store.dispatch("modal/open", {
        component: "ConfirmAction",
        title: "Cancel this Workout?",
        content: `Click confirm to discard any exercise progress and return to
                  the dashboard.`,
        action: "workout/cancel"
      });
    }
  },
  computed: {
    notActiveWorkout() {
      return this.$route.name !== "ActiveWorkout";
    },
    workout() {
      return this.$store.state.workout;
    }
  }
};
</script>
