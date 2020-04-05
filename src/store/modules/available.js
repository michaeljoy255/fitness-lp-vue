import ExerciseService from "../../services/exercise.service";
import WorkoutService from "../../services/workout.service";
import { isObjectWithData, isArrayWithData } from "../../helpers";

/**
 * Available module for the store is for all available exercises and workouts
 */

export const namespaced = true;

export const state = {
  exercises: null,
  workouts: null
};

export const mutations = {
  SET_EXERCISES(state, exercises) {
    state.exercises = exercises;
  },
  SET_WORKOUTS(state, workouts) {
    state.workouts = workouts;
  },
  CLEAR_EXERCISES(state) {
    state.exercises = [];
  },
  CLEAR_WORKOUTS(state) {
    state.workouts = [];
  }
};

export const actions = {
  async setDefaults({ dispatch }) {
    const servExercises = ExerciseService.initDefaultExercises();
    const servWorkouts = WorkoutService.initDefaultWorkouts();

    // Promise all with async / await
    const exercises = await servExercises;
    const workouts = await servWorkouts;

    dispatch("setExercises", exercises);
    dispatch("setWorkouts", workouts);
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
  },

  clearAvailable({ commit }) {
    commit("CLEAR_WORKOUTS");
    commit("CLEAR_EXERCISES");
  }
};

export const getters = {
  getWorkoutById: state => id => {
    return state.workouts.find(workout => workout.id === id);
  },

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
