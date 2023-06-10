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
                            <input v-model="userID" id="id" type="text" class="w-full py-3 px-1
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
                            <input v-model="userPW" id="pw" type="password" class="py-3 px-1 w-full 
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
                            <input v-model="userPW_check" id="pwconfig" type="password" class="py-3 px-1 w-full 
                            border-none border-transparent focus:border-transparent focus:ring-0" />
                        </td>
                    </tr>

                    <tr>
                        <td v-if="checkPW_content == 'default'"
                        colspan="2" class="text-gray-600 font-light pt-1 pb-7 text-right">
                            비밀번호를 다시 입력해 주세요.
                        </td>
                        <td v-if="checkPW_content == 'red'"
                        colspan="2" class="text-red-600 font-light pt-1 pb-7 text-right">
                            다시 확인해 주세요.
                        </td>
                        <td v-if="checkPW_content == 'green'"
                        colspan="2" class="text-green-600 font-light pt-1 pb-7 text-right">
                            완벽해요!
                        </td>
                    </tr>
                </table>
            </form>

            <div class="my-4 border-b-2 border-gray-100"></div>

            <div class="text-left mb-2 text-xl font-bold">
                <span>가입 약관 동의</span>
            </div>

            <!-- 모든 약관 동의 (all_check) -->
            <div class="flex items-center mr-4 mt-4 mb-3">
                <input id="all_check" type="checkbox" value="checkbox-1"
                    class="cursor-pointer w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    @click="all_check">
                <label for="all_check" class="ml-2 font-medium text-gray-900 dark:text-gray-300">
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
                <button @click="register" class="login-button max-md:text-xl">회원가입</button>
            </div>
        </div>
    </div>

    <img class="login-wave static" :src="require('../img/wave.svg')" />
</template>
  
<script>
import TitleHeader from './TitleHeader.vue';
import axios from 'axios';

export default {
    name: 'SignupPage',
    data() {
        return {
            checkBox: [
                "1 이용약관 및 처리방침에 동의합니다.",
                "2 이용약관 및 처리방침에 동의합니다.",
                "3 이용약관 및 처리방침에 동의합니다."
            ],
            all_checked: false,

            userID: null,
            userPW: null,
            userPW_check: null,
            userID_config: true,
            userPW_config: true,
            checkPW_content: "default",
        }
    },
    methods: {
        all_check() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');

            if (!this.all_checked) {
                checkboxes.forEach((checkbox) => {
                    checkbox.checked = true;
                });
                this.all_checked = true;
            }
            else {
                checkboxes.forEach((checkbox) => {
                    checkbox.checked = false;
                });
                this.all_checked = false;
            }
        },
        async register() {
            // 입력값 유효 검사
            if (this.userID == null || this.userID == "") {
                this.userID_config = false;
            }
            else {
                this.userID_config = true;
            }

            if (this.userPW == null || this.userPW == "") {
                this.userPW_config = false;
            }
            else if (!this.userPW_check) {
                this.userPW_config = false;
            }
            else {
                this.userPW_config = true;
            }
            
            // 회원가입 api 요청
            if (this.userID_config && this.userPW_config) {
                await axios.post(
                    'backend-svc.product.svc.cluster.local/register',
                    {
                        username: this.userID,
                        pwd: this.userPW
                    }).then((res) => {
                        console.log(res);
                        if (res) {
                            this.$router.push('/');
                        }
                        else {
                            console.log("로그인 실패");
                        }
                    });
            }
        }
    },
    watch: {
        userPW_check: function(newVal) {
            if (newVal == this.userPW) {
                this.checkPW_content = "green";
            }
            else if (newVal != this.userPW) {
                this.checkPW_content = "red";
            }
        }
    },
    props: {

    },
    components: {
        TitleHeader: TitleHeader,
    },
    created() {

    },
}
</script>
  
<style>
@import '../css/LoginPage.css';
</style>
  