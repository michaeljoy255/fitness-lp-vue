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
    drawerActive: false,
    modalActive: false
  },
  //############################################################################
  mutations: {
    // Nav Drawer
    TOGGLE_ON_DRAWER(state) {
      state.drawerActive = true;
    },
    TOGGLE_OFF_DRAWER(state) {
      state.drawerActive = false;
    },
    SET_DRAWER(state, drawerState) {
      state.drawerActive = drawerState;
    },
    SET_MODAL(state, bool) {
      state.modalActive = bool;
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
    setDrawer({ commit }, drawerState) {
      commit("SET_DRAWER", drawerState);
    },
    toggleDrawer({ state, commit }) {
      if (state.drawerActive) {
        commit("TOGGLE_OFF_DRAWER");
      } else {
        commit("TOGGLE_ON_DRAWER");
      }
    },
    setModal({ commit }, bool) {
      commit("SET_MODAL", bool);
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
