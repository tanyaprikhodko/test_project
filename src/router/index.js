import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/final-easy",
    name: "finalEasy",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FinalEasy.vue"),
  },
  {
    path: "/main",
    name: "main",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Main.vue"),
  },
  {
    path: "/cover",
    name: "cover",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cover.vue"),
  },
  { path: "/", redirect: { name: "cover" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "btn",
  linkExactActiveClass: "btn",
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
});

export default router;
