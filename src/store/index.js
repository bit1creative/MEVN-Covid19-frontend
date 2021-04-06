import Vue from 'vue';
import Vuex from 'vuex';
import CardsDataModule from './modules/CardsDataModule.js';
import ChartMapModule from './modules/ChartMapModule.js';
import ContactsShowState from './modules/ContactsShowState.js';
import UsersCountryDataModule from './modules/UsersCountryDataModule.js';
import Theme from './modules/Theme.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        ChartMapModule,
        CardsDataModule,
        ContactsShowState,
        UsersCountryDataModule,
        Theme,
    },
});

export default store;
