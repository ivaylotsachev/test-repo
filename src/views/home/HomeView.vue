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
            <p class="txt-lg mb-3">
                I`ve always wanted to create new things,
                <span class="is-brown">unique experience</span>, getting into
                web developmen changed a lot of things for me, and since then i
                try to my work to new horizons with each project, always putting
                <span class="is-brown">quality</span> first.
            </p>
            <p class="txt-lg">
                All this is just the beginning, and i can`t wait to push it
                event further by working with you on your
                <span class="is-brown">next project</span>
            </p>
        </section>

        <section class="inner-container career-section mt-5">
            <h2 class="title-section txt-center">My road</h2>
            <div
                class="jobitem flex flex-column flex-center"
                v-for="item in jobdata"
                :class="`jobitem-${item.company.toLowerCase()}`"
                :key="item.id"
            >
                <JobItem :item="item" />
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
/* components */
import JobItem from '../../components/jobitem/JobItem.vue';

const store = useAppStore();
const titleOne = ref(null);
const titleTwo = ref(null);
const titleThree = ref(null);

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
