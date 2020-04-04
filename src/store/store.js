import Vue from "vue";
import Vuex from "vuex";
import * as selected from "./modules/selected";
import * as available from "./modules/available";
import * as records from "./modules/records";
import * as workout from "./modules/workout";
import * as modal from "./modules/modal";
import ExerciseService from "../services/exercise.service";
import WorkoutService from "../services/workout.service";
import RecordService from "../services/record.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerActive: false
  },
  //############################################################################
  mutations: {
    SET_DRAWER(state, drawerState) {
      state.drawerActive = drawerState;
    },
    DRAWER_ACTIVE_TRUE(state) {
      state.drawerActive = true;
    },
    DRAWER_ACTIVE_FALSE(state) {
      state.drawerActive = false;
    }
  },
  //############################################################################
  actions: {
    async initApp({ dispatch }) {
      console.info("Initializing App Data");
      const servMeasurementRecs = RecordService.getMeasurements();
      const servExerciseRecs = RecordService.getExercises();
      const servWorkoutRecs = RecordService.getWorkouts();

      const servExercises = ExerciseService.getExercises();
      const servWorkouts = WorkoutService.getWorkouts();

      // Promise all with async / await
      const measurementRecords = await servMeasurementRecs;
      const exerciseRecords = await servExerciseRecs;
      const workoutRecords = await servWorkoutRecs;

      const exercises = await servExercises;
      const workouts = await servWorkouts;

      if (measurementRecords) {
        dispatch("records/setMeasurements", measurementRecords);
      }
      if (exerciseRecords) {
        dispatch("records/setExercises", exerciseRecords);
      }
      if (workoutRecords) {
        dispatch("records/setWorkouts", workoutRecords);
      }
      if (exercises) {
        dispatch("available/setExercises", exercises);
      }
      if (workouts) {
        dispatch("available/setWorkouts", workouts);
      }
    },
    setDrawer({ commit }, drawerState) {
      commit("SET_DRAWER", drawerState);
    },
    toggleDrawer({ state, commit }) {
      if (state.drawerActive) {
        commit("DRAWER_ACTIVE_FALSE");
      } else {
        commit("DRAWER_ACTIVE_TRUE");
      }
    }
  },
  //############################################################################
  getters: {},
  modules: {
    selected,
    available,
    records,
    workout,
    modal
  }
});
