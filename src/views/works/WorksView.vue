<template>
    <div class="page works-page p-5">
        <div class="inner-container">
            <div class="work-item">
                <h1 class="title my-5">works item 1</h1>
            </div>
            <div class="work-item">
                <h1 class="title my-5">works item 1</h1>
            </div>
            <div class="work-item">
                <h1 class="title my-5">works item 1</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, watch, onBeforeUnmount, nextTick } from 'vue';
import { useAppStore } from '../../stores/app';
import { useRouter } from 'vue-router';
/* utils */
import initLenis from '../../utils/lenis';
import gsap from 'gsap';

const store = useAppStore();
const router = useRouter();
let lenis;

store.setActivePage('works');

watch(
    () => store.router,
    () => {
        const { to } = store.router;

        if (to === 'home') {
            console.log('works: animate to home here');
            router.push('/');
        }
    }
);

onMounted(async () => {
    await nextTick();

    lenis = initLenis();
    lenis.scrollTo('html');

    const { to, from } = store.router;

    if (from === 'home') {
        console.log('works: animate from home here');
    }
});

onBeforeUnmount(() => lenis.destroy());
</script>
