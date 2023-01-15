<template>
    <div class="page works-page flex flex-center">
        <section class="flex flex-center">
            <div class="works-titles-container">
                <div
                    v-for="(item, index) in worksdata"
                    class="work-title-item magnetic"
                    :class="'item-' + item.id"
                    :key="item.id"
                    :item="item"
                    :data-name="item.id"
                    :itemIndex="index"
                    data-strength="30"
                    data-strength-text="10"
                    @mouseenter="handleTitleMouseEnter(item.id, $event)"
                    @mouseleave="handleTitleMouseLeave"
                    @mousemove="handleTitleMouseMove"
                    @click="handleWorkItemClick(item.id)"
                >
                    <div class="title-container flex flex-center jcfs">
                        <!-- <img
                            v-if="store.isMobile"
                            :src="item.imageUrl"
                            alt=""
                        /> -->
                        <div class="mask order-mask">
                            <p class="mr-3 item-order">#{{ index + 1 }}</p>
                        </div>
                        <div class="mask">
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
import { setElementHeight } from '../../utils/utils';
import initLenis from '../../utils/lenis';
import worksdata from '../../data/works';
import magnetics from '../../utils/magnetics';
import animations from '../../animations';

const store = useAppStore();
const router = useRouter();
const images = ref(null);
const imagesContainer = ref(null);
let lenis;

store.setActivePage('works');
document.title = 'Tsachev Folio - Works';

/* methods */
const handleWorkItemClick = async (id) => {
    console.log('animate from works to single work here');
    await animations.workspage.toSingleWork();
    store.setActivePage('work');
    router.push(`/${id}`);
};

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
    async () => {
        const { to } = store.router;

        if (to === 'home') {
            store.setActivePage('home');
            await animations.workspage.toHome();
            router.push('/');
        }
    }
);

onMounted(async () => {
    await nextTick();

    setElementHeight('.works-page');

    lenis = initLenis();
    lenis.scrollTo('html');

    const { to, from } = store.router;

    if (store.isInitialLoading) {
        await animations.workspage.initial();
        store.setInitialLoading(false);
    } else {
        if (from === 'home') {
            console.log('works: animate from home here');
            await animations.workspage.fromHome();
        }
    }

    lenis.start();

    const { bottom, height, left, right, top, width, x, y } =
        imagesContainer.value.getBoundingClientRect();
    store.setImagesRect({ bottom, height, left, right, top, width, x, y });
});

onBeforeUnmount(() => {
    lenis?.destroy();
});
</script>

<style lang="scss" scoped>
@import './WorksView.scss';
</style>
