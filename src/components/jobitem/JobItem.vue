<template>
    <p v-if="item.isCurrent" class="italic">Current</p>
    <p class="jobitem-year">{{ item.year }}</p>
    <p class="jobitem-position my-2 font-antiqua">
        {{ item.position }}
    </p>
    <p class="jobitem-company">
        <a
            class="jobitem-link magnetic"
            :href="item.website"
            target="_blank"
            noreferrer
            noopener
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
            data-strength="50"
            >{{ item.company }}</a
        >
    </p>
</template>

<script setup>
import { defineProps } from 'vue';
import { useAppStore } from '../../stores/app';
import magnetics from '../../utils/magnetics';

const store = useAppStore();
const props = defineProps(['item']);

/* methods*/
const handleMouseMove = (event) => {
    magnetics.magnetIn(event);
    store.setCursor('active');
};
const handleMouseLeave = (event) => {
    magnetics.magnetOut(event);
    store.setCursor('');
};
</script>

<style lang="scss" scoped>
@import './JobItem.scss';
</style>
