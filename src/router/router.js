import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [{ path: "/", component: HomeView }];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
