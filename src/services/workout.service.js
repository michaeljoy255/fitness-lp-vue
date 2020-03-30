import { DefaultWorkouts } from "../constants";
import { getStorageByKey } from "../helpers";

export default {
  /**
   * Fetches workout data from storage
   * @returns {Promise<Array>} Workout data
   * @example
   * let ex = await WorkoutService.getWorkouts();
   */
  getAvailableWorkouts() {
    return new Promise(resolve => {
      resolve(getStorageByKey("workouts"));
    });
  },

  /**
   * Fetches active workout data from storage
   * @returns {Promise{<Object>}} Active workout data
   * @example
   * let ex = await WorkoutService.getActiveWorkout();
   */
  getActiveWorkout() {
    return new Promise(resolve => {
      resolve(getStorageByKey("activeWorkout"));
    });
  },

  addWorkouts() {
    return new Promise((resolve, reject) => {
      resolve() || reject(); // not implemented
    });
  },

  deleteWorkouts() {
    return new Promise((resolve, reject) => {
      resolve() || reject(); // not implemented
    });
  },

  updateWorkouts() {
    return new Promise((resolve, reject) => {
      resolve() || reject(); // not implemented
    });
  },

  /**
   * Initializes default workouts if no workout data is present
   * @returns {Promise<Array>} Default workout data
   * @example
   * let ex = await WorkoutService.initDefaultWorkouts();
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
  }
};
