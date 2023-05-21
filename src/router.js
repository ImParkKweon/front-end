import { createWebHistory, createRouter } from "vue-router";
import MainPage from './components/MainPage.vue';
import LoginPage from './components/LoginPage.vue';
import SubscribePage from './components/SubscribePage.vue';

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/subscribe",
    component: SubscribePage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;