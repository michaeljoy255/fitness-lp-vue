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

  created() {
    const { workout, active } = this.$route.params;

    if (workout) {
      // Starting new workout by setting the active state
      this.$store.dispatch("active/start", {
        id: this.$route.params.workout.id,
        name: this.$route.params.workout.name,
        exerciseIds: this.$route.params.workout.exerciseIds
      });
    } else if (active) {
      // Resuming existing workout from active state
    } else {
      // No workouts found, returning to Dashboard
      this.$router.push("/dashboard");
    }
  },

  mounted() {
    // Shuts the nav when starting a workout
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
