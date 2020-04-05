import { isArrayWithData } from "../helpers";

const RecordService = {
  /**
   * Fetches measurement records from storage
   * @returns {Promise<Array>} Measurement records
   */
  getMeasurements() {
    return new Promise(resolve => {
      const measurements = localStorage.getItem("measurements");

      if (isArrayWithData(measurements)) {
        resolve(measurements);
      } else {
        resolve([]);
      }
    });
  },

  /**
   * Fetches exercise records from storage
   * @returns {Promise<Array>} Exercise records
   */
  getExercises() {
    return new Promise(resolve => {
      const exercises = localStorage.getItem("exercises");

      if (isArrayWithData(exercises)) {
        resolve(exercises);
      } else {
        resolve([]);
      }
    });
  },

  /**
   * Fetches workout records from storage
   * @returns {Promise<Array>} Workout records
   */
  getWorkouts() {
    return new Promise(resolve => {
      const workouts = localStorage.getItem("workouts");

      if (isArrayWithData(workouts)) {
        resolve(workouts);
      } else {
        resolve([]);
      }
    });
  }
};

export default RecordService;
