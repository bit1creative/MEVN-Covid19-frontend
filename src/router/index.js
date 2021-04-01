import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/stats',
        name: 'StatsPage',
        component: () => import('../views/StatsPage.vue'),
    },
    {
        path: '/country',
        name: 'UsersCountryData',
        component: () => import('../views/UsersCountryData.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
