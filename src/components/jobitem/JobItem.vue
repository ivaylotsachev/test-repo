<template>
    <p class="jobitem-year">{{ item.year }}</p>
    <p class="jobitem-position my-2 font-antiqua">
        {{ item.position }}
    </p>
    <p class="jobitem-company"><span>at</span> {{ item.company }}</p>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(['item']);
</script>

<style lang="scss" scoped>
@import './JobItem.scss';
</style>
