import { getStorageByKey } from "../helpers";

export default {
  /**
   * Fetches measurement data from storage
   * @returns {Promise<Array>} Measurement data
   * @example
   * let ex = await MeasurementService.getMeasurements();
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
