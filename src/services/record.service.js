import store from "../store/store";
import { getStorageByKey } from "../helpers";

export default class RecordService {
  constructor() {
    this.$store = store;
  }

  /**
   * Fetches record data from storage
   * @returns {Promise<Array>} Record data
   * @example
   * const recordService = new RecordService();
   * let example = await recordService.getRecords();
   */
  getRecords() {
    return new Promise(resolve => {
      resolve(getStorageByKey("records"));
    });
  }

  addRecords() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }

  deleteRecords() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }

  updateRecords() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }

  clearAllRecords() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }

  clearAllData() {
    return new Promise((resolve, reject) => {
      if (this.$store) {
        resolve();
      } else {
        reject();
      }
    });
  }
}
