<template>
    <div class="login-container">
        <TitleHeader></TitleHeader>

        <div class="login-container-form">
            <div class="login-title">
                <span>Login</span>
            </div>

            <form class="login-input-form">
                <input class="login-input" 
                placeholder="User ID"
                />
                <input class="login-input" 
                placeholder="User Password"
                type="password"
                />
            </form>

            <div>
                <span class="login-content-first">
                    계정이 없으신가요?
                </span>
                <span class="login-content-second">
                    회원가입
                </span>
            </div>

            <div>
                <button class="login-button">로그인</button>
            </div>
        </div>
    </div>

    <img class="login-wave"
    :src="require('../img/wave.svg')"/>
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
  