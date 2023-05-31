import { createWebHistory, createRouter } from "vue-router";
import MainPage from './components/MainPage.vue';
import LoginPage from './components/LoginPage.vue';
import SubscribePage from './components/SubscribePage.vue';
import SignupPage from './components/SignupPage.vue';

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
  },
  {
    path: "/signup",
    component: SignupPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 페이지 이동 시, 스크롤이 최상단으로 올라가도록 함
  scrollBehavior(){
    return { top: 0 }
  },
});

export default router;