<template>
    <div class="relative container mx-auto px-5 lg:w-9/12">
      <TitleHeader></TitleHeader>


    </div>
  </template>
  
  <script>
  import TitleHeader from './TitleHeader.vue';
  
  export default {
    name: 'SubscribePage',
    data() {
      return {
        
      }
    },
    methods: {
    },
    mounted() {
      // this.next();
    },
    // components: {
    //   Carousel,
    //   Slide,
    //   Navigation,
    // },
    props: {
  
    },
    components: {
      TitleHeader: TitleHeader,
    }
  }
  </script>
  
  <style>
  @import '../css/MainPage.css';
  </style>
  