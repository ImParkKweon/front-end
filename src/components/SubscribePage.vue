<template>
    <div class="relative container mx-auto px-5 lg:w-9/12">
        <TitleHeader></TitleHeader>

        <div class="text-center text-5xl font-bold m-5 mb-3">
            클라우드 노트북의 사양을 <br />
            취향껏 커스터마이징하세요
        </div>
        <div class="text-center text-xl">
            다양한 서비스에 맞춰 클라우드 노트북의 기본 사양을 제공합니다.
        </div>

        <hr class="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700 my-12">

        <!-- 1. OS 선택 -->
        <div class="flex justify-left content-center">
            <img class="w-20" :src="require('@/img/step1.svg')" />
            <span class="text-4xl ml-3 font-bold self-center">
                OS 선택
            </span>
        </div>

        <div class="mt-3 ml-4">
            클라우드 노트북의 운영체제를 선택합니다.
        </div>

        <div class="flex max-lg:flex-col justify-center content-center my-3">
            <div class="w-full p-5 mr-3 max-lg:mt-3 rounded-4 border-2 border-gray-200 hover:ring ring-teal-600 ring-offset-4 cursor-pointer
            focus:ring ring-teal-700 ring-offset-4
            "
                v-for="i in osOption" :key="i">
                <img class="m-auto w-20" :src="require('@/img/' + i.file)" />
                <div class="text-center">
                    <div class="text-3xl mt-4 font-bold">
                        {{ i.name }}
                    </div>
                    <div class="mt-3">
                        {{ i.content }}
                    </div>
                </div>
            </div>
        </div>

        <!-- 2. CPU/RAM -->
        <div class="flex justify-left content-center">
            <img class="w-20" :src="require('@/img/step2.svg')" />
            <span class="text-4xl ml-3 font-bold self-center">
                CPU/RAM
            </span>
        </div>

        <div class="flex max-lg:flex-col justify-left content-center p-3">
            <!-- CPU 단위 조정 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="text-lg">
                    CPU 단위 조정
                </div>

                <Dropdown :base="dropdown.cpu.base"
                :content="dropdown.cpu.content"/>
            </div>

            <!-- RAM 단위 조정 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="text-lg">
                    RAM 단위 조정
                </div>

                <Dropdown :base="dropdown.ram.base"
                :content="dropdown.ram.content"/>
            </div>
        </div>

        <!-- 3. GPU -->
        <div class="flex justify-left content-center">
            <img class="w-20" :src="require('@/img/step3.svg')" />
            <span class="text-4xl ml-3 font-bold self-center">
                GPU
            </span>
        </div>

        <div class="flex max-lg:flex-col justify-left content-center p-3">
            <!-- GPU 단위 조정 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="text-lg">
                    GPU 개수 조정
                </div>

                <Dropdown :base="dropdown.gpu.base"
                :content="dropdown.gpu.content"/>
            </div>

            <!-- GPU 제조사 선택 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="text-lg">
                    제조사
                </div>

                <Dropdown :base="dropdown.gpuCompany.base"
                :content="dropdown.gpuCompany.content"/>
            </div>
        </div>

        <!-- 4. Storage -->
        <div class="flex justify-left content-center">
            <img class="w-20" :src="require('@/img/step4.svg')" />
            <span class="text-4xl ml-3 font-bold self-center">
                Storage
            </span>
        </div>

        <div class="flex max-lg:flex-col justify-left content-center p-3">
            <!-- 스토리지 용량 선택 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="text-lg">
                    용량
                </div>

                <Dropdown :base="dropdown.volume.base"
                :content="dropdown.volume.content"/>
            </div>

            <!-- 스토리지 개수 선택 -->
            <div class="w-1/2 m-2 max-lg:w-full">
                <div class="text-lg">
                    개수
                </div>

                <Dropdown :base="dropdown.volumeCount.base"
                :content="dropdown.volumeCount.content"/>
            </div>
        </div>


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
                    "content": ["cpu1", "cpu2", "cpu3"]
                },
                "ram": {
                    "base": "RAM 단위를 조정해주세요.",
                    "content": ["ram1", "ram2", "ram3"]
                },
                "gpu": {
                    "base": "GPU 개수를 조정해주세요.",
                    "content": ["gpu1", "gpu2", "gpu3"]
                },
                "gpuCompany": {
                    "base": "GPU 제조사를 선택해주세요.",
                    "content": ["NVIDIA", "AMD"]
                },
                "volume": {
                    "base": "스토리지 용량을 선택해주세요.",
                    "content": ["256GB", "512GB", "1TB", "2TB"]
                },
                "volumeCount": {
                    "base": "스토리지 개수를 선택해주세요.",
                    "content": ["1개", "2개", "3개"]
                }
            }
        }
    },
    methods: {
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
  