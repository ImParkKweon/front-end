<template>
    <TitleHeader></TitleHeader>
    <div class="container mx-auto lg:px-5 lg:w-9/12 max-lg:px-4">

        <div class="flex sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12 flex-col text-center m-auto" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-out" data-aos-offset="0">
            <div class="not-italic font-semibold m-0 text-teal-700 md:text-5xl max-md:text-4xl m-5">
                <span>Login</span>
            </div>

            <form class="login-input-form w-full">
                <!-- tailwind form -->
                <div class="relative">
                    <input type="text" id="user-id" class="block px-4 pb-4 pt-4 w-full text-base text-gray-900 bg-transparent rounded-full border border-1 border-good-gray appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600
                    focus:shadow-md peer" placeholder=" " />
                    <label for="floating_outlined"
                        class="absolute text-m text-gray-500/70 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 left-5">User
                        ID</label>
                </div>

                <div class="relative">
                    <input type="password" id="user-pw" class="block mt-2.5 mb-4 px-4 pb-4 pt-4 w-full text-base text-gray-900 bg-transparent rounded-full border border-1 border-good-gray appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600
                    focus:shadow-md peer" placeholder=" " />
                    <label for="floating_outlined"
                        class="absolute text-m text-gray-500/70 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 left-5">User
                        Password</label>
                </div>
            </form>

            <div>
                <span class="text-gray-400">
                    계정이 없으신가요?
                </span>
                <span @click="$router.push('/signup')" class="font-medium not-italic text-teal-700 underline">
                    회원가입
                </span>
            </div>

            <div>
                <button class="login-button">로그인</button>
            </div>
        </div>
    </div>

    <img class="login-wave max-[400px]:static" :src="require('../img/wave.svg')" />
</template>
  
<script>
import TitleHeader from './TitleHeader.vue';

export default {
    name: 'LoginPage',
    data() {
        return {

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
  