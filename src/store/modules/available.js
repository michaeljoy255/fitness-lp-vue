/**
 * Available module for the store is for all available exercises and workouts
 */
import ExerciseService from "../../services/exercise.service";
import WorkoutService from "../../services/workout.service";

export const namespaced = true;

export const state = {
  exercises: [],
  workouts: []
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

    if (exercises && workouts) {
      dispatch("setExercises", exercises);
      dispatch("setWorkouts", workouts);
    }
  },
  setExercises({ commit }, exercises) {
    commit("SET_EXERCISES", exercises);
  },
  setWorkouts({ commit }, workouts) {
    commit("SET_WORKOUTS", workouts);
  },
  clearAll({ commit }) {
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
  getExercisesByWorkoutId: (state, getters) => id => {
    let workout = {};
    let exercises = [];

    workout = getters.getWorkoutById(id);

    exercises = workout.exerciseIds.map(exerId => {
      return getters.getExerciseById(exerId);
    });

    return exercises;
  }
};
