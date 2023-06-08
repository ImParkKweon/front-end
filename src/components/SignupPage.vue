<template>
    <TitleHeader></TitleHeader>
    <div class="container mx-auto lg:px-5 lg:w-9/12 max-lg:px-4">

        <div class="w-1/3 max-2xl:w-1/2 max-xl:w-full flex flex-col text-center m-auto justify-center"
            data-aos="fade-zoom-in" data-aos-easing="ease-in-out" data-aos-offset="0">
            <div class="not-italic font-semibold m-0 text-teal-700 max-sm:text-4xl sm:text-5xl m-5">
                <span>Sign Up</span>
            </div>

            <form class="w-full flex flex-col items-center justify-center
            ">
                <table class="text-left w-full">
                    <tr>
                        <td class="py-4 font-bold">
                            아이디
                        </td>
                        <td class="border-b-2 border-gray-100">
                            <input id="id" type="text" class="w-full py-3 px-1
                            border-none border-transparent focus:border-transparent focus:ring-0" />
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2" class="text-gray-600 font-light pt-1 pb-7 text-right">
                            0~0자 / 영문, 숫자 사용 가능
                        </td>
                    </tr>

                    <tr>
                        <td class="py-4 font-bold">
                            비밀번호
                        </td>
                        <td class="border-b-2 border-gray-100">
                            <input id="pw" type="password" class="py-3 px-1 w-full 
                            border-none border-transparent focus:border-transparent focus:ring-0" />
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2" class="text-gray-600 font-light pt-1 pb-7 text-right">
                            0~0자 / 문자, 숫자, 특수문자 모두 혼용
                        </td>
                    </tr>

                    <tr>
                        <td class="py-4 font-bold">
                            비밀번호 확인
                        </td>
                        <td class="border-b-2 border-gray-100">
                            <input id="pwconfig" type="password" class="py-3 px-1 w-full 
                            border-none border-transparent focus:border-transparent focus:ring-0" />
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2" class="text-gray-600 font-light pt-1 pb-7 text-right">
                            비밀번호를 다시 입력해 주세요.
                        </td>
                    </tr>
                </table>
            </form>

            <div class="my-4 border-b-2 border-gray-100"></div>

            <div class="text-left mb-2 text-xl font-bold">
                <span>가입 약관 동의</span>
            </div>

            <!-- 모든 약관 동의 (allCheck) -->
            <div class="flex items-center mr-4 mt-4 mb-3">
                <input id="allCheck" type="checkbox" value="checkbox-1"
                    class="cursor-pointer w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    @click="allCheck">
                <label for="allCheck" class="ml-2 font-medium text-gray-900 dark:text-gray-300">
                    모든 약관에 동의합니다.
                </label>
            </div>

            <!-- 약관 동의 (checkbox-i)-->
            <div v-for="i in checkBox" :key="i"
                class="flex max-sm:flex-col max-sm:justify-start max-sm:items-start items-center justify-between mr-4 mb-1">
                <div class="justify-self-start">
                    <input :id="'checkbox-' + i" :value="'checkbox-' + i" name="checkbox" type="checkbox" 
                        class="cursor-pointer w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label :for="'checkbox-' + i" class="ml-2 font-base text-gray-900 dark:text-gray-300">
                        {{ i }}
                    </label>
                </div>


                <span class="max-sm:self-end cursor-pointer justify-self-end text-gray-300 underline">
                    상세보기
                </span>
            </div>

            <div class="my-4 border-b-2 border-gray-100"></div>

            <div>
                <button class="login-button max-md:text-xl">회원가입</button>
            </div>
        </div>
    </div>

    <img class="login-wave static" :src="require('../img/wave.svg')" />
</template>
  
<script>
import TitleHeader from './TitleHeader.vue';

export default {
    name: 'SignupPage',
    data() {
        return {
            checkBox: [
                "1 이용약관 및 처리방침에 동의합니다.", 
                "2 이용약관 및 처리방침에 동의합니다.",
                "3 이용약관 및 처리방침에 동의합니다."
            ],
            allChecked: false,
        }
    },
    methods: {
        allCheck() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            
            if(!this.allChecked) {
                checkboxes.forEach((checkbox) => {
                    checkbox.checked = true;
                });
                this.allChecked = true;
            }
            else {
                checkboxes.forEach((checkbox) => {
                    checkbox.checked = false;
                });
                this.allChecked = false;
            }
        }
    },
    props: {

    },
    components: {
        TitleHeader: TitleHeader,
    },
    watch: {
        // allCheck: function(newValue) {
        //     if(!newValue) {
        //         const allCheckBox = document.getElementById('allCheck');
        //         allCheckBox.checked = false;
        //     }
        // }
    },
    created() {
        
    },
}
</script>
  
<style>
@import '../css/LoginPage.css';
</style>
  