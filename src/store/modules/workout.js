import EventBusService from "../../services/event-bus.service";
import { isObjectWithData } from "../../helpers";

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
    /**
     * @todo defaults back to "" when done testing
     */
    state.id = "1";
    state.name = "Test";
    state.step = 1; // 1 is the lowest valid step for steppers
    state.beginTime = null;
    state.endTime = null;
    state.exercises = [];
    state.records = [];
  },
  SET_STEP(state, step) {
    state.step = step;
  }
};

export const actions = {
  setWorkout({ commit }, workout) {
    if (isObjectWithData(workout)) {
      commit("SET_WORKOUT", {
        id: workout.id,
        name: workout.name,
        step: workout.step,
        beginTime: workout.beginTime,
        endTime: workout.endTime,
        exercises: workout.exercises,
        records: workout.records
      });
    } else {
      commit("CLEAR_WORKOUT");
    }
  },

  start({ commit, rootGetters }, { id, name, exerciseIds }) {
    const exercises = rootGetters["available/getExercisesByIds"](exerciseIds);
    /**
     * @todo Getter for records
     */
    const records = [];

    commit("SET_WORKOUT", {
      id,
      name,
      step: 1,
      beginTime: new Date().getTime(),
      endTime: null,
      exercises,
      records
    });
  },

  cancel({ commit }) {
    EventBusService.$emit("toRoutePath", "/dashboard");
    commit("CLEAR_WORKOUT");
  },

  submit({ commit }) {
    EventBusService.$emit("toRoutePath", "/dashboard");
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
