import { createRouter, createWebHashHistory } from "vue-router";
const index = () => import("../pages/index.vue");
const routerHistory = createWebHashHistory();
const router = createRouter({
  history: routerHistory,
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "/index",
      component: index,
    },
  ],
});
export default router;
