import { getStorageByKey } from "../helpers";

export default {
  /**
   * Fetches record data from storage
   * @returns {Promise<Array>} Record data
   * @example
   * let ex = await RecordService.getRecords();
   */
  getRecords() {
    console.log(this.$store);
    return new Promise(resolve => {
      resolve(getStorageByKey("records"));
    });
  },

  addRecords() {
    return new Promise((resolve, reject) => {
      resolve() || reject(); // not implemented
    });
  },

  deleteRecords() {
    return new Promise((resolve, reject) => {
      resolve() || reject(); // not implemented
    });
  },

  updateRecords() {
    return new Promise((resolve, reject) => {
      resolve() || reject(); // not implemented
    });
  },

  clearAllRecords() {
    return new Promise((resolve, reject) => {
      resolve() || reject(); // not implemented
    });
  },

  clearAllData() {
    return new Promise((resolve, reject) => {
      resolve() || reject(); // not implemented
    });
  }
};
