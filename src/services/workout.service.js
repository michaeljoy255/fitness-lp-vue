import store from "../store/store";
import { DefaultWorkouts } from "../constants";
import { getStorageByKey } from "../helpers";

export default class WorkoutService {
  constructor() {
    this.$store = store;
  }

  getWorkouts() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }

  addWorkouts() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }

  deleteWorkouts() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }

  updateWorkouts() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }

  initDefaultWorkouts() {
    return new Promise((resolve, reject) => {
      const data = getStorageByKey("workouts");

      if (!data) {
        // Workouts data is empty, fill with defaults
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
}
