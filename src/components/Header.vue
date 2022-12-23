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
import { useAppStore } from '../stores/app';

const appStore = useAppStore();
/* methods */
const handleMouseEnter = () => appStore.setCursor('active');
const handleMouseLeave = () => appStore.setCursor('');
</script>

<style lang="scss">
.main-header {
    position: absolute;
    margin: 0 auto;
}
.main-nav-link {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    // text-transform: uppercase;
    // font-weight: bold;

    p {
        transition: all 0.3s;
    }

    .top {
        position: relative;
    }

    .bottom {
        position: absolute;
        transform: translateY(50%);
        opacity: 0;
    }

    &:hover {
        .top {
            transform: translateY(-50%);
            opacity: 0;
        }

        .bottom {
            transform: translateY(0%);
            opacity: 1;
        }
    }
}
</style>
