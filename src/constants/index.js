import { v4 as uuidv4 } from "uuid";

/**
 * Constant workout categories this app recognizes
 * @example
 * let ex = Category.LEGS; // "Legs"
 */
export const Category = Object.freeze({
  BACK: "Back",
  BICEPS: "Biceps",
  CARDIO: "Cardio",
  CHEST: "Chest",
  CORE: "Core",
  EVENT: "Event",
  LEGS: "Legs",
  MISC: "Miscellaneous",
  SHOULDERS: "Shoudlers",
  TRICEPS: "Triceps"
});

/**
 * Constant default exercises the app can initialize for the user
 */
export const DefaultExercises = Object.freeze({
  exercises: [
    // Cardio
    {
      id: uuidv4(),
      name: "Cardio & Conditioning",
      category: Category.CARDIO,
      isSimple: true,
      notes:
        "Jogging, jumping jacks, mountain climbers, air squats and any other suitable cardio exercise with or without weights."
    },
    {
      id: uuidv4(),
      name: "Warmup",
      category: Category.CARDIO,
      isSimple: true,
      notes: "Spend a few minutes warming up."
    },
    {
      id: uuidv4(),
      name: "Cooldown",
      category: Category.CARDIO,
      isSimple: true,
      notes: "Spend a few minutes cooling down."
    },
    // Miscellaneous
    {
      id: uuidv4(),
      name: "Stretching",
      category: Category.MISC,
      isSimple: true,
      notes: "Spend a few minutes stretching recently used muscles."
    },
    // Chest
    {
      id: uuidv4(),
      name: "Flat Press, Barbell",
      category: Category.CHEST,
      notes: "Do 3-5 sets of 5-8 reps."
    },
    {
      id: uuidv4(),
      name: "Incline Press, Barbell",
      category: Category.CHEST,
      notes: "Do 3-5 sets of 5-8 reps."
    },
    {
      id: uuidv4(),
      name: "Decline Press, Barbell",
      category: Category.CHEST,
      notes: "Do 3-5 sets of 5-8 reps."
    },
    {
      id: uuidv4(),
      name: "Pushups",
      category: Category.CHEST,
      notes: "Do 3-5 sets of 10-20 reps."
    },

    // Shoulders
    {
      id: uuidv4(),
      name: "Front and Side Raises, Dumbbell",
      category: Category.SHOULDERS,
      notes: "Extend arms forward then outward. Do 3 sets of 8-10 reps."
    },
    {
      id: uuidv4(),
      name: "Seated Military Press, Barbell",
      category: Category.SHOULDERS,
      notes: "Sit nearly upright and weight up. Do 3 sets of 5-8 reps."
    },
    // Triceps
    {
      id: uuidv4(),
      name: "Skull Crushers",
      category: Category.TRICEPS,
      notes:
        "Lower weight behind head using elbows while laying down. Do 3 sets of 8 reps."
    },
    {
      id: uuidv4(),
      name: "Tricep Kickbacks, Dumbbell",
      category: Category.TRICEPS,
      notes: "Lean over and straigthen elbos back. Do 3 sets of 8 reps."
    },
    // Back
    {
      id: uuidv4(),
      name: "Bent Over Rows, Barbell",
      category: Category.BACK,
      notes: "Brace hard! Do 3-5 sets of 5-8 reps."
    },
    {
      id: uuidv4(),
      name: "Shrugs, Barbell",
      category: Category.BACK,
      notes: "Do 3-5 sets of 5-8 reps."
    },
    {
      id: uuidv4(),
      name: "Deadlifts, Barbell",
      category: Category.BACK,
      notes: "Brace hard! Do 3-5 sets of 5 reps."
    },
    {
      id: uuidv4(),
      name: "Stiff Leg Deadlifts, Barbell",
      category: Category.BACK,
      notes: "Brace hard! Do 3-5 sets of 5-8 reps"
    },
    {
      id: uuidv4(),
      name: "Pullups",
      category: Category.BACK,
      notes: "Do 3-5 sets of 8-10 reps."
    },
    {
      id: uuidv4(),
      name: "Standing T-Rows, Barbell",
      category: Category.BACK,
      notes: "Do 3-5 sets of 8-10 reps."
    },
    // Biceps
    {
      id: uuidv4(),
      name: "Overhand Curls, Dumbbell",
      category: Category.BICEPS,
      notes: "Do 3-5 sets of 8 reps."
    },
    {
      id: uuidv4(),
      name: "Underhand Curls, Dumbbell",
      category: Category.BICEPS,
      notes: "Do 3-5 sets of 8 reps."
    },
    {
      id: uuidv4(),
      name: "Hammer Curls, Dumbbell",
      category: Category.BICEPS,
      notes: "Do 3-5 sets of 8 reps."
    },
    // Legs
    {
      id: uuidv4(),
      name: "Squats, Barbell",
      category: Category.LEGS,
      notes: "Brace hard! Do 3-5 sets of 5-8 reps."
    },
    {
      id: uuidv4(),
      name: "Hip Thrusters, Barbell",
      category: Category.LEGS,
      notes: "Do 3-5 sets of 5-8 reps."
    },
    // Core
    {
      id: uuidv4(),
      name: "Russian Twist, Dumbell",
      category: Category.LEGS,
      notes: "Do 3-5 sets of 20-30 reps."
    },
    {
      id: uuidv4(),
      name: "Oblique Side Bends, Dumbell",
      category: Category.LEGS,
      notes:
        "Lower and lift weight along side of body with arms straight. Do 3-5 sets of 20-30 reps."
    }
  ]
});

