<template>
  <div class="relative container mx-auto px-5 lg:w-9/12">
    <TitleHeader></TitleHeader>

    <!-- 소개 컨테이너 -->
    <div class="flex flex-wrap justify-center items-center mt-5">
      <!-- 소개 텍스트 (왼쪽) -->
      <div class="md:w-1/2">
        <div class="not-italic font-bold max-md:text-2xl md:text-3xl xl:text-6xl text-gray-800">
          클라우드 컴퓨팅의
          <br />
          혁신적인 미래
        </div>
        <div class="not-italic font-bold text-base ml-1 text-teal-700 leading-10">
          컴퓨팅 요구 사항을 위한 최고의 솔루션
        </div>

        <div>
          <button class="border-transparent bg-teal-700 text-white font-light flex justify-center items-center rounded-5 px-4 py-2">
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
      <img class="md:w-1/2" style="width: 50%; height: 100%;" :src="require('../img/main_top_image.svg')" />
    </div>

    <!-- 장점 컨테이너 -->
    <div class="flex justify-between my-32 max-md:flex-col">
      <div class="flex items-start sub-introduce-container-box md:w-1/3 m-2">
        <div class="font-bold text-gray-800 max-lg:text-xl lg:text-3xl mb-1">목적에 따라 <br /> 다양한 플랜 제공</div>
        <img class="self-end" style="width: 65%;" :src="require('../img/introduce1_img.svg')" />
      </div>

      <div class="flex items-start sub-introduce-container-box md:w-1/3 m-2">
        <div class="font-bold text-gray-800 max-lg:text-xl lg:text-3xl mb-3">원하는 사양의 <br /> 컴퓨터 구성을 빠르게</div>
        <img class="self-end" style="width: 65%;" :src="require('../img/introduce2_img.svg')" />
      </div>

      <div class="flex items-start sub-introduce-container-box md:w-1/3 m-2">
        <div class="font-bold text-gray-800 max-lg:text-xl lg:text-3xl mb-3">언제 어디서나 <br /> 클라우드 노트북에 접속</div>
        <img class="self-end" style="width: 65%;" :src="require('../img/introduce3_img.svg')" />
      </div>
    </div>
  </div>

  <div class="w-full">
    <!-- 서비스 Title -->
    <div class="not-italic font-bold text-center text-gray-800 max-md:text-2xl md:text-4xl lg:text-5xl">
      Blueberry를 통해 쉽고 빠르게 <br /> 클라우드 환경을 구축하세요
    </div>

    <!-- 서비스 컨테이너 : 캐러셀 UI -->
    <div class="w-full overflow-x-hidden m-auto p-12 flex content-center justify-center relative">
      <!-- 캐러셀 네비게이션 버튼 -->
      <img v-if="carouselIndex != -1"
      :src="require('../img/carousel_prev.svg')"
      class="service-container-carousel-button max-lg:left-[2%] lg:left-[15%]" @click="prev"/>
      <img v-if="carouselIndex != 1"
      :src="require('../img/carousel_next.svg')"
      class="service-container-carousel-button max-lg:right-[2%] lg:right-[15%]" @click="next"/>

      <!-- 캐러셀 -->
      <div ref="carousel" class="service-container-carousel-items">
        <div v-for="i in 3" :key="i" class="max-md:m-2 md:m-3 lg:m-10 service-container-carousel-item">
          <img :src="require('../img/designer_plan_img.svg')" />
          <div>
            Service {{ i }}
          </div>
          <div>
            | 이 서비스는 엄청난 걸 제공합니다!
          </div>
          <div>
            | 이 서비스는 엄청난 걸 제공합니다!
          </div>
          <div>
            | 이 서비스는 엄청난 걸 제공합니다!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleHeader from './TitleHeader.vue';

export default {
  name: 'MainPage',
  data() {
    return {
      carouselIndex: 0,
      // settings: 
      // {
      //   itemsToShow: 1,
      //   snapAlign: 'center',
      // },
    }
  },
  methods: {
    prev() {
      let carouselImg = document.querySelector('.service-container-carousel-item');
      let size = carouselImg.clientWidth;
      let move = 0;

      if (this.carouselIndex == 0) move = 95;
      if (this.carouselIndex < 0) return;
      this.carouselIndex -= 1;

      this.$refs.carousel.style.transform = `translate3d(${-size * this.carouselIndex + move
        }px, 0, 0)`;
    },
    next() {
      let carouselImg = document.querySelector('.service-container-carousel-item');
      let size = carouselImg.clientWidth;
      let move = 0;

      if (this.carouselIndex == 0) move = -95;
      if (this.carouselIndex > 0) return;
      this.carouselIndex += 1;

      this.$refs.carousel.style.transform = `translate3d(${-size * this.carouselIndex + move
        }px, 0, 0)`;
    },
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
