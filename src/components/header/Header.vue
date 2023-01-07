<template>
    <header class="main-header inner-container">
        <nav class="main-nav flex jcsb flex-center">
            <p
                class="main-nav-link magnetic"
                data-strength="20"
                data-strength-text="10"
                @mousemove="handleMouseMove"
                @mouseleave="handleMouseLeave"
            >
                Ivaylo Tsachev
            </p>
            <ul class="main-nav-list flex">
                <li
                    class="main-nav-item p-3 magnetic"
                    data-strength="20"
                    data-strength-text="10"
                    @mousemove="handleMouseMove"
                    @mouseleave="handleMouseLeave"
                >
                    <router-link to="/" class="main-nav-link top">
                        Home
                    </router-link>
                </li>
                <li
                    class="main-nav-item p-3 magnetic"
                    data-strength="20"
                    data-strength-text="10"
                    @mousemove="handleMouseMove"
                    @mouseleave="handleMouseLeave"
                >
                    <router-link to="/works" class="main-nav-link top">
                        Works
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { useAppStore } from '../../stores/app';
import magnetics from '../../utils/magnetics';

const store = useAppStore();
/* methods */
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
@import './Header.scss';
</style>
