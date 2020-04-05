import { DefaultWorkouts } from "../constants";
import { isArrayWithData } from "../helpers";

const WorkoutService = {
  /**
   * Initializes default workouts if no workout data is present
   * @returns {Promise<Array>} Default workout data
   */
  initDefaultWorkouts() {
    return new Promise((resolve, reject) => {
      const workouts = localStorage.getItem("workouts");

      if (isArrayWithData(workouts)) {
        reject(new Error("Workout data already exists."));
      } else {
        /**
         * @todo Save the defaults to local storage
         */
        resolve(DefaultWorkouts.workouts);
      }
    });
  },

  /**
   * Fetches workout data from storage
   * @returns {Promise<Array>} Workout data
   */
  getWorkouts() {
    return new Promise(resolve => {
      resolve(localStorage.getItem("workouts"));
    });
  },

  /**
   * Fetches active workout data from storage
   * @returns {Promise<Array>} Active workout data
   */
  getActiveWorkout() {
    return new Promise(resolve => {
      resolve(localStorage.getItem("workout"));
    });
  }
};

export default WorkoutService;
