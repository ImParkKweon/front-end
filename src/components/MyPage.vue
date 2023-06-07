<template>
    <TitleHeader></TitleHeader>
    <div class="relative container mx-auto lg:px-5 lg:w-9/12 max-lg:px-2" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-out" data-aos-offset="0">

        <div class="my-4">
            <span class="text-4xl font-semibold p-2">마이페이지</span>
        </div>

        <div class="flex flex-auto max-xl:flex-col w-full items-stretch content-normal">
            <!-- 결제한 서비스 (left) -->
            <div class="md:mr-3 md:p-12 max-md:p-7 rounded-5 special-gradient xl:w-1/2 max-xl:mb-4">
                <div class="sm:text-4xl max-sm:text-2xl font-semibold">
                    디자이너인 당신을 위해
                </div>
                <div class="text-lg">
                    디자인 환경에 최적화된 클라우드 노트북 서비스
                </div>

                <table class="rounded-4 bg-white mt-4 w-full xl:h-4/5">
                    <tr v-for="i in myData" :key="i">
                        <td class="max-xl:py-5 w-1/2 pr-5 font-semibold text-right">
                            {{ i.base }}
                        </td>
                        <td class="max-xl:py-5 w-1/2 pl-5
                        border-l-2 border-gray-100">
                            {{ i.content }}
                        </td>
                    </tr>
                </table>
            </div>

            <!-- 접속, 예상 결제 정보 (right) -->
            <div class="h-full xl:w-1/2">
                <!-- 접속 정보 -->
                <div class="mb-3 md:mr-3 md:p-12 max-md:p-7 rounded-5 special-gradient">
                    <div class="sm:text-4xl max-sm:text-2xl font-semibold">
                        접속 정보
                    </div>

                    <table class="rounded-4 bg-white mt-4 w-full text-center">
                        <tr>
                            <td class="py-4 font-semibold border-r-2 border-gray-100">
                                IP
                            </td>
                            <td class="py-4 font-semibold border-r-2 border-gray-100">
                                비밀번호
                            </td>
                            <td class="py-4 font-semibold">
                                계정 이름
                            </td>
                        </tr>

                        <tr>
                            <td class="py-4 border-r-2 border-gray-100">
                                <span>
                                    0.0.0.0
                                </span>
                            </td>
                            <td class="py-4 border-r-2 border-gray-100
                            underline cursor-pointer">
                                <span>
                                    확인하기
                                </span>
                            </td>
                            <td class="py-4">
                                <span>
                                    user
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>

                <!-- 예상 결제 정보 -->
                <div class="md:mr-3 md:p-12 max-md:p-7 rounded-5 special-gradient">
                    <div class="flex justify-between">
                        <div class="sm:text-4xl max-sm:text-2xl font-semibold">
                            예상 결제 정보
                        </div>
                        
                        <button class="bg-teal-700 rounded-5 md:px-4 max-md:px-3 text-white font-base hover:bg-teal-800 max-md:text-sm">
                            구독 취소
                        </button>
                    </div>

                    <table class="rounded-4 bg-white mt-4 w-full text-center">
                        <tr>
                            <td class="py-4 font-semibold border-r-2 border-gray-100">
                                결제 예상일
                            </td>
                            <td class="py-4 font-semibold">
                                결제 예상액
                            </td>
                        </tr>

                        <tr>
                            <td class="py-4 border-r-2 border-gray-100">
                                <span>
                                    2023년 6월 30일
                                </span>
                            </td>
                            <td class="py-4">
                                <span>
                                    KRW 21,834
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>


    </div>

    <img class="login-wave static" :src="require('../img/wave.svg')" />
</template>
  
<script>
import TitleHeader from './TitleHeader.vue';

export default {
    name: 'MyPage',
    data() {
        return {
            myData: [
                {
                    "base": "OS",
                    "content": "Linux",
                },
                {
                    "base": "CPU 단위",
                    "content": "가상 1코어"
                },
                {
                    "base": "RAM 단위",
                    "content": "16GB"
                },
                {
                    "base": "GPU 개수",
                    "content": "1"
                },
                {
                    "base": "GPU 제조사",
                    "content": "NVIDIA"
                },
                {
                    "base": "Storage 용량",
                    "content": "256GB"
                },
                {
                    "base": "Storage 개수",
                    "content": "1"
                }
            ]
        }
    },
    methods: {
    },
    props: {

    },
    components: {
        TitleHeader: TitleHeader,
    }
}
</script>
  
<style>
@import '../css/LoginPage.css';
</style>
  