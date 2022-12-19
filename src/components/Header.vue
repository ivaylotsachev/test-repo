<script setup>
import { useAppStore } from '../stores/app';

const appStore = useAppStore();
/* methods */
const handleMouseEnter = (text) =>
    appStore.setCursor({ text, className: 'active' });
const handleMouseLeave = () => appStore.setCursor({ text: '', className: '' });
</script>

<template>
    <header class="main-header">
        <nav class="main-nav flex jcfe">
            <ul class="main-nav-list flex p-3">
                <li
                    class="main-nav-item mr-3 uppercase"
                    @mouseenter="() => handleMouseEnter('home')"
                    @mouseleave="() => handleMouseLeave()"
                >
                    <router-link to="/" class="main-nav-link">home</router-link>
                </li>
                <li
                    class="main-nav-item uppercase"
                    @mouseenter="() => handleMouseEnter('about')"
                    @mouseleave="() => handleMouseLeave()"
                >
                    <router-link to="/works" class="main-nav-link"
                        >works</router-link
                    >
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss">
// header {
// position: relative;
// z-index: 100;
// }
</style>
