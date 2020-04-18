import ActiveService from "../../services/active.service";
import WorkoutRecordService from "../../services/workout-record.service";
import EventBusService from "../../services/event-bus.service";
import { isObjectWithData, WorkoutRecord } from "../../helpers";
import { DateTime, Interval } from "luxon";

/**
 * Active module is for active workouts
 */

export const namespaced = true;

export const state = {
  id: null,
  name: null,
  step: null,
  begin: null,
  exercises: null,
  previous: null,
  records: null
};

export const mutations = {
  SET(state, active) {
    state.id = active.id;
    state.name = active.name;
    state.step = active.step;
    state.begin = active.begin;
    state.exercises = active.exercises;
    state.previous = active.previous;
    state.records = active.records;
  },
  CLEAR(state) {
    state.id = "";
    state.name = "";
    state.step = 1; // 1 is the lowest valid step for steppers
    state.begin = null;
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
        begin: active.begin,
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
      begin: DateTime.local().toISO(),
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

  async submit({ state, dispatch }) {
    const endTime = DateTime.local(); // Not from ISO
    const beginTime = DateTime.fromISO(state.begin);

    const timeObject = Interval.fromDateTimes(beginTime, endTime)
      .toDuration(["hours", "minutes", "seconds"])
      .toObject();

    WorkoutRecordService.create(
      new WorkoutRecord({
        workoutId: state.id,
        duration: timeObject
      })
    );

    // Update state with newly submitted record
    const servWorkRecs = WorkoutRecordService.get();
    const workRecs = await servWorkRecs;
    dispatch("workoutRecord/initWorkouts", workRecs, { root: true });

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
