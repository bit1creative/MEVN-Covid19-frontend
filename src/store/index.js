import Vue from 'vue';
import Vuex from 'vuex';
import GlobalCovidDataService from '@/api/GlobalCovidDataService.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        countryData: {},
        date: null,
        totalData: {},
        error: null,
        dateError: null,
        hideContacts: true,
    },

    actions: {
        getCountryData({ commit, dispatch }, casesType) {
            commit('SET_COUNTRY_DATA', {});
            if (this.state.error !== null) commit('ERROR_EVENT', null);
            GlobalCovidDataService.getDataForCountries(casesType)
                .then(res => {
                    if (this.state.dateError !== null) dispatch('getDate');
                    commit('SET_COUNTRY_DATA', res);
                })
                .catch(error => {
                    console.log(error);
                    commit('ERROR_EVENT', error);
                });
        },
        getDate({ commit }) {
            GlobalCovidDataService.getDate()
                .then(res => {
                    if (this.state.dateError !== null)
                        commit('DATE_ERROR_EVENT', null);
                    commit('SET_DATE', res);
                })
                .catch(error => {
                    console.log(error.stack);
                    commit('DATE_ERROR_EVENT', error);
                });
        },
        showContacts({ commit }) {
            commit('SHOW_CONTACTS');
        },
        hideContacts({ commit }) {
            commit('HIDE_CONTACTS');
        },
    },

    mutations: {
        SET_COUNTRY_DATA(state, newCountryData) {
            state.countryData = newCountryData;
        },
        SET_DATE(state, newDate) {
            state.date = newDate;
        },
        updateTotalData(state, newTotalData) {
            state.totalData = newTotalData;
        },
        ERROR_EVENT(state, error) {
            if (error === null) state.error = error;
            else state.error = error.stack.split('\n');
        },
        DATE_ERROR_EVENT(state, error) {
            if (error === null) state.dateError = error;
            else state.dateError = error.message;
        },
        SHOW_CONTACTS(state) {
            if (state.hideContacts) state.hideContacts = false;
        },
        HIDE_CONTACTS(state) {
            if (!state.hideContacts) state.hideContacts = true;
        },
    },
});

export default store;
