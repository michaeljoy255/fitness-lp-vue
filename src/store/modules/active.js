import ActiveService from "../../services/active.service";
import EventBusService from "../../services/event-bus.service";
import { isObjectWithData } from "../../helpers";

/**
 * Active module is for active workouts
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
  SET(state, workout) {
    state.id = workout.id;
    state.name = workout.name;
    state.step = workout.step;
    state.beginTime = workout.beginTime;
    state.endTime = workout.endTime;
    state.exercises = workout.exercises;
    state.records = workout.records;
  },
  CLEAR(state) {
    state.id = "";
    state.name = "";
    state.step = 1; // 1 is the lowest valid step for steppers
    state.beginTime = null;
    state.endTime = null;
    state.exercises = [];
    state.records = [];
  },
  SET_STEP(state, step) {
    state.step = step;
  },
  SET_END(state) {
    state.endTime = new Date().getTime();
  }
};

export const actions = {
  init({ commit }, workout) {
    if (isObjectWithData(workout)) {
      commit("SET", {
        id: workout.id,
        name: workout.name,
        step: workout.step,
        beginTime: workout.beginTime,
        endTime: workout.endTime,
        exercises: workout.exercises,
        records: workout.records
      });
    } else {
      commit("CLEAR");
    }
  },

  /**
   * @todo Getter for records
   */
  start({ commit, rootGetters }, { id, name, exerciseIds }) {
    const exercises = rootGetters["exercise/getExercisesByIds"](exerciseIds);
    const records = []; // ***

    commit("SET", {
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
    commit("CLEAR");
  },

  /**
   * @todo Save workout results to records and storage
   */
  submit({ commit }) {
    EventBusService.$emit("toRoutePath", "/dashboard");
    commit("SET_END");
    // ***
    commit("CLEAR");
  },

  async delete({ commit }) {
    const activeDelete = await ActiveService.delete();

    // Making sure storage data is gone before clearing state data
    if (activeDelete) {
      commit("CLEAR");
    }
  },

  setStep({ commit }, step) {
    commit("SET_STEP", step);
  }
};

export const getters = {};
