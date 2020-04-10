# Fitness Linear Progression - VUE

Web app that helps you keep track of your exercise performances so you can improve.

# TODO

**Refactor Getters**
- Refactor Getters: See if you can find a better way to do the getters
- Research usage of and including moment.js into your project

**Active Workout Design**
- What data is needed on Exercises and Workouts?
    - weight, reps, duration, distance, etc.
    - isSimple, hasReps, hideNotes, etc. (just examples)
    - Overall schema for data (local storage)
- ExerciseCard layout design
- Input field validation
- More default exercises and workouts

**Local Storage**
- "records"
    - exercises: [...]
    - workouts: [...]
    - measurements: [...]
- "settings"
    - metric: boolean
    - ???

**Exercise Records Format**
```
{
  id: string,
  createdAt: date,
  distance: number,
  duration: number,
  ...
}
```

**Input Validation**
- Workout names CANNOT exceed 40 characters
- Exercise names CANNOT exceed 50 characters

**Backlog**
- SummaryCard for Active Workout provides a nice summary
- Exercises CRUD
- Workouts CRUD
- Measurements CRUD
- Records CRUD
- Add importer feature (JSON or CSV?)
- Add exporter feature (JSON or CSV?)
- Settings ("settings" in local storage)
    - What kind of user settings and options (metric / imperial maybe)?

# Table of Contents

1. [Development](#Development)
   1. [Project setup](#Project-setup)
   2. [Compiles and hot-reloads for development](#Compiles-and-hot-reloads-for-development)
   3. [Compiles and minifies for production](#Compiles-and-minifies-for-production)
   4. [Run your unit tests](#Run-your-unit-tests)
   5. [Lints and fixes files](#Lints-and-fixes-files)
   6. [Customize configuration](#Customize-configuration)

# Development

## Project setup

```
npm install
```

## Compiles and hot-reloads for development

```
npm run serve
```

## Compiles and minifies for production

```
npm run build
```

## Run your unit tests

```
npm run test:unit
```

## Lints and fixes files

```
npm run lint
```

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
