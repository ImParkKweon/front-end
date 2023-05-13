<template>
    <!-- Nav Bar -->
    <div class="main-nav-bar">
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
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'TitleHeader',
    data() {
      return {
        
      }
    },
    methods: {
    },
    props: {
  
    }
  }
  </script>
  
  <style>
  @import '../css/MainPage.css';
  </style>
  