import Vue from "vue";
import Vuex from "vuex";
import * as modal from "./modules/modal";
import * as selected from "./modules/selected";
import * as record from "./modules/record";
import * as workout from "./modules/workout";
import * as exercise from "./modules/exercise";
import * as active from "./modules/active";
import ExerciseService from "../services/exercise.service";
import WorkoutService from "../services/workout.service";
import ActiveService from "../services/active.service";
// import RecordService from "../services/record.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDrawerActive: false // Nav Drawer
  },

  mutations: {
    DRAWER_TRUE(state) {
      state.isDrawerActive = true;
    },
    DRAWER_FALSE(state) {
      state.isDrawerActive = false;
    }
  },

  actions: {
    async initApp({ dispatch }) {
      console.log("Initializing App Data...");
      // const servMeasurementRecs = RecordService.getMeasurements();
      // const servExerciseRecs = RecordService.getExercises();
      // const servWorkoutRecs = RecordService.getWorkouts();

      const servExercises = ExerciseService.get();
      const servWorkouts = WorkoutService.get();

      const servActiveWorkout = ActiveService.get();

      // Promise all with async / await
      // const measurementRecords = await servMeasurementRecs;
      // const exerciseRecords = await servExerciseRecs;
      // const workoutRecords = await servWorkoutRecs;

      const exercises = await servExercises;
      const workouts = await servWorkouts;

      const activeWorkout = await servActiveWorkout;

      // dispatch("records/setMeasurements", measurementRecords);
      // dispatch("records/setExercises", exerciseRecords);
      // dispatch("records/setWorkouts", workoutRecords);
      dispatch("exercise/init", exercises);
      dispatch("workout/init", workouts);
      dispatch("active/init", activeWorkout);
    },

    initDefaults({ dispatch }) {
      dispatch("exercise/defaults");
      dispatch("workout/defaults");
    },

    deleteStorage({ dispatch }) {
      dispatch("exercise/delete");
      dispatch("workout/delete");
      dispatch("active/delete");
      // dispatch("records/delete");
    },

    setDrawerActive({ commit }, bool) {
      if (bool) {
        commit("DRAWER_TRUE");
      } else {
        commit("DRAWER_FALSE");
      }
    },

    toggleDrawer({ state, commit }) {
      if (state.isDrawerActive) {
        commit("DRAWER_FALSE");
      } else {
        commit("DRAWER_TRUE");
      }
    }
  },

  getters: {},

  modules: {
    modal,
    selected,
    exercise,
    workout,
    record,
    active
  }
});
