# Fitness Linear Progression - VUE

Web app that helps you keep track of your exercise performances so you can improve.

# TODOs

- General design of the MVP (so you can build it with fake data)
- What layouts and components do you need? (base components, route layouts, etc)
- Basic idea of state needed for different sections of the app
- Basic idea of backend data

# Design

**Routes and App Composition**

- Pages (SSR) > Layouts > Views > Components > Sub-components
- Home
  - App Title
  - Workout buttons
  - About page link
- Workout
  - Tabs or stepper for each exercise
  - Warmup confirmation page
  - Stretch confirmation page
  - Local storage of app state?
- About
  - Information about me
  - Link to github repo?
  - Link to website?
- NotFound
  - 404 error page (can be creative with this one)
- Advanced (stretch goals)
  - Routes for CRUD operations (exercises, routines, etc)
  - Data graphs (try using Apex Charts or another library versus D3)
  - Profile route with basic measurments
  - Signup / Login routes

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
