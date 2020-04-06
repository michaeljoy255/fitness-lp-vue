# Fitness Linear Progression - VUE

Web app that helps you keep track of your exercise performances so you can improve.

# TODO

**Resume Card**
- Implementation:
    - Open modal for confirming the discard option
    - Logic to decide if it gets rendered (Home view)
    - Logic for what happens when Resume is clicked
        - Pass data through route params?
        - May need to change how workout data is currently loaded in Active Workout

**Workout Timer**
- Design:
    - Temporary position in top right of App Bar
    - Have timer icon with with Formatted Time
    - Stretch Goal: Popup footer bar with timer on it (mobile and desktop)
- Implementation:
    - Set interval in Active Workout that takes Now Time - Workout Begin Time

**General Design Cleanup**
- Move cancel workout button to right side of App Bar
- Remove style tags from components if they aren't using them (all of them?)
- Bring nav menu back to App Bar
    - Let users leave Active Workjout without canceling workout once Resume Card is done
- Rename components, services, and routes based on how you think they are going to be used now

**Date Storage (Local Storage)**
- Start saving Active Workout data (easiest one to do)
    - Save as "active"
- Add feature to clear all stored data (currently workouts, exercises, and active)
- Add feature that saves defaults into "available" on LS when they are created
- Add importer feature (JSON or CSV?)
- Add exporter feature (JSON or CSV?)

**Notes**
- Local Storage Items:
    - ("current") === { id, name, step, beginTime, endTime, exercises, records }
    - ("available") === { exercises: [...], workouts: [...] }
    - ("records") === { exercises: [...], workouts: [...], measurements: [...]}

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
