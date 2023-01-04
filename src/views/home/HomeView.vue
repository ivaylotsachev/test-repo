<template>
    <div class="page mt-5">
        <section class="relative container flex flex-center">
            <div
                class="titles-wrapper flex flex-center flex-column w-100-vw h-100-vh"
            >
                <h1 ref="titleOne" class="title title-one flex uppercase"></h1>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import lettering from '../../utils/lettering';

const titleOne = ref(null);

onMounted(() => {
    lettering(titleOne.value, 'creative');
});
</script>
