<script setup>
import { watch, ref, onMounted } from 'vue';
import gsap from 'gsap';
import { useAppStore } from '../../stores/app';

const appStore = useAppStore();
const cursor = ref(null);

onMounted(() => {
    window.addEventListener('mousemove', (e) => {
        appStore.setMouseCoordinates({
            x: e.pageX - 15 + 'px',
            y: e.pageY - 15 + 'px',
        });
    });
});

watch(
    () => appStore.mouseCoordinates,
    () => {
        const { x, y } = appStore.mouseCoordinates;

        gsap.to(cursor.value, {
            duration: 0.6,
            top: y,
            left: x,
            ease: 'Power2.out',
        });
    }
);
</script>

<template>
    <div
        class="cursor flex flex-center"
        ref="cursor"
        :class="appStore.cursor.className"
    ></div>
</template>

<style lang="scss">
@import './Cursor.scss';
</style>
