<template>
  <header class="text-gray-600 body-font container mx-auto lg:px-5 lg:w-9/12 max-lg:px-0">
    <div class="container mx-auto mt-2 flex flex-wrap p-2 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 md:mb-0 max-md:mb-4">
        <span class="text-xl font-extrabold cursor-pointer" @click="$router.push('/')">Blueberry</span>
      </a>
      <nav
        class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 text-gray-900 font-bold cursor-pointer">가격정책</a>
        <a class="mr-5 text-gray-900 font-bold cursor-pointer">도움말</a>
        <a class="mr-5 text-gray-900 font-bold cursor-pointer">고객지원</a>
        <a v-if="login" class="text-gray-900 font-bold cursor-pointer"
        @click="$router.push('/mypage')">마이페이지</a>
      </nav>
      
      <div class="flex" v-if="!login">
        <button @click="$router.push('/login')"
          class="rounded-5 bg-white-100 text-teal-700 border-2 border-[#0F6D74] mr-3 inline-flex items-center py-2.5 px-4 max-md:mt-4 md:mt-0 max-md:text-sm 
          hover:bg-gray-100">로그인</button>
        <button @click="$router.push('/signup')"
        class="
        border-transparent bg-teal-700 text-white
        rounded-5
        inline-flex items-center py-2.5 px-4 max-md:mt-4 md:mt-0 max-md:text-sm hover:bg-teal-800">회원가입</button>
      </div>

      <div class="flex font-semibold max-md:mt-4 max-md:-mb-10 items-center mb-1" v-else>
        <span class="font-extrabold">{{ username }}</span> 님, 환영합니다!
        <button @click="logout"
        class="
        border-transparent text-teal-600
        inline-flex items-center py-2.5 px-1 md:mt-0 max-md:text-sm hover:text-teal-800 ml-1 underline">로그아웃</button>
      </div>

    </div>
  </header>

  <!-- Nav Bar -->
  <!-- <div class="main-nav-bar">
      <ul class="main-nav-bar-items-left">
        <b @click="$router.push('/')"
        class="main-nav-bar-item-left">Blueberry</b>
        <li class="main-nav-bar-item-left">가격정책</li>
        <li class="main-nav-bar-item-left">도움말</li>
        <li class="main-nav-bar-item-left">고객지원</li>
      </ul>
      <ul class="main-nav-bar-items-right">
        <li class="main-nav-bar-item-right">
          <button @click="$router.push('/login')"
          class="main-nav-bar-button-login main-nav-bar-button-text ">로그인</button>
        </li>
        <li class="main-nav-bar-item-right">
          <button class="main-nav-bar-button-sign-up main-nav-bar-button-text ">회원가입</button>
        </li>
      </ul>
    </div> -->
</template>
  
<script>

export default {
  name: 'TitleHeader',
  data() {
    return {
      username: null,
      login: false,
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('username');
      this.login = false;
      this.$router.push('/');
    }
  },
  props: {

  },
  created() {
    if(localStorage.getItem('username') != undefined) {
      this.username = localStorage.getItem('username');
      this.login = true;
    }
  }
}
</script>
  
<style>
@import '../css/MainPage.css';
</style>
  