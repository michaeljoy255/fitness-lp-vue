import store from "../store/store";
import { DefaultExercises } from "../constants";
import { getStorageByKey } from "../helpers";

export default class ExerciseService {
  constructor() {
    this.$store = store;
  }

  getExercises() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
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

  initDefaultExercises() {
    return new Promise((resolve, reject) => {
      const data = getStorageByKey("exercises");

      if (!data) {
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