/**
 * Constant default workouts the app can initialize for the user
 */
export const DefaultWorkouts = Object.freeze({
  workouts: [
    {
      id: uuidv4(),
      name: "Cardio",
      exerciseIds: getWorkoutExerciseIds(
        "Warmup",
        "Cardio & Conditioning",
        "Cooldown",
        "Stretching"
      )
    },
    {
      id: uuidv4(),
      name: "Chest",
      exerciseIds: getWorkoutExerciseIds(
        "Warmup",
        "Flat Press, Barbell",
        "Incline Press, Barbell",
        "Pushups",
        "Cooldown",
        "Stretching"
      )
    },
    {
      id: uuidv4(),
      name: "Back",
      exerciseIds: getWorkoutExerciseIds(
        "Warmup",
        "Deadlifts, Barbell",
        "Bent Over Rows, Barbell",
        "Shrugs, Barbell",
        "Cooldown",
        "Stretching"
      )
    },
    {
      id: uuidv4(),
      name: "Arms & Shoulders",
      exerciseIds: getWorkoutExerciseIds(
        "Warmup",
        "Front and Side Raises, Dumbbell",
        "Skull Crushers",
        "Underhand Curls, Dumbbell",
        "Cooldown",
        "Stretching"
      )
    },
    {
      id: uuidv4(),
      name: "Legs & Core",
      exerciseIds: getWorkoutExerciseIds(
        "Warmup",
        "Squats, Barbell",
        "Hip Thrusters, Barbell",
        "Russian Twist, Dumbell",
        "Cooldown",
        "Stretching"
      )
    }
  ]
});

/**
 * Constants helper function - Populates exerciseIds for default workouts
 * @param {string} args Exercise name(s)
 * @returns {Array<string>} Exercise ids
 * @example
 * let ex = getWorkoutExerciseIds("Warmup", "Cooldown", "Stretching");
 */
function getWorkoutExerciseIds(...args) {
  return args.map(arg => getExerciseIdByName(arg));
}

/**
 * Constants helper function - Populates exerciseIds for default workouts
 * @param {string} name Name of a default exercise
 * @returns {string} Exercise id
 * @example
 * let ex = getExerciseIdByName("Warmup");
 */
function getExerciseIdByName(name) {
  const exerciseId = DefaultExercises.exercises.find(
    exercise => exercise.name === name
  );

  if (exerciseId) {
    return exerciseId;
  } else {
    console.error("Could not match exercise name to a default exercise!");
  }
}
