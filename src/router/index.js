import { createRouter, createWebHashHistory } from "vue-router";
const index = () => import("../pages/index.vue");
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
      path:'/index',
      name:'home',
      component: index
    }
  ],
});
export default router;
