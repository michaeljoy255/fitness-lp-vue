import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/**
 * Fake data
 * @todo implement fake data to use in the app as you build it
 */
let data = {
  exercises: [],
  workouts: []
};

export default new Vuex.Store({
  state: {
    timer: null,
    navDrawerActive: false,
    workouts: data.workouts, // temp data
    exercises: data.exercises, // temp data
    workout: {
      name: null,
      step: null,
      exercises: []
    }
  },
  //############################################################################
  mutations: {
    // Workout
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
