<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
@import './css/Main.css';

#app {
  font-family: 'Noto Sans KR';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  -ms-user-select: none; 
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  scroll-behavior: smooth;
}

html {
  /* scroll-behavior: smooth; */
}
</style>