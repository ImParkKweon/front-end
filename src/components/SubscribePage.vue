<template>
    <div class="relative container mx-auto lg:px-5 max-lg:px-3 lg:w-full">
        <TitleHeader></TitleHeader>

        <div class="text-center md:text-5xl max-md:text-4xl max-sm:text-2xl font-bold max-md:m-2 md:m-5 mb-3">
            클라우드 노트북의 사양을 <br />
            취향껏 커스터마이징하세요
        </div>
        <div class="text-center md:text-xl max-md:text-base">
            다양한 서비스에 맞춰 클라우드 노트북의 기본 사양을 제공합니다.
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
            <div class="lg:mr-4"
                v-for="(a, i) in osOption" :key="i">
                <input type="radio" :id="'react-option-' + i" 
                name="os-type" :value="'react-option-' + i" class="hidden peer">
                <label :for="'react-option-' + i" class="w-full p-5 max-lg:mt-3 rounded-4 border-2 border-gray-200 
                hover:ring ring-1-600 ring-offset-4 cursor-pointer cursor-pointer
                peer-checked:ring ring-teal-700 ring-offset-4 cursor-pointer">
                <img class="m-auto w-20" :src="require('@/img/' + a.file)" />
                <div class="text-center">
                    <div class="text-3xl mt-4 font-bold"
                    @click="selectedService.os = a.name">
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
                    CPU 단위 조정
                </div>

                <Dropdown :base="dropdown.cpu.base"
                :content="dropdown.cpu.content"
                :category="'cpu'"
                @setDropdownData="setDropdownData"/>
            </div>

            <!-- RAM 단위 조정 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="sm:text-lg">
                    RAM 단위 조정
                </div>

                <Dropdown :base="dropdown.ram.base"
                :content="dropdown.ram.content"
                :category="'ram'"
                @setDropdownData="setDropdownData"/>
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

                <Dropdown :base="dropdown.gpu.base"
                :content="dropdown.gpu.content"
                :category="'gpu'"
                @setDropdownData="setDropdownData"/>
            </div>

            <!-- GPU 제조사 선택 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="sm:text-lg">
                    제조사
                </div>

                <Dropdown :base="dropdown.gpuCompany.base"
                :content="dropdown.gpuCompany.content"
                :category="'gpuCompany'"
                @setDropdownData="setDropdownData"/>
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
                    용량
                </div>

                <Dropdown :base="dropdown.volume.base"
                :content="dropdown.volume.content"
                :category="'volume'"
                @setDropdownData="setDropdownData"/>
            </div>

            <!-- 스토리지 개수 선택 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="sm:text-lg">
                    개수
                </div>

                <Dropdown :base="dropdown.volumeCount.base"
                :content="dropdown.volumeCount.content"
                :category="'volumeCount'"
                @setDropdownData="setDropdownData"/>
            </div>
        </div>

        <button class="bg-[#00BF9E] hover:bg-[#12B79A] rounded-full max-md:px-32 md:px-36 py-4 flex m-auto my-4">
            <span class="text-white font-semibold max-md:text-2xl md:text-3xl">
                완료
            </span>
        </button>

    </div>
</template>
  
<script>
import TitleHeader from './TitleHeader.vue';
import Dropdown from './Dropdown.vue';

export default {
    name: 'SubscribePage',
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
                    "base": "CPU 단위를 조정해주세요.",
                    "content": ["cpu1", "cpu2", "cpu3"],
                    "selected": null,
                },
                "ram": {
                    "base": "RAM 단위를 조정해주세요.",
                    "content": ["ram1", "ram2", "ram3"],
                    "selected": null,
                },
                "gpu": {
                    "base": "GPU 개수를 조정해주세요.",
                    "content": ["gpu1", "gpu2", "gpu3"],
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
                    "base": "스토리지 개수를 선택해주세요.",
                    "content": ["1개", "2개", "3개"],
                    "selected": null,
                }
            },
            selectedService: {
                "os": "",
                "cpu": "",
                "ram": "",
                "gpu": "",
                "gpuCompany": "",
                "volume": "",
                "volumeCount": ""
            }
        }
    },
    methods: {
        // dropdown 컴포넌트에서 선택한 데이터를 저장함
        setDropdownData(category, data) {
            this.selectedService[category] = data;
            console.log(this.selectedService[category]);
        }
    },
    created() {
        // this.$router.go(0);
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
        Dropdown: Dropdown,
    }
}
</script>
  
<style>
@import '../css/MainPage.css';
</style>
  