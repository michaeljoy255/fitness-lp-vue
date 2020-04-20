// import WorkoutRecordService from "../../services/workout-record.service";
// import { isArrayWithData } from "../../helpers";

/**
 * Measurement Records Module
 */

export const namespaced = true;

export const state = {
  measurements: null
};

export const mutations = {
  SET(state, measurementRecords) {
    state.measurements = measurementRecords;
  },
  CLEAR(state) {
    state.workouts = [];
  }
};

export const actions = {
  // initWorkouts({ commit }, workoutRecords) {
  //   if (isArrayWithData(workoutRecords)) {
  //     commit("SET", workoutRecords);
  //   } else {
  //     commit("CLEAR");
  //   }
  // },
  // delete({ commit }) {
  //   commit("CLEAR");
  //   WorkoutRecordService.delete(); // Don't need to await
  // }
};

export const getters = {
  // getPreviousRecordById: state => id => {
  //   const filteredWorkouts = state.workouts.filter(
  //     workout => workout.workoutId === id
  //   );
  //   /**
  //    * @todo WIP
  //    */
  //   console.log("id:", id);
  //   console.log("workouts:", state.workouts);
  //   console.log("F-Ws:", filteredWorkouts);
  //   return "TEST";
  // }
};
