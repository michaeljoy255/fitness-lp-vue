import store from "../store/store";
import { getStorageByKey } from "../helpers";

export default class MeasurementService {
  constructor() {
    this.$store = store;
  }

  /**
   * Fetches measurement data from storage
   * @returns {Promise<Array>} Measurement data
   * @example
   * const measurementService = new MeasurementService();
   * let example = await measurementService.getMeasurements();
   */
  getMeasurements() {
    return new Promise(resolve => {
      resolve(getStorageByKey("measurements"));
    });
  }

  addMeasurements() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }

  deleteMeasurements() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }

  updateMeasurements() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }
}
