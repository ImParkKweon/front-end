<template>
    <TitleHeader></TitleHeader>

    <div class="relative container mx-auto lg:px-5 lg:w-9/12 max-lg:px-3 lg:my-16">
        <div class="text-center md:text-5xl max-md:text-4xl max-sm:text-2xl font-bold max-md:m-2 md:m-5 mb-3 mt-4">
            클라우드 노트북의 사양을 <br />
            취향껏 커스터마이징하세요
        </div>
        <div class="text-center md:text-xl max-md:text-base mb-4">
            다양한 서비스에 맞춰 클라우드 노트북의 기본 사양을 제공합니다.
        </div>

        <div
            class="special-gradient special-shadow flex max-md:flex-col rounded-5 sm:p-12 max-sm:p-8 w-8/12 max-2xl:w-full justify-between items-center max-sm:items-start m-auto mb-5">
            <div class="flex flex-col content-center">
                <!-- 선택한 플랜 제목 -->
                <div class="font-semibold max-lg:text-2xl lg:text-4xl">
                    {{ plan[$route.params.plan_num].name }}
                </div>

                <!-- 선택한 플랜 특징 -->
                <div class="p-2">
                    <div class="flex items-center mr-4 mt-4 mb-3" v-for="i in plan[$route.params.plan_num].spec" :key="i">
                        <input id="allCheck" type="checkbox" value="checkbox-1" disabled checked
                            class="w-6 h-6 checked:bg-[#00BF9E] border-none rounded">
                        <label for="allCheck" class="ml-2 font-light text-lg text-gray-900 dark:text-gray-300">
                            {{ i }}
                        </label>
                    </div>
                </div>
            </div>

            <div class="self-center">
                <img :src="require('@/img/' + plan[$route.params.plan_num].src + '.svg')">
            </div>
        </div>

        <hr class="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700 my-12">

        <!-- 1. OS 선택 -->
        <div class="flex justify-left content-center">
            <img class="w-20 max-sm:w-12" :src="require('@/img/step1.svg')" />
            <span class="max-sm:text-2xl sm:text-4xl ml-3 font-bold self-center">
                OS 선택
            </span>
        </div>

        <div class="mt-3 sm:ml-4 max-sm:ml-2">
            클라우드 노트북의 운영체제를 선택합니다.
        </div>

        <div class="flex max-lg:flex-col justify-center content-center my-3">
            <div class="lg:mr-4" v-for="(a, i) in osOption" :key="i">
                <input type="radio" :id="'react-option-' + i" name="os-type" :value="'react-option-' + i"
                    class="hidden peer">
                <label @click="selectedService.os = a.name" :for="'react-option-' + i" class="w-full p-5 max-lg:mt-3 rounded-4 border-2 border-gray-200 
                hover:ring ring-1-600 ring-offset-4 cursor-pointer cursor-pointer
                peer-checked:ring ring-teal-700 ring-offset-4 cursor-pointer">
                    <img class="m-auto w-20" :src="require('@/img/' + a.file)" />
                    <div class="text-center">
                        <div class="text-3xl mt-4 font-bold">
                            {{ a.name }}
                        </div>
                        <div class="mt-3">
                            {{ a.content }}
                        </div>
                    </div>
                </label>
            </div>
        </div>

        <!-- 2. CPU/RAM -->
        <div class="flex justify-left content-center">
            <img class="w-20 max-sm:w-12" :src="require('@/img/step2.svg')" />
            <span class="max-sm:text-2xl text-4xl ml-3 font-bold self-center">
                CPU/RAM
            </span>
        </div>

        <div class="flex max-lg:flex-col justify-left content-center p-3">
            <!-- CPU 단위 조정 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="sm:text-lg">
                    vCPU 단위 조정 (개)
                </div>

                <Dropdown :base="dropdown.cpu.base" :content="dropdown.cpu.content" :category="'cpu'"
                    @set_dropdown_data="set_dropdown_data" />
            </div>

            <!-- RAM 단위 조정 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="sm:text-lg">
                    RAM 단위 조정 (GB)
                </div>

                <Dropdown :base="dropdown.ram.base" :content="dropdown.ram.content" :category="'ram'"
                    @set_dropdown_data="set_dropdown_data" />
            </div>
        </div>

        <!-- 3. GPU -->
        <div class="flex justify-left content-center">
            <img class="w-20 max-sm:w-12" :src="require('@/img/step3.svg')" />
            <span class="max-sm:text-2xl text-4xl ml-3 font-bold self-center">
                GPU
            </span>
        </div>

        <div class="flex max-lg:flex-col justify-left content-center p-3">
            <!-- GPU 단위 조정 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="sm:text-lg">
                    GPU 개수 조정
                </div>

                <Dropdown :base="dropdown.gpu.base" :content="dropdown.gpu.content" :category="'gpu'"
                    @set_dropdown_data="set_dropdown_data" />
            </div>

            <!-- GPU 제조사 선택 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="sm:text-lg">
                    제조사
                </div>

                <Dropdown :base="dropdown.gpuCompany.base" :content="dropdown.gpuCompany.content" :category="'gpuCompany'"
                    @set_dropdown_data="set_dropdown_data" />
            </div>
        </div>

        <!-- 4. Storage -->
        <div class="flex justify-left content-center">
            <img class="w-20 max-sm:w-12" :src="require('@/img/step4.svg')" />
            <span class="max-sm:text-2xl text-4xl ml-3 font-bold self-center">
                Storage
            </span>
        </div>

        <div class="flex max-lg:flex-col justify-left content-center p-3">
            <!-- 스토리지 용량 선택 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="sm:text-lg">
                    용량 (GB)
                </div>

                <!-- <Dropdown :base="dropdown.volume.base" :content="dropdown.volume.content" :category="'volume'"
                    @set_dropdown_data="set_dropdown_data" /> -->
                <div class="my-1">
                    <div class="flex justify-between items-center">
                        <span>1</span>
                        <div
                            class="px-3 py-2 text-sm font-semibold text-white bg-teal-600 rounded-lg shadow-sm opacity-100 dark:bg-gray-700 m-auto">
                            {{ selectedService.volume }} GB
                        </div>
                        <span>256</span>
                    </div>

                    <input id="large-range" type="range" v-model=selectedService.volume min="1" max="256"
                        class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700">
                    <!-- {{ test }} -->
                </div>
            </div>

            <!-- 스토리지 개수 선택 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="sm:text-lg">
                    개수
                </div>

                <Dropdown :base="dropdown.volumeCount.base" :content="dropdown.volumeCount.content"
                    :category="'volumeCount'" @set_dropdown_data="set_dropdown_data" />
            </div>
        </div>

        <!-- 모든 사항을 선택해주세요. -->
        <div v-if="allSelected == false" id="toast-danger"
            class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 m-auto"
            role="alert">
            <div
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Error icon</span>
            </div>
            <div class="ml-3 text-sm font-normal">모든 사항을 선택해주세요.</div>
        </div>

        <!-- 완료 버튼 -->
        <button id="check-modal-button"
            @click="subscribe_select_complete"
            class="bg-[#00BF9E] hover:bg-[#12B79A] rounded-full max-md:px-32 md:px-36 py-4 flex m-auto my-4">
            <span class="text-white font-semibold max-md:text-2xl md:text-3xl">
                완료
            </span>
        </button>

        <!-- Main modal -->
        <div id="check-modal" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            서비스 선택 사항 확인
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6">
                        <div class="text-center sm:text-4xl max-sm:text-xl font-semibold">
                            {{ plan[$route.params.plan_num].name }}
                        </div>
                        <div class="text-center text-lg max-sm:text-sm mt-2">
                            {{ plan[$route.params.plan_num].comment }}
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
                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 justify-center">
                        <button @click="subscribe_selected_end"
                        type="button"
                            class="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                            확인
                        </button>
                        <button @click="modal.hide()"
                        type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-teal-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            취소
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
import TitleHeader from './TitleHeader.vue';
import Dropdown from './Dropdown.vue';

