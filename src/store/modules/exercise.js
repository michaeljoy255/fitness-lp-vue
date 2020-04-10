import ExerciseService from "../../services/exercise.service";
import { isObjectWithData, isArrayWithData } from "../../helpers";

/**
 * Exercise module is for all available exercises
 */

export const namespaced = true;

export const state = {
  exercises: null
};

export const mutations = {
  SET(state, exercises) {
    state.exercises = exercises;
  },
  CLEAR(state) {
    state.exercises = [];
  }
};

export const actions = {
  async defaults({ commit }) {
    const exercises = await ExerciseService.initDefaults();
    commit("SET", exercises);
  },

  init({ commit }, exercises) {
    if (isArrayWithData(exercises)) {
      commit("SET", exercises);
    } else {
      commit("CLEAR");
    }
  },

  delete({ commit }) {
    commit("CLEAR");
    ExerciseService.delete(); // Don't need to await
  }
};

export const getters = {
  getExerciseById: state => id => {
    return state.exercises.find(exercise => exercise.id === id);
  },

  getExercisesByIds: (state, getters) => ids => {
    let exercises = [];

    if (isArrayWithData(ids)) {
      exercises = ids.map(id => {
        return getters.getExerciseById(id);
      });
    }

    return exercises;
  },

  getExercisesByWorkoutId: (state, getters) => id => {
    const workout = getters.getWorkoutById(id);
    let exercises = [];

    if (isObjectWithData(workout)) {
      exercises = workout.exerciseIds.map(exerId => {
        return getters.getExerciseById(exerId);
      });
    }

    return exercises;
  }
};
