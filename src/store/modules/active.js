import ActiveService from "../../services/active.service";
import WorkoutRecordService from "../../services/workout-record.service";
import EventBusService from "../../services/event-bus.service";
import { isObjectWithData, WorkoutRecord } from "../../helpers";

/**
 * Active module is for active workouts
 */

export const namespaced = true;

export const state = {
  id: null,
  name: null,
  step: null,
  beginTime: null,
  exercises: null,
  previous: null,
  records: null
};

export const mutations = {
  SET(state, active) {
    state.id = active.id;
    state.name = active.name;
    state.step = active.step;
    state.beginTime = active.beginTime;
    state.exercises = active.exercises;
    state.previous = active.previous;
    state.records = active.records;
  },
  CLEAR(state) {
    state.id = "";
    state.name = "";
    state.step = 1; // 1 is the lowest valid step for steppers
    state.beginTime = null;
    state.exercises = [];
    state.previous = [];
    state.records = [];
  },
  SET_STEP(state, step) {
    state.step = step;
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
        exercises: active.exercises,
        previous: active.previous,
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
      exercises: rootGetters["exercise/getExercisesByIds"](exerciseIds),
      previous: [],
      records: []
    };

    commit("SET", startState);
    ActiveService.update(startState); // Don't need to await
  },

  cancel({ dispatch }) {
    EventBusService.$emit("toRoutePath", "/dashboard");
    dispatch("delete");
  },

  submit({ state, dispatch }) {
    WorkoutRecordService.create(
      new WorkoutRecord({
        workoutId: state.id,
        duration: new Date().getTime() - state.beginTime
      })
    );
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
