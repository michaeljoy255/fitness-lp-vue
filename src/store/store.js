import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timer: null,
    navDrawerActive: false,
    workouts: [],
    exercises: [],
    currentWorkout: {
      title: null,
      category: null,
      exercises: []
    }
  },
  //############################################################################
  mutations: {
    // Workout
    RESUME_WORKOUT(state) {
      state.currentWorkout = null; // not implemented
    },
    CANCEL_WORKOUT(state) {
      state.currentWorkout = null; // not implemented
    },
    SUBMIT_WORKOUT(state) {
      state.currentWorkout = null; // not implemented
    },
    START_WORKOUT(state) {
      state.currentWorkout = null; // not implemented
    },
    // Timer
    STOP_TIMER(state) {
      state.appBar.timer = null; // not implemented
    },
    START_TIMER(state) {
      state.appBar.timer = null; // not implemented
    },
    // Nav Drawer
    TOGGLE_ON_NAV_DRAWER(state) {
      state.navDrawerActive = true;
    },
    TOGGLE_OFF_NAV_DRAWER(state) {
      state.navDrawerActive = false;
    },
    SET_NAV_DRAWER(state, payload) {
      state.navDrawerActive = payload;
    }
  },
  //############################################################################
  actions: {
    // Workout
    resumeWorkout({ commit }) {
      commit("RESUME_WORKOUT");
    },
    cancelWorkout({ commit }) {
      commit("CANCEL_WORKOUT");
    },
    submitWorkout({ commit }) {
      commit("SUBMIT_WORKOUT");
    },
    startWorkout({ commit }, payload) {
      commit("START_WORKOUT", payload);
    },
    // Timer
    stopTimer({ commit }) {
      commit("STOP_TIMER");
    },
    startTimer({ commit }) {
      commit("START_TIMER");
    },
    // Nav Drawer
    setNavDrawer({ commit }, payload) {
      commit("SET_NAV_DRAWER", payload);
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
