import EventBusService from "../../services/event-bus.service";

/**
 * Workout module for the store is for active workouts
 */

export const namespaced = true;

export const state = {
  id: null,
  name: "",
  step: 1, // 1 is the lowest valid step
  beginTime: null,
  endTime: null,
  exercises: [],
  records: []
};

export const mutations = {
  SET_WORKOUT(state, workout) {
    state.id = workout.id;
    state.name = workout.name;
    state.step = workout.step;
    state.beginTime = workout.beginTime;
    state.endTime = workout.endTime;
    state.exercises = workout.exercises;
    state.records = workout.records;
  },
  CLEAR_WORKOUT(state) {
    state.id = null;
    state.name = "";
    state.step = 1;
    state.beginTime = null;
    state.endTime = null;
    state.exercises = [];
    state.records = [];
  },
  SET_STEP(state, step) {
    state.step = step;
  }
};

export const actions = {
  startWorkout({ commit }, { id, name, step, exercises, records }) {
    commit("SET_WORKOUT", {
      id,
      name,
      step,
      beginTime: new Date().getTime(),
      endTime: null,
      exercises,
      records
    });
  },
  cancelWorkout({ commit }) {
    EventBusService.$emit("storeChangedRoute", "/home");
    commit("CLEAR_WORKOUT");
  },
  submitWorkout({ commit }) {
    EventBusService.$emit("storeChangedRoute", "/home");
    /**
     * @todo Save workout results to local records and local storage
     */
    commit("CLEAR_WORKOUT");
  },
  setStep({ commit }, step) {
    commit("SET_STEP", step);
  }
};

export const getters = {};
