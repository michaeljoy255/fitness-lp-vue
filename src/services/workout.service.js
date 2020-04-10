import { DefaultWorkouts } from "../constants";

const WorkoutService = {
  /**
   * Initializes default workouts - overwrites existing data!
   * @returns {Promise<Array>} Default workouts
   */
  initDefaults() {
    return new Promise(resolve => {
      localStorage.setItem(
        "workouts",
        JSON.stringify(DefaultWorkouts.workouts)
      );
      resolve(DefaultWorkouts.workouts); // Don't need to JSON parse this
    });
  },

  /**
   * Get workouts from storage
   * @returns {Promise<Array>} Workouts
   */
  get() {
    return new Promise(resolve => {
      resolve(JSON.parse(localStorage.getItem("workouts")));
    });
  },

  /**
   * Update workouts in storage
   * @returns {Promise<string>} true
   */
  update() {
    return new Promise(resolve => {
      console.error("@todo: WorkoutService update not implmented!");
      resolve(true);
    });
  },

  /**
   * Delete workouts from storage
   * @returns {Promise<string>} true
   */
  delete() {
    return new Promise(resolve => {
      localStorage.removeItem("workouts");
      resolve(true);
    });
  }
};

export default WorkoutService;
