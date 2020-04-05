import { DefaultExercises } from "../constants";
import { isArrayWithData } from "../helpers";

const ExerciseService = {
  /**
   * Initializes default exercises if no exercise data is present
   * @returns {Promise<Array>} Default exercise data
   * @example
   */
  initDefaultExercises() {
    return new Promise((resolve, reject) => {
      const exercises = localStorage.getItem("exercises");

      if (isArrayWithData(exercises)) {
        reject(new Error("Exercise data already exists."));
      } else {
        /**
         * @todo Save the defaults to local storage
         */
        resolve(DefaultExercises.exercises);
      }
    });
  },

  /**
   * Fetches exercise data from storage
   * @returns {Promise<Array>} Exercise data
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
  }
};

export default ExerciseService;
