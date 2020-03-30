/**
 * Helpers functions to make frequently uses blocks of code more concise.
 *
 * USAGE: Import helper functions into JavaScript module, service, and index files.
 *
 * NOTE: Avoid using helpers in Vue components. Use Mixins instead.
 */

/**
 * Get local storage data with a key
 * @param {string} key
 * @returns {?Array} Null, [], or array with data
 * @example
 * let example = getStorageByKey("workouts");
 */
export function getStorageByKey(key) {
  if (!localStorage.getItem(key)) {
    // Nothing valid to return
    return null;
  } else if (
    localStorage.getItem(key) === [] ||
    localStorage.getItem(key) === {}
  ) {
    // Empty Data found
    return [];
  } else {
    // Data found
    return localStorage.getItem(key);
  }
}
