<template>
    <div class="container flex flex-center">
        <div class="titles-wrapper flex flex-center flex-column mt-5">
            <h1 ref="titleOne" class="title title-one flex uppercase"></h1>
            <h1 ref="titleTwo" class="title title-two flex uppercase"></h1>
            <h1 ref="titleThree" class="title title-three flex uppercase"></h1>
        </div>
    </div>
</template>

<script setup>
/* imports */
import { ref, onMounted } from 'vue';
import { lettering } from '../utils/lettering';

const titleOne = ref(null);
const titleTwo = ref(null);
const titleThree = ref(null);

/* lifecycles */
onMounted(() => {
    lettering('creative', titleOne.value);
    lettering('frotend', titleTwo.value);
    lettering('developer', titleThree.value);
});
</script>
