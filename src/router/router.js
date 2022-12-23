import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/home/HomeView.vue';
import WorksView from '../views/works/WorksView.vue';

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/works', name: 'works', component: WorksView },
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
