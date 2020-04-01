/**
 * Workout module for the store is for active workouts
 * @module
 */
export default {
  namespaced: true,
  state: {
    id: null,
    name: null,
    step: null,
    beginTime: null,
    endTime: null,
    exercises: null,
    records: null
  },
  //############################################################################
  mutations: {
    SET_WORKOUT(state, workout) {
      state.id = workout.id;
      state.name = workout.name;
      state.step = workout.step;
      state.beginTime = workout.beginTime;
      state.endTime = workout.endTime;
      state.exercises = workout.exercises;
      state.records = workout.records;
    },
    SET_STEP(state, step) {
      state.step = step;
    }
  },
  //############################################################################
  actions: {
    startWorkout({ commit }, workout) {
      /**
       * @todo Need workout.exerciseIds and records
       */
      commit("SET_WORKOUT", {
        id: workout.id,
        name: workout.name,
        step: 1,
        beginTime: new Date().getTime(),
        endTime: null,
        exercises: null,
        records: null
      });
    },
    cancelWorkout({ commit }) {
      commit("SET_WORKOUT", {
        id: null,
        name: null,
        step: null,
        beginTime: null,
        endTime: null,
        exercises: null,
        records: null
      });
    },
    submitWorkout({ commit }) {
      /**
       * @todo Save workout results to local records and local storage
       */
      commit("SET_WORKOUT", {
        id: null,
        name: null,
        step: null,
        beginTime: null,
        endTime: null,
        exercises: null,
        records: null
      });
    },
    setStep({ commit }, step) {
      commit("SET_STEP", step);
    }
  },
  //############################################################################
  getters: {}
};
