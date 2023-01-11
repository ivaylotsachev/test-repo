<template>
    <div class="page home-page flex flex-column">
        <section
            class="relative inner-container head-section flex flex-center mb-5"
        >
            <div class="titles-wrapper flex flex-column w-100-vw">
                <h1 ref="titleOne" class="title title-one flex uppercase"></h1>
                <h1 ref="titleTwo" class="title title-two flex uppercase"></h1>
                <h1
                    ref="titleThree"
                    class="title title-three flex uppercase"
                ></h1>
                <p class="head-location txt-md uppercase">
                    Born in 1977, Based in
                    <span class="italic">(currently)</span> Sofia, Bulgaria
                </p>
            </div>
            <div class="image-container relative">
                <img
                    src="../../assets/profile.jpg"
                    alt="ivaylo tsachev"
                    class="profile-image"
                />
                <div class="image-reveal w-100 h-100 absolute"></div>
            </div>
        </section>

        <section class="inner-container quote-section mt-5 mb-5">
            <p class="txt-lg mb-4">
                I`ve always wanted to create new things,
                <span class="is-brown">unique experience</span>, getting into
                web development changed a lot of things for me, and since then i
                try to push my work to new horizons with each project, always
                putting <span class="is-brown">quality</span> first.
            </p>
            <p class="txt-lg mb-4">
                All this is just the beginning, and i can`t wait to push it
                event further by working with you on your
                <span class="is-brown">next project</span>
            </p>
            <p class="txt-lg mb-4">
                With my experience in UI and product engineering, I
                <span class="is-brown">solve</span>
                product problems and build appealing usable web experiences.
            </p>
            <p class="txt-lg">
                <span class="is-brown">PASSIONATE</span> ABOUT WEB TECHNOLOGIES.
                I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER
                FRIENDLY INTERFACES.
                <span class="is-brown">I CREATE MEMORABLE</span> WEB
                EXPERIENCES.
            </p>
        </section>

        <section class="inner-container career-section mt-5">
            <h2 class="title-section txt-center italic">My road so far</h2>
            <div
                class="jobitem flex flex-column flex-center"
                v-for="item in jobdata"
                :class="`jobitem-${item.company.toLowerCase()}`"
                :key="item.id"
            >
                <JobItem :item="item" />
            </div>
        </section>

        <section class="to-works-section mt-5 flex flex-center flex-column">
            <p class="uppercase">Selected works</p>
            <div
                class="flex flex-center text-container magnetic"
                @mousemove="handleWorksMouseMove"
                @mouseleave="handleWorksMouseLeave"
                data-strength="50"
            >
                <a
                    href=""
                    class="title uppercase"
                    @click.stop.prevent="handleWorksClick()"
                    >Works</a
                >
                <svg
                    width="94"
                    height="188"
                    viewBox="0 0 94 188"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M48.1649 0.0429688V187.148M47.609 186.035C43.6048 143.062 34.281 126.175 1.47192 112.529M47.0531 187.148C51.0573 144.175 60.3811 127.289 93.1902 113.643"
                        stroke="black"
                        stroke-width="3"
                    />
                </svg>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount, nextTick } from 'vue';
import { useAppStore } from '../../stores/app';
import { useRouter } from 'vue-router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
/* utils */
import lettering from '../../utils/lettering';
import jobdata from '../../data/jobs';
import magnetics from '../../utils/magnetics';
import initLenis from '../../utils/lenis';
import animations from '../../animations';
/* components */
import JobItem from '../../components/jobitem/JobItem.vue';

gsap.registerPlugin(ScrollTrigger);

const router = useRouter();
const store = useAppStore();
const titleOne = ref(null);
const titleTwo = ref(null);
const titleThree = ref(null);
let lenis;

store.setActivePage('home');

/* methods */
const handleWorksMouseMove = (event) => {
    magnetics.magnetIn(event);
    store.setCursor('active');
};
const handleWorksMouseLeave = (event) => {
    magnetics.magnetOut(event);
    store.setCursor('');
};
const handleWorksClick = () => {
    store.setRouter({ to: 'works', from: store.activePage });
};

watch(
    () => store.router,
    () => {
        const { to } = store.router;

        if (to === 'works') {
            console.log('home: animate to works');
            router.push('/works');
        }
    }
);

onMounted(async () => {
    await nextTick();

    lenis = initLenis();

    lettering(titleOne.value, 'Creative');
    lettering(titleTwo.value, 'Frontend');
    lettering(titleThree.value, 'Developer');

    const { to, from } = store.router;

    if (from === 'works') {
        await animations.homepage.fromWorks();
        lenis.start();
        animations.homepage.scroll();
    }

    const skewSetter = gsap.quickSetter('section', 'skewY', 'deg');
    const proxy = { skew: 0 };

    ScrollTrigger.create({
        onUpdate: (self) => {
            const skew = self.getVelocity() / 300;

            if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;
                gsap.to(proxy, {
                    skew: 0,
                    duration: 1,
                    ease: 'power3',
                    overwrite: true,
                    onUpdate: () => skewSetter(proxy.skew),
                });
            }
        },
    });
});

onBeforeUnmount(() => lenis.destroy());
</script>

<style lang="scss" scoped>
@import './HomeView.scss';
</style>
