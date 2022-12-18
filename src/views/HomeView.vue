<template>
    <h1 ref="title" class="page-title"></h1>
</template>

<script setup>
/* imports */
import { ref, onMounted } from 'vue';
import { lettering } from '../utils/lettering';

const title = ref(null);

/* lifecycles */
onMounted(() => {
    lettering('welcome to', title.value);
});
</script>

<style>
h1 {
    display: flex;
}
.spacer {
    margin: 0 5px;
}
</style>
