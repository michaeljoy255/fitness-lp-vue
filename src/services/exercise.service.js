import { DefaultExercises } from "../constants";
import { getStorageByKey } from "../helpers";

/**
 * ExerciseService
 */
export default {
  /**
   * Initializes default exercises if no exercise data is present
   * @returns {?Promise<Array>} Default exercise data
   * @example
   */
  initDefaultExercises() {
    return new Promise((resolve, reject) => {
      const exercises = getStorageByKey("exercises");

      if (!exercises) {
        // Exercise data is empty, fill with defaults
        /**
         * @todo Save the defaults to local storage now
         */
        resolve(DefaultExercises.exercises);
      } else {
        // Exercises data already exists!
        reject(
          new Error(
            "Can't initialize default exercises with previous data present."
          )
        );
      }
    });
  },

  /**
   * Fetches exercise data from storage
   * @returns {?Promise<Array>} Exercise data
   */
  getExercises() {
    return new Promise(resolve => {
      resolve(getStorageByKey("exercises"));
    });
  }
};
