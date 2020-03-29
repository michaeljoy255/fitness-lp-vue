import Vue from "vue";
import Vuex from "vuex";
import ExerciseService from "../services/exercise.service";
import WorkoutService from "../services/workout.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timer: null,
    navDrawerActive: false,
    workouts: null,
    exercises: null,
    workout: {
      name: null,
      step: null,
      exercises: []
    }
  },
  //############################################################################
  mutations: {
    // Exercise
    SET_EXERCISES(state, exercises) {
      state.exercises = exercises;
    },
    // Workout
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
    SET_TIMER(state, time) {
      state.timer = time; // not implemented
    },
    RESET_TIMER(state) {
      state.timer = null; // not implemented
    },
    START_TIMER(state) {
      state.timer = null; // not implemented
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
    // Defaults
    async initDefaults({ commit }) {
      const exerciseService = new ExerciseService();
      const workoutService = new WorkoutService();
      const exercises = await exerciseService.initDefaultExercises();
      const workouts = await workoutService.initDefaultWorkouts();

      console.log("State - E:", exercises);
      console.log("State - W:", workouts);

      commit("SET_EXERCISES", exercises);
      commit("SET_WORKOUTS", workouts);
    },
    // Exercise
    // Workout
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
    setTimer({ commit }, time) {
      commit("SET_TIMER", time);
    },
    resetTimer({ commit }) {
      commit("RESET_TIMER");
    },
    startTimer({ commit }) {
      commit("START_TIMER");
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
