<template>
    <app-header />
    <router-view />
    <Cursor />
</template>

<script setup>
import { initLenis } from './utils/lenis';
// components
import AppHeader from './components/Header.vue';
import Cursor from './components/cursor/Cursor.vue';

initLenis();
</script>