// Vuex
import { computed } from "vue";
import { useStore } from "vuex";
import { initFlowbite } from 'flowbite';
import { Modal } from 'flowbite';

export default {
    name: 'SubscribePage',
    setup() {
        const store = useStore();
        const plan = computed(() => store.state.plan);

        return { plan }
    },
    data() {
        return {
            osOption: [
                {
                    file: 'linux_icon.svg',
                    name: 'Linux',
                    content: '리눅스에 관한 굉장히 멋진 설명입니다.'
                },
                {
                    file: 'windows_icon.svg',
                    name: 'Windows',
                    content: '윈도우즈에 관한 굉장히 멋진 설명입니다.'
                },
                {
                    file: 'mac_icon.svg',
                    name: 'Mac OS',
                    content: '맥 OS에 관한 굉장히 멋진 설명입니다.'
                },
            ],
            dropdown: {
                "cpu": {
                    "base": "vCPU 단위를 조정해주세요.",
                    "content": ["1", "2", "4", "8"],
                    "selected": null,
                },
                "ram": {
                    "base": "RAM 단위를 조정해주세요.",
                    "content": ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB", "64GB"],
                    "selected": null,
                },
                "gpu": {
                    "base": "GPU 개수를 조정해주세요.",
                    "content": ["1", "2", "3"],
                    "selected": null,
                },
                "gpuCompany": {
                    "base": "GPU 제조사를 선택해주세요.",
                    "content": ["NVIDIA", "AMD"],
                    "selected": null,
                },
                "volume": {
                    "base": "스토리지 용량을 선택해주세요.",
                    "content": ["256GB", "512GB", "1TB", "2TB"],
                    "selected": null,
                },
                "volumeCount": {
                    "base": "추가 스토리지 개수를 선택해주세요.",
                    "content": ["1", "2"],
                    "selected": null,
                }
            },
            // 컨테이너 생성 시 필요한 정보
            selectedService: {
                "os": null,
                "cpu": null,
                "ram": null,
                "gpu": null,
                "gpuCompany": null,
                "volume": 128,
                "volumeCount": null
            },
            allSelected: null,
            // 확인 모달 창에서 띄울 선택 정보
            myData: [
                {
                    "base": "OS",
                    "content": null,
                },
                {
                    "base": "CPU 단위",
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
                }
            ],
            // modal component
            modal: null,
        }
    },
    methods: {
        // dropdown 컴포넌트에서 선택한 데이터를 저장함
        set_dropdown_data(category, data) {
            this.selectedService[category] = data;
            // console.log(this.selectedService[category]);
        },
        subscribe_select_complete() {
            console.log(this.selectedService);
            // if (this.check_all_selected()) {
            //     this.$router.push('/mypage');
            // }
            this.check_all_selected();
        },
        check_all_selected() {
            for (const key in this.selectedService) {
                if (this.selectedService[key] == null) {
                    this.allSelected = false;
                    return false;
                }
            }

            this.allSelected = true;

            let i = 0;
            for (const key in this.selectedService) {
                this.myData[i].content = this.selectedService[key];
                i++;
            }

            this.modal.show();
        },
        subscribe_selected_end() {
            this.modal.hide();

            // 현재 로그인한 계정에 구독 서비스 추가하는 api


            this.$router.push('/mypage');
        }
    },
    mounted() {
        initFlowbite();

        // modal component 생성
        const $targetEl = document.getElementById('check-modal');

        // modal component 옵션
        const options = {
            placement: 'center',
            backdrop: 'dynamic',
        closable: true,
            onHide: () => {
                console.log('modal is hidden');
            },
            onShow: () => {
                console.log('modal is shown');
            },
            onToggle: () => {
                console.log('modal has been toggled');
            }
        };

        this.modal = new Modal($targetEl, options);
    },
    // components: {
    //   Carousel,
    //   Slide,
    //   Navigation,
    // },
    components: {
        TitleHeader: TitleHeader,
        Dropdown: Dropdown,
    },
    props: {
    }
}
</script>
  
<style>
@import '../css/MainPage.css';
</style>
  