// /src/router/index.ts
import HomeViewVue from '../views/HomeView.vue';
import UserProfile from '../views/UserProfile.vue'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", name: "home", component: HomeViewVue },
    { path: "/:username", name: "userProfile", component: UserProfile },
  ],
});

export default  router ;
