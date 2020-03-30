import Vue from "vue";
import Vuex from "vuex";
import ExerciseService from "../services/exercise.service";
import WorkoutService from "../services/workout.service";
// import MeasurementService from "../services/measurement.service";
import RecordService from "../services/record.service";
import { Records, Selected, Available, ActiveWorkout } from "../helpers";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    records: new Records(), // Saved records of data
    selected: new Selected(), // Selected for creating, editing, or deleting data
    available: new Available(), // Available exercises and workouts
    activeWorkout: new ActiveWorkout(), // In progress workout
    // Component state vars
    navDrawerActive: false
  },
  //############################################################################
  mutations: {
    // Full object sets
    SET_RECORDS_OBJ(state, recordsObject) {
      state.records = recordsObject;
    },
    SET_SELECTED_OBJ(state, selectedObject) {
      state.selected = selectedObject;
    },
    SET_AVAILABLE_OBJ(state, availableObject) {
      state.available = availableObject;
    },
    SET_ACTIVE_WORKOUT_OBJ(state, activeWorkoutObject) {
      state.activeWorkout = activeWorkoutObject;
    },
    SET_WORKOUT_STEP(state, step) {
      state.activeWorkout.step = step;
    },
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
    async initApp({ commit }) {
      // Promise all with async / await
      const records = RecordService.getRecords();
      const allExercises = ExerciseService.getExercises();
      const allWorkouts = WorkoutService.getWorkouts();
      const activeWorkout = WorkoutService.getActiveWorkout();

      const recRes = await records;
      const allExerRes = await allExercises;
      const allWorkRes = await allWorkouts;
      const actWorkRes = await activeWorkout;

      if (recRes) {
        commit("SET_RECORDS_OBJ", new Records(records));
      } else {
        commit("SET_RECORDS_OBJ", new Records());
      }

      if (allExerRes && allWorkRes) {
        commit(
          "SET_AVAILABLE_OBJ",
          new Available({
            exercises: allExercises,
            workouts: allWorkouts
          })
        );
      } else {
        commit("SET_AVAILABLE_OBJ", new Available());
      }

      if (actWorkRes) {
        commit("SET_ACTIVE_WORKOUT_OBJ", new ActiveWorkout(activeWorkout));
      } else {
        commit("SET_ACTIVE_WORKOUT_OBJ", new ActiveWorkout());
      }
    },
    async setAvailableDefaults({ commit }) {
      // Promise all with async / await
      const defaultExercises = ExerciseService.initDefaultExercises();
      const defaultWorkouts = WorkoutService.initDefaultWorkouts();

      const defExerRes = await defaultExercises;
      const defWorkRes = await defaultWorkouts;

      if (defExerRes && defWorkRes) {
        commit(
          "SET_AVAILABLE_OBJ",
          new Available({
            exercises: defExerRes,
            workouts: defWorkRes
          })
        );
      } else {
        commit("SET_AVAILABLE_OBJ", new Available());
      }
    },
    setActiveWorkoutStep({ commit }, step) {
      commit("SET_WORKOUT_STEP", step);
    },
    cancelWorkout({ commit }) {
      commit("SET_ACTIVE_WORKOUT_OBJ", new ActiveWorkout());
    },
    startWorkout({ commit }, workout) {
      /**
       * @todo workout.exerciseIds and records
       */
      commit(
        "SET_ACTIVE_WORKOUT_OBJ",
        new ActiveWorkout({
          id: workout.id,
          name: workout.name,
          step: 1,
          beginTime: new Date().getTime(),
          endTime: null,
          exercises: null,
          records: null
        })
      );
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
  modules: {}
});
