// import WorkoutRecordService from "../../services/workout-record.service";
// import { isArrayWithData } from "../../helpers";

/**
 * Exercise record module is for records of exercises
 */

export const namespaced = true;

export const state = {
  exercises: null
};

export const mutations = {
  SET(state, exerciseRecords) {
    state.exercises = exerciseRecords;
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