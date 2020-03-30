import store from "../store/store";
import { DefaultExercises } from "../constants";
import { getStorageByKey } from "../helpers";

export default class ExerciseService {
  constructor() {
    this.$store = store;
  }

  /**
   * Fetches exercise data from storage
   * @returns {Promise<Array>} Exercise data
   * @example
   * const exerciseService = new ExerciseService();
   * let example = await exerciseService.getExercises();
   */
  getExercises() {
    return new Promise(resolve => {
      resolve(getStorageByKey("exercises"));
    });
  }

  addExercises() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }

  deleteExercises() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }

  updateExercises() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }

  /**
   * Initializes default exercises if no exercise data is present
   * @returns {Promise<Array>} Default exercise data
   * @example
   * const exerciseService = new ExerciseService();
   * let example = await exerciseService.initDefaultExercises();
   */
  initDefaultExercises() {
    return new Promise((resolve, reject) => {
      const exercises = getStorageByKey("exercises");

      if (!exercises) {
        // Exercise data is empty, fill with defaults
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
}
