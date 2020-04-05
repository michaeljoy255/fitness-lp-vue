/**
 * Records module for the store is for records of measurements, exercises, and workouts
 */

export const namespaced = true;

export const state = {
  measurements: [],
  exercises: [],
  workouts: []
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
  }
};

export const actions = {
  setMeasurements({ commit }, measurements) {
    commit("SET_MEASUREMENTS", measurements);
  },
  setExercises({ commit }, exercises) {
    commit("SET_EXERCISES", exercises);
  },
  setWorkouts({ commit }, workouts) {
    commit("SET_WORKOUTS", workouts);
  }
};

export const getters = {};
