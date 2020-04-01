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
 * @returns {?Array} Array with data or null
 * @example
 * let ex = getStorageByKey("key");
 */
export function getStorageByKey(key) {
  if (
    !localStorage.getItem(key) ||
    localStorage.getItem(key) === [] ||
    localStorage.getItem(key) === {}
  ) {
    // Empty or invalid data
    return null;
  } else {
    // Data found
    return localStorage.getItem(key);
  }
}
