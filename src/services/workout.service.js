import { DefaultWorkouts } from "../constants";
import { getStorageByKey } from "../helpers";

/**
 * WorkoutService
 */
export default {
  /**
   * Initializes default workouts if no workout data is present
   * @returns {?Promise<Array>} Default workout data
   */
  initDefaultWorkouts() {
    return new Promise((resolve, reject) => {
      const data = getStorageByKey("workouts");

      if (!data) {
        // Workouts data is empty, fill with defaults
        /**
         * @todo Save the defaults to local storage now
         */
        resolve(DefaultWorkouts.workouts);
      } else {
        // Workouts data already exists!
        reject(
          new Error(
            "Can't initialize default workouts with previous data present."
          )
        );
      }
    });
  },

  /**
   * Fetches workout data from storage
   * @returns {?Promise<Array>} Workout data
   */
  getWorkouts() {
    return new Promise(resolve => {
      resolve(getStorageByKey("workouts"));
    });
  }
};
