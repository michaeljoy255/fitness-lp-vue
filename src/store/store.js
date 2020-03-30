import Vue from "vue";
import Vuex from "vuex";
import ExerciseService from "../services/exercise.service";
import WorkoutService from "../services/workout.service";
import MeasurementService from "../services/measurement.service";
import RecordService from "../services/record.service";

Vue.use(Vuex);

const exerciseService = new ExerciseService();
const workoutService = new WorkoutService();
const measurementService = new MeasurementService();
const recordService = new RecordService();

export default new Vuex.Store({
  state: {
    navDrawerActive: false,
    workouts: null,
    exercises: null,
    workout: {
      name: null,
      step: null,
      exercises: null,
      startTime: null,
      endTime: null
    }
  },
  //############################################################################
  mutations: {
    // Records
    SET_RECORDS(state, records) {
      state.exercises = records;
    },
    // Measurements
    SET_MEASUREMENTS(state, measurements) {
      state.exercises = measurements;
    },
    // Exercises
    SET_EXERCISES(state, exercises) {
      state.exercises = exercises;
    },
    // Workouts
    SET_WORKOUTS(state, workouts) {
      state.workouts = workouts;
    },
    SET_WORKOUT_STEP(state, step) {
      state.workout.step = step;
    },
    RESUME_WORKOUT(state) {
      state.workout = null; // not implemented
    },
    CANCEL_WORKOUT(state) {
      state.workout = null; // not implemented
    },
    SUBMIT_WORKOUT(state) {
      state.workout = null; // not implemented
    },
    START_WORKOUT(state) {
      state.workout = null; // not implemented
    },
    // Timer
    CLEAR_TIMES(state) {
      state.workout.startTime = null;
      state.workout.endTime = null;
    },
    SET_START_TIME(state) {
      state.workout.startTime = new Date().getTime();
    },
    SET_STOP_TIME(state) {
      state.workout.endTime = new Date().getTime();
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
    // App
    async initApp({ commit }) {
      const exercises = await exerciseService.getExercises();
      const workouts = await workoutService.getWorkouts();
      const measurements = await measurementService.getMeasurements();
      const records = await recordService.getRecords();

      commit("SET_EXERCISES", exercises);
      commit("SET_WORKOUTS", workouts);
      commit("SET_MEASUREMENTS", measurements);
      commit("SET_RECORDS", records);
    },
    // Defaults
    async setDefaults({ commit }) {
      const exercises = await exerciseService.initDefaultExercises();
      const workouts = await workoutService.initDefaultWorkouts();

      commit("SET_EXERCISES", exercises);
      commit("SET_WORKOUTS", workouts);
    },
    // Exercises
    // Workouts
    setWorkoutStep({ commit }, step) {
      commit("SET_WORKOUT_STEP", step);
    },
    resumeWorkout({ commit }) {
      commit("RESUME_WORKOUT");
    },
    cancelWorkout({ commit }) {
      commit("CANCEL_WORKOUT");
    },
    submitWorkout({ commit }) {
      commit("SUBMIT_WORKOUT");
    },
    startWorkout({ commit }, workout) {
      commit("START_WORKOUT", workout);
    },
    // Timer
    setStopTime({ commit }) {
      commit("SET_STOP_TIME");
    },
    setStartTime({ commit }) {
      commit("SET_START_TIME");
    },
    clearTimes({ commit }) {
      commit("CLEAR_TIMES");
    },
    // Nav Drawer
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
