<template>
    <div class="page works-page p-5">
        <section
            class="flex flex-column flex-center inner-container w-100 h-100"
        >
            <div class="works-images-container" ref="imagesContainer">
                <img
                    v-for="item in worksdata"
                    class="works-image w-100 h-100"
                    :src="item.imageUrl"
                    :alt="item.title"
                    :key="item.id"
                />
            </div>
            <div
                class="works-items-container flex flex-center flex-column aifs"
            >
                <WorksListItem
                    v-for="item in worksdata"
                    :key="item.id"
                    :item="item"
                />
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted, watch, onBeforeUnmount, nextTick } from 'vue';
import { useAppStore } from '../../stores/app';
import { useRouter } from 'vue-router';
import WorksListItem from '../../components/works-list-item/WorksListItem.vue';
/* utils */
import initLenis from '../../utils/lenis';
import worksdata from '../../data/works';

const store = useAppStore();
const router = useRouter();
let lenis;

store.setActivePage('works');

watch(
    () => store.router,
    () => {
        const { to } = store.router;

        if (to === 'home') {
            console.log('works: animate to home here');
            router.push('/');
        }
    }
);

onMounted(async () => {
    await nextTick();

    lenis = initLenis();
    lenis.scrollTo('html');

    const { to, from } = store.router;

    if (from === 'home') {
        console.log('works: animate from home here');
    }
});

onBeforeUnmount(() => lenis.destroy());
</script>

<style lang="scss">
@import './WorksView.scss';
</style>
