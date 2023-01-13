<template>
    <header class="main-header inner-container py-3">
        <nav class="main-nav flex jcsb flex-center">
            <p
                v-if="!store.isMobile"
                class="js-animated-link main-nav-item bold uppercase magnetic"
                data-strength="20"
                data-strength-text="10"
                @mousemove="handleMouseMove"
                @mouseleave="handleMouseLeave"
            >
                Ivaylo Tsachev &copy
            </p>
            <ul class="main-nav-list flex">
                <li
                    :class="store.activePage === 'home' && 'is-active'"
                    class="main-nav-item magnetic mr-4"
                    data-strength="20"
                    data-strength-text="10"
                    @mousemove="handleMouseMove"
                    @mouseleave="handleMouseLeave"
                >
                    <a
                        href=""
                        class="main-nav-link"
                        @click.stop.prevent="handleLinkClick('home')"
                        >home</a
                    >
                </li>
                <li
                    :class="store.activePage === 'works' && 'is-active'"
                    class="main-nav-item magnetic"
                    data-strength="20"
                    data-strength-text="10"
                    @mousemove="handleMouseMove"
                    @mouseleave="handleMouseLeave"
                >
                    <a
                        href=""
                        @click.stop.prevent="handleLinkClick('works')"
                        class="main-nav-link"
                    >
                        Works
                    </a>
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
const handleLinkClick = (page) => {
    store.setRouter({ to: page, from: store.activePage });
};

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
