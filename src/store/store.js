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
    // Core Data
    records: null,
    measurements: null,
    workouts: null,
    exercises: null,
    // Current Workout
    workout: {
      id: null,
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
    SET_WORKOUT_EXERCISES(state, exercises) {
      state.workout.exercises = exercises;
    },
    SET_WORKOUT_ID(state, id) {
      state.workout.id = id;
    },
    SET_WORKOUT_NAME(state, name) {
      state.workout.name = name;
    },
    RESUME_WORKOUT() {
      /**
       * @todo
       */
    },
    SUBMIT_WORKOUT() {
      /**
       * @todo
       */
    },
    // Timer
    SET_START_TIME(state, time) {
      state.workout.startTime = time;
    },
    SET_STOP_TIME(state, time) {
      state.workout.endTime = time;
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
    submitWorkout({ commit }) {
      /**
       * @todo Save records of the workout and each exercise
       */
      commit("SUBMIT_WORKOUT");
    },
    resumeWorkout({ commit }) {
      /**
       * @todo Maybe a resume workout card on the home page (if valid workout)?
       */
      commit("RESUME_WORKOUT");
    },
    cancelWorkout({ commit }) {
      commit("SET_WORKOUT_ID", null);
      commit("SET_WORKOUT_NAME", null);
      commit("SET_WORKOUT_STEP", null);
      commit("SET_EXERCISES", null);
      commit("SET_START_TIME", null);
      commit("SET_STOP_TIME", null);
    },
    startWorkout({ commit }, workout) {
      // Get workout exercises by exercise ids
      /**
       * @todo workout.exerciseIds
       */
      commit("SET_WORKOUT_ID", workout.id);
      commit("SET_WORKOUT_NAME", workout.name);
      commit("SET_WORKOUT_STEP", 1);
      commit("SET_START_TIME", new Date().getTime());
      commit("SET_STOP_TIME", null);
    },
    // Timer
    setStopTime({ commit }) {
      commit("SET_STOP_TIME");
    },
    setStartTime({ commit }) {
      commit("SET_START_TIME");
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
