import { isArrayWithData } from "../../helpers";

/**
 * Records module for the store is for records of measurements, exercises, and workouts
 */

export const namespaced = true;

export const state = {
  measurements: null,
  exercises: null,
  workouts: null
};

export const mutations = {
  SET_MEASUREMENTS(state, measurements) {
    state.measurements = measurements;
  },
  SET_EXERCISES(state, exercises) {
    state.exercises = exercises;
  },
  SET_WORKOUTS(state, workouts) {
    state.workouts = workouts;
  },
  CLEAR_MEASUREMENTS(state) {
    state.measurements = [];
  },
  CLEAR_EXERCISES(state) {
    state.exercises = [];
  },
  CLEAR_WORKOUTS(state) {
    state.workouts = [];
  }
};

export const actions = {
  setMeasurements({ commit }, measurements) {
    if (isArrayWithData(measurements)) {
      commit("SET_MEASUREMENTS", measurements);
    } else {
      commit("CLEAR_MEASUREMENTS");
    }
  },

  setExercises({ commit }, exercises) {
    if (isArrayWithData(exercises)) {
      commit("SET_EXERCISES", exercises);
    } else {
      commit("CLEAR_EXERCISES");
    }
  },

  setWorkouts({ commit }, workouts) {
    if (isArrayWithData(workouts)) {
      commit("SET_WORKOUTS", workouts);
    } else {
      commit("CLEAR_WORKOUTS");
    }
  }
};

export const getters = {};
