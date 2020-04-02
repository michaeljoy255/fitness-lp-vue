# Fitness Linear Progression - VUE

Web app that helps you keep track of your exercise performances so you can improve.

# TODO

**Process when activating a workout:**
- Commit close action for Nav Drawer when loading in Workout Toolbar
- Swap in Workout Toolbar for the App Bar (Can be done with router)
- Replace the following for Toolbar
    - Date -> Live workout timer
    - App Name -> Workout Name
    - Menu Btn -> Workout cancel btn (X)

**Needed Modals:**
- Finish implementing ModalParent code (dynamic components)
- ModalParent Tasks:
    - Confirm canceling a workout (X)
    - Confirm using defaults

**Helpers**
- Formatter for live workout timer (00:22:34 or 22M 34S)
- Constants, Helpers, or Mixins for these tasks
- Converter for Datetime to readable workout duration with styling (1H 46M 39S)
- Converter for Datetime to readable App Bar date
    - Most devices = Wednesday April 1, 2020 (need custom formatter for this)
    - Small devices = 4/1/2020 (toLocalStringTime())

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
