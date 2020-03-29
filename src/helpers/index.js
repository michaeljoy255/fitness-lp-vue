/**
 * Helpers
 */

/**
 * Helper for getting local storage data
 */
export function getStorageByKey(key) {
  if (
    !localStorage.getItem(key) ||
    localStorage.getItem(key) === [] ||
    localStorage.getItem(key) === {}
  ) {
    return null;
  } else {
    return localStorage.getItem(key);
  }
}
