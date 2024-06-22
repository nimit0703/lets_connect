// /src/router/index.ts
import HomeViewVue from "../views/HomeView.vue";
import UserProfile from "../views/UserProfile.vue";
import SearchView from "../views/SearchView.vue";
import ExploreView from "../views/ExploreView.vue";
import MessagesViewVue from "../views/MessagesView.vue";
import Swiper1Vue from "../components/swiper/Swiper1.vue";
import store from "../stores/store";
import Chat from "../components/chat/Chat.vue";
import OauthLogin from "../components/Login/OAuthLogin.vue";
import LoginSigninView from "@/views/LoginSigninView.vue";
import Register from "@/views/Register.vue";
import { createRouter, createWebHistory } from "vue-router";
import { difference } from "lodash";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", name: "home", component: HomeViewVue },
    { path: "/", name: "/", component: HomeViewVue },
    { path: "/:username", name: "userProfile", component: UserProfile },
    { path: "/search", name: "search", component: SearchView },
    { path: "/explore", name: "explore", component: ExploreView },
    { path: "/message", name: "message", component: MessagesViewVue },
    { path: "/login", name: "login", component: LoginSigninView },
    { path: "/s", name: "s", component: Swiper1Vue },
    { path: "/register", name: "register", component: Register },
  ],
});


export default router;
