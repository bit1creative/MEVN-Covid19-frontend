import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import './assets/tailwind.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBars,
    faArrowDown,
    faChevronCircleUp,
    faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import router from './router';

library.add(faBars, faArrowDown, faFontAwesome, faChevronCircleUp, faChevronUp);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.directive('sticky', {
    bind(el) {
        el.style.position = 'sticky';
        el.style.top = '0px';
    },
});

Vue.directive('focus', {
    // When the bound element is mounted into the DOM...
    mounted(el) {
        // Focus the element
        el.focus();
    },
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
