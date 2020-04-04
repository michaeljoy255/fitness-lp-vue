/**
 * Workout module for the store is for active workouts
 */

export const namespaced = true;

export const state = {
  id: null,
  name: null,
  step: null,
  beginTime: null,
  endTime: null,
  exercises: null,
  records: null
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
    state.name = null;
    state.step = null;
    state.beginTime = null;
    state.endTime = null;
    state.exercises = null;
    state.records = null;
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
    commit("CLEAR_WORKOUT");
  },
  submitWorkout({ commit }) {
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
