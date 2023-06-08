<template>
    <!-- Dropdown container -->
    <!-- :data-dropdown-toggle="base" -->
    <div :ref="'dropdownMenu-' + base">
        <button id="dropdownDefaultButton" :data-dropdown-toggle="base"
            class="w-full text-black bg-white hover:bg-gray-200 focus:outline-none 
                    border-2 border-teal-700 font-medium rounded-lg text-sm px-4 py-3 text-center inline-flex items-center my-2 flex justify-between" type="button">
            <span class="self-center text-center">
                {{ baseContent }}
            </span>
            <svg class="self-end w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <!-- Dropdown menu -->
        <div :id="base"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-72 lg:w-96 dark:bg-gray-700 cursor-pointer">
            <ul class="py-2 text-base text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li v-for="i in content" :key="i">
                    <div @click="changeBaseContent(i)" href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        {{ i }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import AOS from 'aos';
import "aos/dist/aos.css";

export default {
    name: 'SubscribePage',
    data() {
        return {
            baseContent: this.base,
        }
    },
    methods: {
        toggleDropdown() {
            const dropdownList = document.getElementById(this.base);
            dropdownList.classList.toggle("hidden");
            // dropdownList.classList.toggle("absolute");
        },
        changeBaseContent(data) {
            this.baseContent = data; 
            this.toggleDropdown();
            this.$emit('setDropdownData', this.category, data);
        },
    },
    mounted() {
        // console.log(this.content);
    },
    props: {
        base: String,
        content: Array,
        category: String,
    },
    components: {
    },
    created() {
        AOS.init();
    },
}
</script>
  
<style>
@import '../css/MainPage.css';
</style>
  