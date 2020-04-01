/**
 * Available module for the store is for all available exercises and workouts
 * @module
 */
export default {
  namespaced: true,
  state: {
    exercises: null,
    workouts: null
  },
  //############################################################################
  mutations: {
    SET_EXERCISES(state, exercises) {
      state.exercises = exercises;
    },
    SET_WORKOUTS(state, workouts) {
      state.workouts = workouts;
    }
  },
  //############################################################################
  actions: {
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
