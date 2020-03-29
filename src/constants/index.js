/**
 * Constants for use throughout the app
 */
import { v4 as uuidv4 } from "uuid";

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

export const DefaultExercises = Object.freeze({
  exercises: [
    // Cardio
    {
      id: uuidv4(),
      name: "Cardio & Conditioning",
      category: Category.CARDIO,
      isSimple: true,
      notes:
        "Jogging, jumping jacks, mountain climbers, and any other suitable cardio exercise with or without weights."
    },
    {
      id: uuidv4(),
      name: "Warmup",
      category: Category.CARDIO,
      isSimple: true,
      notes: "Spend ~5 minutes warming up."
    },
    {
      id: uuidv4(),
      name: "Cooldown",
      category: Category.CARDIO,
      isSimple: true,
      notes: "Spend ~5 minutes cooling down."
    },
    // Miscellaneous
    {
      id: uuidv4(),
      name: "Stretching",
      category: Category.MISC,
      isSimple: true,
      notes: "Spend 5 to 10 minutes stretching recently used muscles."
    }
  ]
});

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
    }
  ]
});

/**
 * Helpers for some of the constants
 */

function getWorkoutExerciseIds(...args) {
  return args.map(arg => getExerciseIdByName(arg));
}
function getExerciseIdByName(name) {
  return DefaultExercises.exercises.find(exercise => exercise.name === name);
}
