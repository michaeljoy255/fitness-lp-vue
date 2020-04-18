# Fitness Linear Progression - VUE

Web app that helps you keep track of your exercise performances so you can improve.

# TODO

**Recording**
- Phase 0 - Moment.js:
    - Research Moment.js for dealing with record and visual dates in the app
    - Best format to save the date as?
    - Best way to determine which record is the most recent?
    - Best way to convert a saved date to a local date for visual display?
    - Plan out what files need to change (helpers, mixins, components, state, etc.)
- Phase 1:
    - Pull the date completed and duration for the Dashboard workout cards
    - Split record module into workout-record, exercise-record, and measurement-record
- Phase 2:
    - Record (add or update) exercise records in an active workout when you click next step
    - Record all exercise data in records on workout submit
    - Pull exercise data for hints in workout

**Active Workout Design**
- Input field validation
- More default exercises and workouts
- Have set inputs show up in expansion panel header

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
- Automated unit testing with Jest
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
