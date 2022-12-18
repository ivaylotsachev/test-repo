<script setup>
import { watch, ref, onMounted } from 'vue';
import gsap from 'gsap';
import { useAppStore } from '../../stores/app';

const appStore = useAppStore();
const cursor = ref(null);

onMounted(() => {
    window.addEventListener('mousemove', (e) => {
        appStore.setCoordinates({
            x: e.pageX - 15 + 'px',
            y: e.pageY - 15 + 'px',
        });
    });
});

watch(
    () => appStore.cursor.className,
    (value) => {
        gsap.to(cursor.value, {
            duration: 0.8,
            scale: value === 'active' ? 3 : 1,
            ease: 'power3.out',
        });
    }
);

watch(
    () => appStore.coordinates,
    () => {
        const { x, y } = appStore.coordinates;

        gsap.to(cursor.value, {
            duration: 0.8,
            top: y,
            left: x,
            ease: 'Power3.out',
        });
    }
);
</script>

<template>
    <div ref="cursor" class="cursor" :class="appStore.cursor.className"></div>
</template>

<style>
@import './Cursor.scss';
</style>
