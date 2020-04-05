/**
 * Helpers functions to make frequently uses blocks of code more concise.
 *
 * USAGE: Import helper functions into JavaScript module, service, and index files.
 *
 * NOTE: Avoid using helpers in Vue components. Use Mixins instead.
 */

/**
 * Variable you expect to be an object with at least one property
 * @param object
 * @returns {boolean}
 */
export function isObjectWithData(object) {
  if (
    object !== null &&
    typeof object === "object" &&
    Object.keys(object) !== 0
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * Variable you expect to be an array with a least one element
 * @param array
 * @returns {boolean}
 */
export function isArrayWithData(array) {
  if (Array.isArray(array) && array.length > 0) {
    return true;
  } else {
    return false;
  }
}
