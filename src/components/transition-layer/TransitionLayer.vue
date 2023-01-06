<template>
    <div
        class="transition-layer-container flex flex-center w-100-vw h-100-vh absolute"
    >
        <div class="top"></div>
        <div class="mask">
            <h1 class="transition-title">{{ store.activePage }}</h1>
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '../../stores/app';

const store = useAppStore();
const router = useRouter();

router.beforeEach((to) => store.setActivePage(to.name));

onMounted(() => {
    console.error('mounted', store.activePage);
});
</script>

<style lang="scss" scoped>
@import './TransitionLayer.scss';
</style>
