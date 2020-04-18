import { isArrayWithData } from "../helpers";

const WorkoutRecordService = {
  /**
   * Get workout records from storage
   * @returns {Promise<Array>} Workout records
   */
  get() {
    return new Promise(resolve => {
      console.log("Getting workout records...");
      resolve(JSON.parse(localStorage.getItem("workoutRecords")));
    });
  },

  /**
   * Create workout record in storage
   * @returns {Promise<string>} true
   */
  create(data) {
    return new Promise(resolve => {
      let workoutRecords = JSON.parse(localStorage.getItem("workoutRecords"));

      if (isArrayWithData(workoutRecords)) {
        // Storage already has data
        workoutRecords.push(data);
        localStorage.setItem("workoutRecords", JSON.stringify(workoutRecords));
      } else {
        // Empty or no valid data
        workoutRecords = [];
        workoutRecords.push(data);
        localStorage.setItem("workoutRecords", JSON.stringify(workoutRecords));
      }

      resolve(true);
    });
  },

  /**
   * Delete workout records from storage
   * @returns {Promise<string>} true
   */
  delete() {
    return new Promise(resolve => {
      console.log("Deleting workout records...");
      localStorage.removeItem("workoutRecords");
      resolve(true);
    });
  }
};

export default WorkoutRecordService;
