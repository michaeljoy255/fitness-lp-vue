import { getStorageByKey } from "../helpers";

/**
 * RecordService
 */
export default {
  /**
   * Fetches measurement records from storage
   * @returns {?Promise<Array>} Measurement records
   */
  getMeasurements() {
    return new Promise(resolve => {
      resolve(getStorageByKey("measurements"));
    });
  },

  /**
   * Fetches exercise records from storage
   * @returns {?Promise<Array>} Exercise records
   */
  getExercises() {
    return new Promise(resolve => {
      resolve(getStorageByKey("exercises"));
    });
  },

  /**
   * Fetches workout records from storage
   * @returns {?Promise<Array>} Workout records
   */
  getWorkouts() {
    return new Promise(resolve => {
      resolve(getStorageByKey("workouts"));
    });
  }
};
