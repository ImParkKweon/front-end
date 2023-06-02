<template>
    <!-- Dropdown container -->
    <!-- :data-dropdown-toggle="base" -->
    <div :ref="'dropdownMenu-' + base" @click="documentClick">
        <button id="dropdownDefaultButton" @click="toggleDropdown"
            class="w-full text-black bg-white hover:bg-gray-200 focus:outline-none 
                    border-2 border-teal-700 font-medium rounded-lg text-sm px-4 py-3 text-center inline-flex items-center my-2 flex justify-between" type="button">
            <span class="self-center text-center">
                {{ base }}
            </span>
            <svg class="self-end w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <!-- Dropdown menu -->
        <div :id="base"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-72 lg:w-96 dark:bg-gray-700">
            <ul class="py-2 text-base text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li v-for="i in content" :key="i">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        {{ i }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'SubscribePage',
    data() {
        return {
        }
    },
    methods: {
        async toggleDropdown() {
            const dropdownList = await document.getElementById(this.base);
            await dropdownList.classList.toggle("hidden");
            await dropdownList.classList.toggle("absolute");

            // $(document).click(function () {
            //     $('#drop').hide();
            // });
        },
        // documentClick(e) {
        //     let dropID = 'dropdownMenu-' + this.base;
        //     let el = this.$refs[dropID];
        //     let target = e.target;
        //     console.log(el);
        //     console.log(e.target);
        //     if ((el !== target) && !el.contains(target)) {
        //         this.toggleDropdown();
        //     }
        // }
    },
    mounted() {
        console.log(this.content);
    },
    props: {
        base: String,
        content: Array,
    },
    created() {
        // document.addEventListener('click', this.documentClick);
    },
    // unmounted() {
    //     document.removeEventListener('click', this.documentClick);
    // },
    components: {
    },
}
</script>
  
<style>
@import '../css/MainPage.css';
</style>
  