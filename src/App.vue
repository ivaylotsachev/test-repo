<template>
    <app-header />
    <router-view />
    <Cursor />
</template>

<script setup>
import { initLenis } from './utils/lenis';
import resizer from './utils/resizer';
// components
import AppHeader from './components/Header.vue';
import Cursor from './components/cursor/Cursor.vue';

initLenis();
resizer();
</script>
