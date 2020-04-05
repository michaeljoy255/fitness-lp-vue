const RecordService = {
  /**
   * Fetches measurement records from storage
   * @returns {Promise<Array>} Measurement records
   */
  getMeasurements() {
    return new Promise(resolve => {
      resolve(localStorage.getItem("measurements"));
    });
  },

  /**
   * Fetches exercise records from storage
   * @returns {Promise<Array>} Exercise records
   */
  getExercises() {
    return new Promise(resolve => {
      resolve(localStorage.getItem("exercises"));
    });
  },

  /**
   * Fetches workout records from storage
   * @returns {Promise<Array>} Workout records
   */
  getWorkouts() {
    return new Promise(resolve => {
      resolve(localStorage.getItem("workouts"));
    });
  }
};

export default RecordService;
