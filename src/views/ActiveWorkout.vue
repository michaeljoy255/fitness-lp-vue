<template lang="pug">
  v-container.mx-auto
    v-stepper.pb-0(v-model="step" vertical non-linear)
    
      WorkoutStep(
        v-for="(exercise, i) in active.exercises"
        :key="i"
        :step="i+1"
        :exerciseId="exercise.id"
        :name="exercise.name"
      )

      SummaryStep(:step="active.exercises.length+1")

      v-container.d-flex
        v-spacer
        v-btn(@click.stop="confirm" rounded color="success" width="240")
          span Finish Workout
          v-icon(right) check
        v-spacer

    WorkoutFooter(:begin="active.begin")
</template>

<script>
import WorkoutStep from "../components/active-workout/WorkoutStep";
import SummaryStep from "../components/active-workout/SummaryStep";
import WorkoutFooter from "../components/active-workout/WorkoutFooter";

export default {
  name: "ActiveWorkout",
  components: {
    WorkoutStep,
    SummaryStep,
    WorkoutFooter
  },

  /**
   * Created hook prepares the Active Workout view
   * - Fresh workouts get initialized using route params
   * - Resumed workouts get loaded from state
   */
  created() {
    if (this.$route.params.exerciseIds) {
      // Fresh Workout - Only has the exerciseIds ready
      this.$store.dispatch("active/start", {
        id: this.$route.params.id,
        name: this.$route.params.name,
        exerciseIds: this.$route.params.exerciseIds
      });
    }
  },

  /**
   * Mounted hook handles the page loading with no workout and shuts the nav
   * - Return user to Dashboard if a workout isn't loaded
   * - Closes the nav drawer
   */
  mounted() {
    if (!this.$store.state.active.id) {
      // No workout id found, return to Dashboard
      this.$router.push("/dashboard");
    }

    this.$store.dispatch("setDrawerActive", false);
  },

  methods: {
    confirm() {
      this.$store.dispatch("modal/open", {
        component: "ConfirmAction",
        title: "Finish Workout",
        content: `Saves the results of this workout into your records and
                  returns you to the Dashboard.`,
        action: "active/submit"
      });
    }
  },

  computed: {
    step: {
      get() {
        return this.$store.state.active.step;
      },
      set(step) {
        this.$store.dispatch("active/setStep", step);
      }
    },

    active() {
      return this.$store.state.active;
    }
  }
};
</script>
