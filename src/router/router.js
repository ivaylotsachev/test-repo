import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/home/HomeView.vue';
import WorksView from '../views/works/WorksView.vue';
import WorkView from '../views/work/WorkView.vue';

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/works', name: 'works', component: WorksView },
    { path: '/works/:id', name: 'work', component: WorkView },
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
