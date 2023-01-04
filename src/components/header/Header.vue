<template>
    <header class="main-header w-100">
        <nav class="inner-container main-nav flex jcsb flex-center">
            <p class="">Ivaylo Tsachev</p>
            <ul class="main-nav-list flex">
                <li class="main-nav-item p-3">
                    <router-link
                        to="/"
                        class="main-nav-link top"
                        @mouseenter="handleMouseEnter"
                        @mouseleave="handleMouseLeave"
                    >
                        <p class="top">Home</p>
                        <p class="bottom">Home</p>
                    </router-link>
                </li>
                <li class="main-nav-item p-3">
                    <router-link
                        to="/works"
                        class="main-nav-link top"
                        @mouseenter="handleMouseEnter"
                        @mouseleave="handleMouseLeave"
                    >
                        <p class="top">Works</p>
                        <p class="bottom">Works</p>
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { useAppStore } from '../../stores/app';

const appStore = useAppStore();
/* methods */
const handleMouseEnter = () => appStore.setCursor('active');
const handleMouseLeave = () => appStore.setCursor('');
</script>

<style lang="scss" scoped>
@import './Header.scss';
</style>
