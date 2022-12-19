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
            duration: 0.5,
            scale: value === 'active' ? 3 : 1,
            ease: 'power3.out',
        });
        gsap.to('.cursor p', { scale: 0.4 });
    }
);

watch(
    () => appStore.coordinates,
    () => {
        const { x, y } = appStore.coordinates;

        gsap.to(cursor.value, {
            duration: 0.5,
            top: y,
            left: x,
            ease: 'Power3.out',
        });
    }
);
</script>

<template>
    <div
        ref="cursor"
        class="cursor flex flex-center"
        :class="appStore.cursor.className"
    >
        <p>{{ appStore.cursor.text }}</p>
    </div>
</template>

<style lang="scss">
@import './Cursor.scss';
</style>
