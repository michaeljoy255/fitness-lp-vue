/**
 * Helpers functions to make frequently uses blocks of code more concise.
 *
 * USAGE: Import helper functions into JavaScript module, service, and index files.
 *
 * NOTE: Avoid using helpers in Vue components. Use Mixins instead.
 */

/**
 * Something you expect to be an object with at least one property
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
    console.warn(`Object ${object} isn't valid, or doesn't have any data.`);
    return false;
  }
}

/**
 * Something you expect to be an array with a least one element
 * @param array
 * @returns {boolean}
 */
export function isArrayWithData(array) {
  if (Array.isArray(array) && array.length > 0) {
    return true;
  } else {
    console.warn(`Array ${array} isn't valid, or doesn't have any data.`);
    return false;
  }
}
