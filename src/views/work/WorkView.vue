<script setup>
import { onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '../../stores/app';
import gsap from 'gsap';
import worksdata from '../../data/works';
import router from '../../router/router';

/* constants */
const route = useRoute();
const store = useAppStore();
const rects = store.imagesRect;
/* computed */
const item = computed(() => {
    let item = worksdata.find((item) => item.id === route.params.id);
    return item;
});
const styles = {
    width: rects.width + 'px' || '200px',
    height: rects.height + 'px' || '200px',
};

console.log('stryles', styles);

watch(
    () => store.router,
    async () => {
        const { to } = store.router;

        if (to === 'home') {
            store.setActivePage('home');
            router.push('/');
        }
        if (to === 'works') {
            store.setActivePage('home');
            router.push('/works');
        }
    }
);

onMounted(() => {
    // TODO: delete gsap when animation is complete
    gsap.set('.transition-layer-container', {
        yPercent: 130,
    });
    document.querySelector('html').classList.remove('js-scroll-disabled');

    gsap.to('.work-image-container', {
        width: '100%',
        height: '50vh',
        opacity: 1,
        delay: 0.6,
        onComplete: () => {
            gsap.from('h1', { autoAlpha: 0 });
            document
                .querySelector('html')
                .classList.remove('js-scroll-disabled');
        },
    });
});
</script>

<template>
    <div class="page work-page flex flex-center flex-column">
        <section class="flex flex-center flex-column h-100">
            <h1 class="title">{{ item.title }}</h1>
            <div class="work-image-container" :style="styles">
                <img
                    class="w-100 h-100"
                    :src="item.imageUrl"
                    :alt="item.title"
                />
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@import './WorkView.scss';
</style>
