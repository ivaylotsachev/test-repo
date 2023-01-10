<template>
    <app-header />
    <router-view />
    <Cursor v-if="!store.isMobile" />
    <!-- <TransitionLayer /> -->
</template>

<script setup>
import { useAppStore } from './stores/app';
/* utils */
import resizer from './utils/resizer';
/* components */
import AppHeader from './components/header/Header.vue';
import Cursor from './components/cursor/Cursor.vue';
import TransitionLayer from './components/transition-layer/TransitionLayer.vue';

const store = useAppStore();

/* toggle is-mobile class */
window.innerWidth <= 1024 && store.setIsMobile(true);

store.isMobile
    ? document.querySelector('html').classList.add('js-is-mobile')
    : document.querySelector('html').classList.remove('js-is-mobile');

resizer();
</script>
