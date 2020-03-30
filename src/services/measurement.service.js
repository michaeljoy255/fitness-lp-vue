import { getStorageByKey } from "../helpers";

export default {
  /**
   * Fetches measurement data from storage
   * @returns {Promise<Array>} Measurement data
   * @example
   * const measurementService = new MeasurementService();
   * let example = await measurementService.getMeasurements();
   */
  getMeasurements() {
    console.log(this.$store);
    return new Promise(resolve => {
      resolve(getStorageByKey("measurements"));
    });
  },

  addMeasurements() {
    return new Promise((resolve, reject) => {
      resolve() || reject(); // not implemented
    });
  },

  deleteMeasurements() {
    return new Promise((resolve, reject) => {
      resolve() || reject(); // not implemented
    });
  },

  updateMeasurements() {
    return new Promise((resolve, reject) => {
      resolve() || reject(); // not implemented
    });
  }
};
