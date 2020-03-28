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
    path: "/workout",
    name: "Workout",
    component: () => import("../views/Workout.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
