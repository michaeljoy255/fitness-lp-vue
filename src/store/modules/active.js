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
  SET(state, active) {
    state.id = active.id;
    state.name = active.name;
    state.step = active.step;
    state.beginTime = active.beginTime;
    state.endTime = active.endTime;
    state.exercises = active.exercises;
    state.records = active.records;
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
  init({ commit }, active) {
    if (isObjectWithData(active)) {
      commit("SET", {
        id: active.id,
        name: active.name,
        step: active.step,
        beginTime: active.beginTime,
        endTime: active.endTime,
        exercises: active.exercises,
        records: active.records
      });
    } else {
      commit("CLEAR");
    }
  },

  start({ commit, rootGetters }, { id, name, exerciseIds }) {
    const startState = {
      id,
      name,
      step: 1,
      beginTime: new Date().getTime(),
      endTime: null,
      exercises: rootGetters["exercise/getExercisesByIds"](exerciseIds),
      records: []
    };

    commit("SET", startState);
    ActiveService.update(startState); // Don't need to await
  },

  cancel({ dispatch }) {
    EventBusService.$emit("toRoutePath", "/dashboard");
    dispatch("delete");
  },

  /**
   * @todo Save workout results to records and storage
   */
  submit({ commit, dispatch }) {
    commit("SET_END");
    // Save records seperate from active here...
    EventBusService.$emit("toRoutePath", "/dashboard");
    dispatch("delete");
  },

  delete({ commit }) {
    commit("CLEAR");
    ActiveService.delete(); // Don't need to await
  },

  setStep({ state, commit }, step) {
    commit("SET_STEP", step);
    ActiveService.update(state); // Don't need to await
  }
};

export const getters = {};
