import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import './assets/tailwind.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBars,
    faArrowDown,
    faChevronCircleUp,
    faChevronUp,
    faArrowLeft,
    faArrowRight,
    faChartLine,
    faExclamationTriangle,
    faMoon,
    faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faLinkedin,
    faFacebookSquare,
    faTelegram,
    faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import router from '@/router';

library.add(
    faBars,
    faArrowDown,
    faChevronCircleUp,
    faChevronUp,
    faLinkedin,
    faFacebookSquare,
    faTelegram,
    faTwitterSquare,
    faChartBar,
    faArrowRight,
    faArrowLeft,
    faChartLine,
    faExclamationTriangle,
    faMoon,
    faSun
);

import store from '@/store';

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueRouter);
Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
