import { createWebHistory, createRouter } from "vue-router";
import MainPage from './components/MainPage.vue';
import LoginPage from './components/LoginPage.vue';
import SubscribePage from './components/SubscribePage.vue';
import SignupPage from './components/SignupPage.vue';
import MyPage from './components/MyPage.vue';

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/subscribe/:plan_num",
    name: "SubscribePage",
    component: SubscribePage,
    props: true,
  },
  {
    path: "/signup",
    name: "SignupPage",
    component: SignupPage,
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: MyPage,
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