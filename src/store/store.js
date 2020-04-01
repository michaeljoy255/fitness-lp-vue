import Vue from "vue";
import Vuex from "vuex";
import selected from "./modules/selected";
import available from "./modules/available";
import records from "./modules/records";
import workout from "./modules/workout";
import ExerciseService from "../services/exercise.service";
import WorkoutService from "../services/workout.service";
import RecordService from "../services/record.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navDrawerActive: false
  },
  //############################################################################
  mutations: {
    // Nav Drawer
    TOGGLE_ON_NAV_DRAWER(state) {
      state.navDrawerActive = true;
    },
    TOGGLE_OFF_NAV_DRAWER(state) {
      state.navDrawerActive = false;
    },
    SET_NAV_DRAWER(state, drawerState) {
      state.navDrawerActive = drawerState;
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

      measurementRecords
        ? dispatch("records/setMeasurements", measurementRecords)
        : dispatch("records/setMeasurements", null);
      exerciseRecords
        ? dispatch("records/setExercises", exerciseRecords)
        : dispatch("records/setExercises", null);
      workoutRecords
        ? dispatch("records/setWorkouts", workoutRecords)
        : dispatch("records/setWorkouts", null);

      exercises
        ? dispatch("available/setExercises", exercises)
        : dispatch("available/setExercises", null);
      workouts
        ? dispatch("available/setWorkouts", workouts)
        : dispatch("available/setWorkouts", null);
    },
    async setDefaults({ dispatch }) {
      const servExercises = ExerciseService.initDefaultExercises();
      const servWorkouts = WorkoutService.initDefaultWorkouts();

      // Promise all with async / await
      const exercises = await servExercises;
      const workouts = await servWorkouts;

      if (exercises && workouts) {
        dispatch("available/setExercises", exercises);
        dispatch("available/setWorkouts", workouts);
      } else {
        console.error("Problem getting defaults!");
      }
    },
    // Component state actions
    setNavDrawer({ commit }, drawerState) {
      commit("SET_NAV_DRAWER", drawerState);
    },
    toggleNavDrawer({ state, commit }) {
      if (state.navDrawerActive) {
        commit("TOGGLE_OFF_NAV_DRAWER");
      } else {
        commit("TOGGLE_ON_NAV_DRAWER");
      }
    }
  },
  //############################################################################
  getters: {},
  modules: {
    selected,
    available,
    records,
    workout
  }
});
