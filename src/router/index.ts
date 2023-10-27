// /src/router/index.ts
import HomeViewVue from "../views/HomeView.vue";
import UserProfile from "../views/UserProfile.vue";
import SearchView from "../views/SearchView.vue";
import store from "../stores/store";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", name: "home", component: HomeViewVue },
    { path: "/", name: "/", component: HomeViewVue },
    { path: "/:username", name: "userProfile", component: UserProfile },
    { path: "/search", name: "search", component: SearchView },
  ],
});
export default router;
