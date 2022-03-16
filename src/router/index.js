import { createRouter, createWebHashHistory } from "vue-router";
const layout = () => import("../pages/layout.vue");
const routerHistory = createWebHashHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "/index",
    },
    {
      path: "/index",
      name: "home",
      component: layout,
    },
  ],
});
export default router;
