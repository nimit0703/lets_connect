// /src/router/index.ts
import HomeViewVue from '../views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", name: "home", component: HomeViewVue },
  ],
});

export default  router ;
