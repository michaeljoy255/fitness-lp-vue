import { DefaultExercises } from "../constants";

const ExerciseService = {
  /**
   * Initializes default exercises - overwrites existing data!
   * @returns {Promise<Array>} Default exercises
   * @example
   */
  initDefaults() {
    return new Promise(resolve => {
      localStorage.setItem(
        "exercises",
        JSON.stringify(DefaultExercises.exercises)
      );
      resolve(DefaultExercises.exercises); // Dont need to JSON parse this
    });
  },

  /**
   * Get exercises from storage
   * @returns {Promise<Array>} Exercises
   */
  get() {
    return new Promise(resolve => {
      resolve(JSON.parse(localStorage.getItem("exercises")));
    });
  },

  /**
   * Update exercises in storage
   * @returns {Promise<string>} true
   */
  update() {
    return new Promise(resolve => {
      console.error("@todo: ExerciseService update not implmented!");
      resolve(true);
    });
  },

  /**
   * Delete exercises from storage
   * @returns {Promise<boolean>} true
   */
  delete() {
    return new Promise(resolve => {
      localStorage.removeItem("exercises");
      resolve(true);
    });
  }
};

export default ExerciseService;
