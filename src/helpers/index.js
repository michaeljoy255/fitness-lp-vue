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
 * let ex = getStorageByKey("workouts");
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

/**
 * Object constructor for Records data (with defaults)
 * @param {?Array} measurements
 * @param {?Array} exercises
 * @param {?Array} workouts
 * @returns {Object} New Records object
 * @example
 * let ex1 = new Records();
 * let ex2 = new Records({exercises: myExercisesArray});
 */
export function Records({
  measurements = null,
  exercises = null,
  workouts = null
} = {}) {
  this.measurements = measurements;
  this.exercises = exercises;
  this.workouts = workouts;
}

/**
 * Object constructor for Selected data (with defaults)
 * @param {?Object} measurement
 * @param {?Object} exercise
 * @param {?Object} workout
 * @param {?Object} record
 * @returns {Object} New Selected object
 * @example
 * let ex1 = new Selected();
 * let ex2 = new Selected({record: selectedRecord});
 */
export function Selected({
  measurement = null,
  exercise = null,
  workout = null,
  record = null
} = {}) {
  this.measurement = measurement;
  this.exercise = exercise;
  this.workout = workout;
  this.record = record;
}

/**
 * Object constructor for Available data (with defaults)
 * @param {?Array} exercises
 * @param {?Array} workouts
 * @returns {Object} New Available object
 * @example
 * let ex1 = new Available();
 * let ex2 = new Available({exercises: allExercises});
 */
export function Available({ exercises = null, workouts = null } = {}) {
  this.exercises = exercises;
  this.workouts = workouts;
}

/**
 * Object constructor for ActiveWorkout data (with defaults)
 * @param {?string} id
 * @param {?string} name
 * @param {?number} step
 * @param {?Date} beginTime
 * @param {?Date} endTime
 * @param {?Array} exercises
 * @param {?Array} records
 * @returns {Object} New ActiveWorkout object
 * @example
 * let ex1 = new ActiveWorkout();
 * let ex2 = new ActiveWorkout({name: workoutName});
 */
export function ActiveWorkout({
  id = null,
  name = null,
  step = null,
  beginTime = null,
  endTime = null,
  exercises = null,
  records = null
} = {}) {
  this.id = id;
  this.name = name;
  this.step = step;
  this.beginTime = beginTime;
  this.endTime = endTime;
  this.exercises = exercises;
  this.records = records;
}
