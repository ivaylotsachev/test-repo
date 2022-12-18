<template>
    <app-header />
    <div class="page">
        <router-view />
    </div>
    <Cursor />
</template>

<script setup>
// components
import AppHeader from './components/Header.vue';
import Cursor from './components/cursor/Cursor.vue';
</script>
