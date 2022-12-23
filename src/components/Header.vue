<script setup>
import { useAppStore } from '../stores/app';

const appStore = useAppStore();
/* methods */
const handleMouseEnter = (text) =>
    appStore.setCursor({ text, className: 'active' });
const handleMouseLeave = () => appStore.setCursor({ text: '', className: '' });
</script>

<template>
    <header class="main-header w-100">
        <nav class="main-nav flex jcfe">
            <ul class="main-nav-list flex pr-4">
                <li
                    class="main-nav-item p-3 uppercase"
                    @mouseenter="() => handleMouseEnter('home')"
                    @mouseleave="() => handleMouseLeave()"
                >
                    <router-link to="/" class="main-nav-link top">
                        <p class="top">home</p>
                        <p class="bottom">home</p>
                    </router-link>
                </li>
                <li
                    class="main-nav-item uppercase p-3"
                    @mouseenter="() => handleMouseEnter('about')"
                    @mouseleave="() => handleMouseLeave()"
                >
                    <router-link to="/works" class="main-nav-link top">
                        <p class="top">Works</p>
                        <p class="bottom">Works</p>
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss">
.main-nav-link {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-transform: uppercase;
    font-weight: bold;

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
