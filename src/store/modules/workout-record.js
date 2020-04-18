import WorkoutRecordService from "../../services/workout-record.service";
import { isArrayWithData } from "../../helpers";

/**
 * Workout record module is for records of workouts
 */

export const namespaced = true;

export const state = {
  workouts: null
};

export const mutations = {
  SET(state, workoutRecords) {
    state.workouts = workoutRecords;
  },
  CLEAR(state) {
    state.workouts = [];
  }
};

export const actions = {
  initWorkouts({ commit }, workoutRecords) {
    if (isArrayWithData(workoutRecords)) {
      commit("SET", workoutRecords);
    } else {
      commit("CLEAR");
    }
  },

  delete({ commit }) {
    commit("CLEAR");
    WorkoutRecordService.delete(); // Don't need to await
  }
};

export const getters = {
  getPreviousRecordById: state => id => {
    const filteredWorkouts = state.workouts.filter(
      workout => workout.workoutId === id
    );

    console.log("filteredWorkouts:", filteredWorkouts);

    const mostRecentDate = new Date(
      Math.max.apply(
        null,
        filteredWorkouts.map(workout => {
          return new Date(workout.createdAt);
        })
      )
    );

    console.log("mostRecentDate:", mostRecentDate);

    const mostRecentWorkout = filteredWorkouts.filter(workout => {
      const date = new Date(workout.createdAt);
      return date.getTime() == mostRecentDate.getTime();
    })[0];

    console.log("mostRecentWorkout:", mostRecentWorkout);

    if (!mostRecentWorkout) {
      return "";
    } else {
      return mostRecentWorkout.createdAt;
    }
  }
};
