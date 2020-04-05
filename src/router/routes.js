import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/charts",
    name: "Charts",
    component: () => import("../views/Charts.vue")
  },
  {
    path: "/active-workout/:id",
    name: "ActiveWorkout",
    component: () => import("../views/ActiveWorkout.vue"),
    meta: {
      topBar: "WorkoutBar"
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/workouts",
    name: "Workouts",
    component: () => import("../views/Workouts.vue")
  },
  {
    path: "/exercises",
    name: "Exercises",
    component: () => import("../views/Exercises.vue")
  },
  {
    path: "/measurements",
    name: "Measurements",
    component: () => import("../views/Measurements.vue")
  },
  {
    path: "/records",
    name: "Records",
    component: () => import("../views/Records.vue")
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  routes
});

router.afterEach(to => {
  console.log("Route:", to);
});

export default router;
