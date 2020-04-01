/**
 * Records module for the store is for records of measurements, exercises, and workouts
 * @module
 */
export default {
  namespaced: true,
  state: {
    measurements: null,
    exercises: null,
    workouts: null
  },
  //############################################################################
  mutations: {
    SET_MEASUREMENTS(state, measurements) {
      state.measurements = measurements;
    },
    SET_EXERCISES(state, exercises) {
      state.exercises = exercises;
    },
    SET_WORKOUTS(state, workouts) {
      state.workouts = workouts;
    }
  },
  //############################################################################
  actions: {
    setMeasurements({ commit }, measurements) {
      commit("SET_MEASUREMENTS", measurements);
    },
    setExercises({ commit }, exercises) {
      commit("SET_EXERCISES", exercises);
    },
    setWorkouts({ commit }, workouts) {
      commit("SET_WORKOUTS", workouts);
    }
  },
  //############################################################################
  getters: {}
};
