import WorkoutService from "../../services/workout.service";
import { isObjectWithData, isArrayWithData } from "../../helpers";

/**
 * Workout module is for all available workouts
 */

export const namespaced = true;

export const state = {
  workouts: null
};

export const mutations = {
  SET(state, workouts) {
    state.workouts = workouts;
  },
  CLEAR(state) {
    state.workouts = [];
  }
};

export const actions = {
  async defaults({ commit }) {
    const workouts = await WorkoutService.initDefaults();
    commit("SET", workouts);
  },

  init({ commit }, workouts) {
    if (isArrayWithData(workouts)) {
      commit("SET", workouts);
    } else {
      commit("CLEAR");
    }
  },

  async delete({ commit }) {
    const workRemove = await WorkoutService.delete();
    // Making sure storage data is gone before clearing state data
    if (workRemove) {
      commit("CLEAR");
    }
  }
};

export const getters = {
  getWorkoutById: state => id => {
    return state.workouts.find(workout => workout.id === id);
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
