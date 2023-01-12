<template>
    <div
        class="transition-layer-container flex flex-center w-100-vw h-100-vh absolute"
    >
        <div class="top"></div>
        <h1
            v-if="store.isInitialLoading"
            class="title transition-title tr-title tr-title-one flex"
            ref="trTitleOne"
        ></h1>
        <h1
            v-if="store.isInitialLoading"
            class="title transition-title tr-title tr-title-two flex"
            ref="trTitleTwo"
        ></h1>
        <div v-else class="mask">
            <h1 class="transition-title">{{ store.activePage }}</h1>
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAppStore } from '../../stores/app';
import lettering from '../../utils/lettering';

const store = useAppStore();
const trTitleOne = ref(null);
const trTitleTwo = ref(null);

onMounted(() => {
    lettering(trTitleOne.value, 'Be.Creative');
    lettering(trTitleTwo.value, 'Be.Different');
});
</script>

<style lang="scss" scoped>
@import './TransitionLayer.scss';
</style>
