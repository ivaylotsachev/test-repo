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

            <p class="txt-lg mb-4">
                <span class="is-brown">PASSIONATE</span> ABOUT WEB TECHNOLOGIES.
                I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER
                FRIENDLY INTERFACES.
                <span class="is-brown">I CREATE MEMORABLE</span> WEB
                EXPERIENCES.
            </p>
            <div class="separator my-5"></div>
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
        <section class="contact-section mt-5 flex flex-center flex-column pt-5">
            <h3 class="mb-4 uppercase opacity-04">Find me here :)</h3>
            <div class="flex flex-center flex-column text-container">
                <a
                    href="mailto:itsa4ev@gmail.com"
                    @mousemove="handleSocialMouseMove('gmail', $event)"
                    @mouseleave="handleSocialMouseLeave"
                    data-strength="50"
                    class="magnetic title gmail-link"
                    >itsa4ev@gmail.com</a
                >
                <div class="separator w-100"></div>
                <div class="contact-socials w-100 flex jcsb">
                    <a
                        href="https://www.mixcloud.com/ivailotsachev/"
                        target="_blank"
                        noopener
                        @mousemove="handleSocialMouseMove('mixcloud', $event)"
                        @mouseleave="handleSocialMouseLeave"
                        data-strength="20"
                        class="magnetic uppercase bold"
                        >Mixcloud</a
                    >
                    <a
                        href=""
                        @mousemove="handleSocialMouseMove('linkedin', $event)"
                        @mouseleave="handleSocialMouseLeave"
                        data-strength="20"
                        class="magnetic uppercase bold"
                        >LinkedIn</a
                    >
                    <a
                        href=""
                        @mousemove="handleSocialMouseMove('facebook', $event)"
                        @mouseleave="handleSocialMouseLeave"
                        data-strength="20"
                        class="magnetic uppercase bold"
                        >Facebook</a
                    >
                </div>
            </div>
            <footer class="page-footer w-100 py-3 mt-5">
                <div class="inner-container flex jcsb">
                    <p>
                        Copyright &copy; {{ new Date().getFullYear() }} / Folio
                        v.1
                    </p>
                    <p>Coded with love by me.</p>
                </div>
            </footer>
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
import skewScroll from '../../utils/skewScroll';
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
const handleSocialMouseMove = (classname, event) => {
    store.setCursor(`${classname}`);
    magnetics.magnetIn(event);
};

const handleSocialMouseLeave = (event) => {
    store.setCursor('');
    magnetics.magnetOut(event);
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
        skewScroll();
    }
});

onBeforeUnmount(() => lenis.destroy());
</script>

<style lang="scss" scoped>
@import './HomeView.scss';
</style>
