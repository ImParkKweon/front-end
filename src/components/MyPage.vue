<template>
    <TitleHeader>
    </TitleHeader>
    <div class="relative container mx-auto lg:px-5 lg:w-9/12 max-lg:px-2">

        <div class="my-4">
            <span class="text-4xl font-semibold p-2">마이페이지</span>
        </div>

        <div class="flex flex-auto max-xl:flex-col w-full items-stretch content-normal">
            <!-- 결제한 서비스 (left) -->
            <div class="md:mr-3 md:p-12 max-md:p-7 rounded-5 special-gradient xl:w-1/2 max-xl:mb-4">
                <div class="sm:text-4xl max-sm:text-2xl font-semibold">
                    {{ serviceName }}
                </div>
                <div class="text-lg">
                    {{ serviceContent }}
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
                                PORT
                            </td>
                        </tr>

                        <tr>
                            <td class="py-4 border-r-2 border-gray-100">
                                <span>
                                    0.0.0.0
                                </span>
                            </td>
                            <td class="py-4 border-r-2 border-gray-100">
                                <span>
                                    3434
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

                        <button
                            class="bg-teal-700 rounded-5 md:px-4 max-md:px-3 text-white font-base hover:bg-teal-800 max-md:text-sm">
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
                                    2023년 10월 22일
                                </span>
                            </td>
                            <td class="py-4">
                                <span>
                                    KRW {{ price }}
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>


        <TitleHeader></TitleHeader>
        <div class="relative container mx-auto lg:px-5 lg:w-9/12 max-lg:px-2">
            <div class="my-4">
                <span class="text-4xl font-semibold p-2">마이페이지</span>
            </div>

            <div class="flex flex-auto max-xl:flex-col w-full items-stretch content-normal">
                <!-- 결제한 서비스 (left) -->
                <div class="md:mr-3 md:p-12 max-md:p-7 rounded-5 special-gradient xl:w-1/2 max-xl:mb-4">
                    <div class="sm:text-4xl max-sm:text-2xl font-semibold">
                        {{ serviceName }}
                    </div>
                    <div class="text-lg">
                        {{ serviceContent }}
                    </div>

                    <table class="rounded-4 bg-white mt-4 w-full xl:h-4/5">
                        <tr v-for="i in myData" :key="i">
                            <td class="max-xl:py-5 w-1/2 pr-5 font-semibold text-right">
                                {{ i.base }}
                            </td>
                            <td class="max-xl:py-5 w-1/2 pl-5 border-l-2 border-gray-100">
                                {{ i.content }}
                            </td>
                        </tr>
                    </table>
                </div>

                <!-- 접속, 예상 결제 정보 (right) -->
                <div class="h-full xl:w-1/2">
                    <!-- 접속 정보 -->
                    <div class="mb-3 md:mr-3 md:p-12 max-md:p-7 rounded-5 special-gradient">
                        <div class="sm:text-4xl max-sm:text-2xl font-semibold">접속 정보</div>

                        <table class="rounded-4 bg-white mt-4 w-full text-center">
                            <tr>
                                <td class="py-4 font-semibold border-r-2 border-gray-100">IP</td>
                                <td class="py-4 font-semibold border-r-2 border-gray-100">
                                    PORT
                                </td>
                                <!-- <td class="py-4 font-semibold">계정 이름</td> -->
                            </tr>

                            <tr>
                                <td class="py-4 border-r-2 border-gray-100">
                                    <span> 0.0.0.0 </span>
                                </td>
                                <td class="py-4 border-r-2 border-gray-100">
                                    <span> 3004 </span>
                                </td>
                                <!-- <td class="py-4">
                <span> user </span>
              </td> -->
                            </tr>
                        </table>
                    </div>

                    <!-- 예상 결제 정보 -->
                    <div class="md:mr-3 md:p-12 max-md:p-7 rounded-5 special-gradient">
                        <div class="flex justify-between">
                            <div class="sm:text-4xl max-sm:text-2xl font-semibold">
                                예상 결제 정보
                            </div>

                            <button
                                class="bg-teal-700 rounded-5 md:px-4 max-md:px-3 text-white font-base hover:bg-teal-800 max-md:text-sm">
                                구독 취소
                            </button>
                        </div>

                        <table class="rounded-4 bg-white mt-4 w-full text-center">
                            <tr>
                                <td class="py-4 font-semibold border-r-2 border-gray-100">
                                    결제 예상일
                                </td>
                                <td class="py-4 font-semibold">결제 예상액</td>
                            </tr>

                            <tr>
                                <td class="py-4 border-r-2 border-gray-100">
                                    <span> 2023년 6월 30일 </span>
                                </td>
                                <td class="py-4">
                                    <span> KRW 21,834 </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <img class="w-full absolute bottom-0 relative" :src="require('../img/wave.svg')" />
</template>

<script>
import TitleHeader from "./TitleHeader.vue";
import axios from "axios";

// Vuex
import { computed } from "vue";
import { useStore } from "vuex";

export default {
    name: "MyPage",
    setup() {
        const store = useStore();
        const plan = computed(() => store.state.plan);
        return { plan }
    },
    data() {
        return {
            myData: [
                {
                    "base": "OS",
                    "content": null,
                },
                {
                    "base": "CPU 개수",
                    "content": null
                },
                {
                    "base": "RAM 단위",
                    "content": null
                },
                {
                    "base": "GPU 개수",
                    "content": null
                },
                {
                    "base": "GPU 제조사",
                    "content": null
                },
                {
                    "base": "Storage 용량",
                    "content": null
                },
                {
                    "base": "Storage 개수",
                    "content": null
                },
            ],
            username: null,
            serviceName: null,
            serviceContent: null,
            price: 0,
        }
    },
    async created() {
        if (localStorage.getItem('username') != undefined) {
            this.username = localStorage.getItem('username');

            // 현재 유저가 구독한 서비스 정보를 가져오는 api
            await axios.post('http://ub.udon.party:9010/user', {
                username: this.username
            }).then((res) => {
                console.log(res);
                if (res.data.success) {
                    let i = 0;
                    for (const key in res.data) {
                        if (key != "success" && key != "serviceNum") {
                            this.myData[i].content = res.data[key];
                            i++;
                        }
                        if (key == "serviceNum") {
                            this.serviceName = this.plan[res.data[key]].name;
                            this.serviceContent = this.plan[res.data[key]].comment;
                        }
                    }
                }

                console.log(this.myData);
            })
        }

        this.price = Math.floor(Math.random() * 40000) + 10000;

        setInterval(() => {
            this.price += 0.3;
        }, 1000);
    },
    methods: {
    },
    props: {
    },
    components: {
        TitleHeader: TitleHeader
    },
};
</script>

<style>
@import "../css/LoginPage.css";
</style>
