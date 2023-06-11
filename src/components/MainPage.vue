<template>
  <TitleHeader></TitleHeader>
  <div class="relative container mx-auto lg:px-5 lg:w-9/12 max-lg:px-0">

    <!-- 소개 컨테이너 -->
    <div class="flex flex-wrap justify-center items-center mt-5 mx-3" data-aos="fade-up" data-aos-duration="900"
      data-aos-easing="ease" data-aos-offset="10" data-aos-delay="50" data-aos-anchor-placement="top-center">
      <!-- 소개 텍스트 (왼쪽) -->
      <div class="md:w-1/2 max-md:w-full">
        <div class="not-italic font-bold max-md:text-4xl md:text-3xl xl:text-6xl text-gray-800">
          클라우드 컴퓨팅의
          <br />
          혁신적인 미래
        </div>
        <div class="not-italic font-bold text-xl ml-1 max-md:ml-0 md:my-2 text-teal-700 leading-10">
          컴퓨팅 요구 사항을 위한 최고의 솔루션
        </div>

        <div>
          <button class="hover:bg-teal-800
            border-transparent bg-teal-700 text-white font-light flex justify-center items-center rounded-5 px-4 py-2.5
            max-md:text-sm">
            <span>
              시작하기 &nbsp;
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>

      </div>

      <!-- 소개 이미지 (오른쪽) -->
      <img class="md:w-1/2 max-md:w-full max-md:mt-0" style="height: 100%;" :src="require('../img/main_top_image.svg')" />
    </div>

    <!-- 장점 컨테이너 -->
    <div class="flex justify-between my-32 max-md:my-14 max-md:flex-col" data-aos="fade-up" data-aos-duration="900"
      data-aos-easing="ease" data-aos-offset="-300" data-aos-delay="50" data-aos-anchor-placement="top-center">
      <div class="flex items-start sub-introduce-container-box md:w-1/3 m-2">
        <span class="shine"></span>
        <div class="font-bold text-gray-800 max-md:text-2xl md:text-xl lg:text-xl xl:text-3xl mb-3 ">목적에 따라 <br /> 다양한 플랜
          제공</div>
        <img class="self-end max-md:mb-5 md:m-1" style="width: 65%;" :src="require('../img/introduce1_img.svg')" />
      </div>

      <div class="flex items-start sub-introduce-container-box md:w-1/3 m-2">
        <span class="shine"></span>
        <div class="font-bold text-gray-800 max-md:text-2xl md:text-xl lg:text-xl xl:text-3xl mb-3">원하는 사양의 <br /> 컴퓨터
          구성을 빠르게</div>
        <img class="self-end max-md:mb-5 md:m-3" style="width: 65%;" :src="require('../img/introduce2_img.svg')" />
      </div>

      <div class="flex items-start sub-introduce-container-box md:w-1/3 m-2">
        <span class="shine"></span>
        <div class="font-bold text-gray-800 max-md:text-2xl md:text-xl lg:text-xl xl:text-3xl mb-3">언제 어디서나 <br /> 클라우드
          노트북 접속</div>
        <img class="self-end max-md:mb-5 md:m-3" style="width: 65%;" :src="require('../img/introduce3_img.svg')" />
      </div>
    </div>
  </div>

  <div class="w-full">
    <!-- 서비스 Title -->
    <div class="not-italic font-bold text-center text-gray-800 max-sm:text-2xl max-md:text-3xl md:text-4xl lg:text-5xl"
      data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease" data-aos-offset="-250" data-aos-delay="50"
      data-aos-anchor-placement="top-center">
      Blueberry를 통해 쉽고 빠르게 <br /> 클라우드 환경을 구축하세요
    </div>

    <!-- 서비스 컨테이너 : 캐러셀 UI -->
    <div class="w-full overflow-x-hidden m-auto p-12 flex content-center justify-center relative" data-aos="fade-up"
      data-aos-duration="900" data-aos-easing="ease" data-aos-offset="-250" data-aos-delay="50"
      data-aos-anchor-placement="top-center">
      <!-- 캐러셀 네비게이션 버튼 -->
      <img v-if="carouselIndex != -1" :src="require('../img/carousel_prev.svg')"
        class="service-container-carousel-button max-lg:left-[3%] lg:left-[10%] max-md:w-14" @click="prev" />
      <img v-if="carouselIndex != 1" :src="require('../img/carousel_next.svg')"
        class="service-container-carousel-button max-lg:right-[3%] lg:right-[10%] max-md:w-14" @click="next" />

      <!-- 캐러셀 -->
      <div ref="carousel" class="service-container-carousel-items lg:w-[200%]">
        <div v-for="(a, i) in plan" :key="i"
          class="max-md:m-0 md:m-3 lg:m-10 service-container-carousel-item max-md:w-screen max-md:max-h-[700px] max-xl:max-h-[630px] xl:max-h-[700px]">
          <img class="w-7/12 sm:max-w-[450px] max-sm:w-full m-auto my-5 mb-4"
            :src="require('../img/' + a.src + '.svg')" />
          <!-- 서비스 이름 -->
          <div class="text-5xl max-2xl:text-3xl font-bold text-center">
            {{ a.name }}
          </div>

          <!-- 서비스 설명 -->
          <div class="text-2xl max-lg:text-xl text-center my-3">
            {{ a.comment }}
          </div>

          <button @click="to_subscribe_page(i)"
            class="hover:bg-teal-800
            border-transparent bg-teal-700 text-white font-light flex justify-center items-center rounded-5 px-4 py-2.5 w-1/6 min-w-[150px] m-auto">
            <span>
              시작하기 &nbsp;
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>

          <!-- 간단하게 설명된 사양 -->
          <div class="my-5 m-auto flex max-lg:flex-col max-lg:my-0">
            <div class="flex items-center content-center justify-center" v-for="j in a.spec" :key="j">
              <img class="w-7" :src="require('../img/check_circle.svg')" />
              <span class="text-xl ml-5 mr-7 max-lg:my-2">
                {{ j }}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <img class="login-wave static" :src="require('../img/wave.svg')" />
</template>

<script>
import TitleHeader from './TitleHeader.vue';
import AOS from 'aos';
import "aos/dist/aos.css";

// Vuex
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: 'MainPage',
  // Composition API
  setup() {
    const store = useStore();
    const plan = computed(() => store.state.plan);

    return { plan }
  },
  data() {
    return {
      carouselIndex: 0,
      username: null,
    }
  },
  methods: {
    prev() {
      let carouselImg = document.querySelector('.service-container-carousel-item');
      let size = carouselImg.clientWidth;

      if (this.carouselIndex < 0) return;
      this.carouselIndex -= 1;

      this.$refs.carousel.style.transform = `translate3d(${-size * this.carouselIndex}px, 0, 0)`;
    },
    next() {
      let carouselImg = document.querySelector('.service-container-carousel-item');
      let size = carouselImg.clientWidth;

      if (this.carouselIndex > 0) return;
      this.carouselIndex += 1;

      this.$refs.carousel.style.transform = `translate3d(${-size * this.carouselIndex}px, 0, 0)`;
    },
    to_subscribe_page(i) {
      console.log(i);
      if(this.username) {
        this.$router.push({
          name: "SubscribePage",
          params: {
            plan_num: i,
          }
        });
      }
      else {
        this.$router.push('/signup');
      }
    }
  },
  mounted() {
    // this.next();
  },
  // components: {
  //   Carousel,
  //   Slide,
  //   Navigation,
  // },
  created() {
    AOS.init();

    if(localStorage.getItem('username') != undefined) {
      this.username = localStorage.getItem('username');
    }
  },
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
