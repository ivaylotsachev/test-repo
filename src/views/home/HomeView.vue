<template>
    <div class="page flex flex-column">
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
                <p class="head-location txt-md font-antiqua bold">
                    Born in 1977, Based in
                    <span class="font-antiqua italic">(currently)</span> Sofia,
                    Bulgaria
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
                web developmen changed a lot of things for me, and since then i
                try to my work to new horizons with each project, always putting
                <span class="is-brown">quality</span> first.
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
                <router-link to="/works" class="title uppercase"
                    >Works</router-link
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
import { ref, onMounted } from 'vue';
import { useAppStore } from '../../stores/app';
/* utils */
import lettering from '../../utils/lettering';
import homeAnimations from '../../animations/homepage';
import jobdata from '../../data/jobs';
import magnetics from '../../utils/magnetics';
/* components */
import JobItem from '../../components/jobitem/JobItem.vue';

const store = useAppStore();
const titleOne = ref(null);
const titleTwo = ref(null);
const titleThree = ref(null);

/* methods */
const handleWorksMouseMove = (event) => {
    magnetics.magnetIn(event);
    store.setCursor('active');
};
const handleWorksMouseLeave = (event) => {
    magnetics.magnetOut(event);
    store.setCursor('');
};

onMounted(() => {
    lettering(titleOne.value, 'Creative');
    lettering(titleTwo.value, 'Frontend');
    lettering(titleThree.value, 'Developer');

    if (store.isInitialLoading) {
        homeAnimations.initial(store);
    }
});
</script>

<style lang="scss" scoped>
@import './HomeView.scss';
</style>
