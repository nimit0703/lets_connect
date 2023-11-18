// /src/router/index.ts
import HomeViewVue from "../views/HomeView.vue";
import UserProfile from "../views/UserProfile.vue";
import SearchView from "../views/SearchView.vue";
import ExploreView from "../views/ExploreView.vue";
import Spinner2 from "../components/loader/Spinner2.vue"
import store from "../stores/store";
import Chat from "../components/chat/Chat.vue"
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", name: "home", component: HomeViewVue },
    { path: "/", name: "/", component: HomeViewVue },
    { path: "/:username", name: "userProfile", component: UserProfile },
    { path: "/search", name: "search", component: SearchView },
    { path: "/explore", name: "explore", component: ExploreView },
    { path: "/s", name: "s", component: Chat },
  ],
});
export default router;
