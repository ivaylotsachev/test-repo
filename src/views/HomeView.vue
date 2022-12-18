<template>
    <div class="container flex flex-center">
        <h1 ref="titleOne" class="title flex uppercase"></h1>
    </div>
</template>

<script setup>
/* imports */
import { ref, onMounted } from 'vue';
import { lettering } from '../utils/lettering';

const titleOne = ref(null);

/* lifecycles */
onMounted(() => {
    lettering('welcome to', titleOne.value);
});
</script>
