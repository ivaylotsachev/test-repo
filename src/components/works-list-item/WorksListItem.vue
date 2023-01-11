<script setup>
import { defineProps } from 'vue';

const props = defineProps(['item']);
console.log('props', props);
</script>

<template>
    <div>
        <h2 class="title title-grotesk">{{ item.title }}</h2>
    </div>
</template>
