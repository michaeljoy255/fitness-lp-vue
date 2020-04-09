import Vue from "vue";
import Vuex from "vuex";
import * as modal from "./modules/modal";
import * as selected from "./modules/selected";
import * as available from "./modules/available";
import * as records from "./modules/records";
import * as workout from "./modules/workout";
import ExerciseService from "../services/exercise.service";
import WorkoutService from "../services/workout.service";
import RecordService from "../services/record.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDrawerActive: false // Nav Drawer
  },

  mutations: {
    DRAWER_ACTIVE_TRUE(state) {
      state.isDrawerActive = true;
    },
    DRAWER_ACTIVE_FALSE(state) {
      state.isDrawerActive = false;
    }
  },

  actions: {
    async initApp({ dispatch }) {
      const servMeasurementRecs = RecordService.getMeasurements();
      const servExerciseRecs = RecordService.getExercises();
      const servWorkoutRecs = RecordService.getWorkouts();

      const servExercises = ExerciseService.getExercises();
      const servWorkouts = WorkoutService.getWorkouts();

      const servActiveWorkout = WorkoutService.getActiveWorkout();

      // Promise all with async / await
      const measurementRecords = await servMeasurementRecs;
      const exerciseRecords = await servExerciseRecs;
      const workoutRecords = await servWorkoutRecs;

      const exercises = await servExercises;
      const workouts = await servWorkouts;

      const activeWorkout = await servActiveWorkout;

      dispatch("records/setMeasurements", measurementRecords);
      dispatch("records/setExercises", exerciseRecords);
      dispatch("records/setWorkouts", workoutRecords);
      dispatch("available/setExercises", exercises);
      dispatch("available/setWorkouts", workouts);
      dispatch("workout/setWorkout", activeWorkout);
    },

    setDrawerActive({ commit }, bool) {
      if (bool) {
        commit("DRAWER_ACTIVE_TRUE");
      } else {
        commit("DRAWER_ACTIVE_FALSE");
      }
    },

    toggleDrawer({ state, commit }) {
      if (state.isDrawerActive) {
        commit("DRAWER_ACTIVE_FALSE");
      } else {
        commit("DRAWER_ACTIVE_TRUE");
      }
    }
  },

  getters: {},

  modules: {
    modal,
    selected,
    available,
    records,
    workout
  }
});
