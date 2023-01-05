<template>
    <div class="page">
        <section class="relative inner-container head-section flex flex-center">
            <div class="titles-wrapper flex flex-column w-100-vw h-100-vh">
                <h1 ref="titleOne" class="title title-one flex uppercase"></h1>
                <h1 ref="titleTwo" class="title title-two flex uppercase"></h1>
                <h1
                    ref="titleThree"
                    class="title title-three flex uppercase"
                ></h1>
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
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import lettering from '../../utils/lettering';
import homeAnimations from '../../animations/homepage';

const titleOne = ref(null);
const titleTwo = ref(null);
const titleThree = ref(null);

onMounted(() => {
    lettering(titleOne.value, 'Creative');
    lettering(titleTwo.value, 'Frontend');
    lettering(titleThree.value, 'Developer');

    homeAnimations.initial();
});
</script>

<style lang="scss" scoped>
@import './HomeView.scss';
</style>
