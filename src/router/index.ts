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
    { path: "/:username", name: "userProfile", component: UserProfile },
    { path: "/search", name: "search", component: SearchView },
  ],
});
router.beforeEach((to, from, next) => {
  store.state.showLoder = true;
  setTimeout(() => {
    next();
  }, 200);
});
router.afterEach((to, from) => {
  setTimeout(() => {
    store.state.showLoder = false;
  }, 200);
});

export default router;
