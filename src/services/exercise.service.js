import { DefaultExercises } from "../constants";
import { getStorageByKey } from "../helpers";

export default {
  /**
   * Fetches exercise data from storage
   * @returns {Promise<Array>} Exercise data
   * @example
   * let ex = await ExerciseService.getExercises();
   */
  getExercises() {
    return new Promise(resolve => {
      resolve(getStorageByKey("exercises"));
    });
  },

  addExercises() {
    return new Promise((resolve, reject) => {
      resolve() || reject(); // not implemented
    });
  },

  deleteExercises() {
    return new Promise((resolve, reject) => {
      resolve() || reject(); // not implemented
    });
  },

  updateExercises() {
    return new Promise((resolve, reject) => {
      resolve() || reject(); // not implemented
    });
  },

  /**
   * Initializes default exercises if no exercise data is present
   * @returns {Promise<Array>} Default exercise data
   * @example
   * let ex = await ExerciseService.initDefaultExercises();
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
  }
};
