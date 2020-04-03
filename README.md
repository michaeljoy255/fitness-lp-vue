# Fitness Linear Progression - VUE

Web app that helps you keep track of your exercise performances so you can improve.

# TODO

**Process when activating a workout:**
- Explore using routes to determine which Topbar is loaded: AppBar or WorkoutBar
    - As an alternate you could have it swapped out when state workout is started    
- Commit close action for Nav Drawer when loading in WorkoutBar
- Implement live workout timer with you new formatted time function (1H 7M)
- Replace the following for Toolbar
    - Date -> Live workout timer
    - App Name -> Workout Name
    - Menu Btn -> Workout cancel btn (X) that activates a confirmation modal

**Needed Modals:**
- DynamicModal Tasks:
    - Confirm canceling a workout (X)
    - Confirm using defaults

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
