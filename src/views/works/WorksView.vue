<template>
    <div class="page works-page flex flex-center p-5">
        <section class="flex flex-center">
            <div class="works-titles-container">
                <div
                    class="work-title-item magnetic"
                    :class="'item-' + item.id"
                    v-for="(item, index) in worksdata"
                    :key="item.id"
                    :item="item"
                    :data-name="item.id"
                    :itemIndex="index"
                    data-strength="30"
                    data-strength-text="10"
                    @mouseenter="handleTitleMouseEnter(item.id, $event)"
                    @mouseleave="handleTitleMouseLeave"
                    @mousemove="handleTitleMouseMove"
                >
                    <div class="title-container flex flex-center jcfs">
                        <img
                            v-if="store.isMobile"
                            :src="item.imageUrl"
                            alt=""
                        />
                        <div class="mask order-mask">
                            <p class="mr-3 item-order">#{{ index + 1 }}</p>
                        </div>
                        <div>
                            <h2 class="title title-grotesk">
                                {{ item.title }}
                            </h2>
                            <div class="mask">
                                <p class="item-subtitle">{{ item.subtitle }}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        v-if="index < worksdata.length - 1"
                        class="separator"
                    ></div>
                </div>
            </div>

            <div
                v-if="!store.isMobile"
                class="works-images-container magnetic"
                ref="imagesContainer"
            >
                <img
                    v-for="item in worksdata"
                    ref="images"
                    :src="item.imageUrl"
                    :alt="item.title"
                    :key="item.id"
                    :data-name="item.id"
                />
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount, nextTick } from 'vue';
import { useAppStore } from '../../stores/app';
import { useRouter } from 'vue-router';
import gsap from 'gsap';
/* utils */
import initLenis from '../../utils/lenis';
import worksdata from '../../data/works';
import magnetics from '../../utils/magnetics';
import gsapCore from 'gsap/gsap-core';

const store = useAppStore();
const router = useRouter();
const images = ref(null);
const imagesContainer = ref(null);
let lenis;

store.setActivePage('works');

/* methods */
const handleTitleMouseMove = (event) => magnetics.magnetIn(event);
const handleTitleMouseLeave = (event) => {
    store.setCursor('');
    magnetics.magnetOut(event);
};
const handleTitleMouseEnter = (name, event) => {
    store.setCursor('project');
    const dataname = event.target.getAttribute('data-name');

    images.value.forEach((image) => {
        const imageDataname = image.getAttribute('data-name');

        if (dataname === imageDataname) {
            gsap.fromTo(image, { scale: 1.2 }, { scale: 1, autoAlpha: 1 });
        } else {
            gsap.to(image, { autoAlpha: 0 });
        }
    });
};

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

const animateImages = (e) => {
    // gsap.to(imagesContainer.value, { autoAlpha: 0.6, duration: 1 });
    // const containerRect = imagesContainer.value.getBoundingClientRect();
    // const left = e.pageX - containerRect.width / 2 + 'px';
    // const top = e.pageY - containerRect.height / 2 + 'px';
    // gsap.to(imagesContainer.value, {
    //     left,
    //     top,
    //     duration: 0.4,
    //     ease: 'Power3.easeOut',
    // });
};

onMounted(async () => {
    await nextTick();

    lenis = initLenis();
    lenis.scrollTo('html');

    const { to, from } = store.router;

    if (from === 'home') {
        console.log('works: animate from home here');
    }

    window.addEventListener('mousemove', animateImages);
});

onBeforeUnmount(() => {
    lenis.destroy();
    window.removeEventListener('mousemove', animateImages);
});
</script>

<style lang="scss" scoped>
@import './WorksView.scss';
</style>
