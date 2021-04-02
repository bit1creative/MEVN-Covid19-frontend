import GetUsersCountryData from '@/api/GetUsersCountry.js';
import { getTotalCases, getDate } from '../helpers/UsersCountryDataHelper.js';
import axios from 'axios';

const state = () => ({
    usersCountry: null,
    usersCountryCode: null,
    usersCountryError: null,
    usersCountryDataError: null,
    usersCountryData: null,
});

const getters = {
    GET_USERS_COUNTRY: state => state.usersCountry,
    GET_USERS_COUNTRY_CODE: state => state.usersCountryCode,
    GET_USERS_COUNTRY_ERROR: state => state.usersCountryError,
    GET_USERS_COUNTRY_DATA_ERROR: state => state.usersCountryDataError,
    GET_USERS_COUNTRY_DATA: state => state.usersCountryData,
    GET_USERS_COUNTRY_TOTAL_DATA: (state, rootGetters) =>
        state.usersCountryData ? getTotalCases(rootGetters) : null,
    GET_USERS_DATE: (state, rootGetters) =>
        state.usersCountryData ? getDate(rootGetters) : null,
};

const actions = {
    getUsersCountry: async function({ commit, getters, dispatch }) {
        GetUsersCountryData.getCountry()
            .then(res => {
                if (getters['GET_USERS_COUNTRY_ERROR'] !== null)
                    commit('USERS_COUNTRY_ERROR_EVENT', null);
                commit('SET_USERS_COUNTRY', res.country);
                commit('SET_USERS_COUNTRY_CODE', res.country_code);
            })
            .then(() => dispatch('getUsersCountryData'))
            .catch(error => {
                commit('USERS_COUNTRY_ERROR_EVENT', error);
            });
    },

    getUsersCountryData: async function({ commit, getters }) {
        axios
            .get(
                `https://api.covid19api.com/country/` +
                    getters['GET_USERS_COUNTRY_CODE']
            )
            .then(res => {
                let data = {};
                res.data.forEach(day => {
                    data[day.Date.substring(0, 10)] = Object.keys(day)
                        .filter(key =>
                            [
                                'Confirmed',
                                'Deaths',
                                'Recovered',
                                'Active',
                            ].includes(key)
                        )
                        .reduce((obj, key) => {
                            obj[key] = day[key];
                            return obj;
                        }, {});
                });
                commit('SET_USERS_COUNTRY_DATA', data);
            })
            .catch(error => {
                commit('SET_USERS_COUNTRY_DATA', null);
                commit('USERS_COUNTRY_DATA_ERROR_EVENT', error);
            });
    },

    userChangedCountry: function({ getters, commit, dispatch }, newCountry) {
        if (
            newCountry in
            [getters['GET_USERS_COUNTRY_CODE'], getters['GET_USERS_COUNTRY']]
        )
            return;
        if (getters['GET_USERS_COUNTRY_ERROR'] !== null)
            commit('USERS_COUNTRY_ERROR_EVENT', null);
        commit('SET_USERS_COUNTRY', newCountry.name);
        commit('SET_USERS_COUNTRY_CODE', newCountry.code);
        dispatch('getUsersCountryData');
    },
};

const mutations = {
    SET_USERS_COUNTRY: function(state, country) {
        state.usersCountry = country;
    },
    SET_USERS_COUNTRY_CODE: function(state, code) {
        state.usersCountryCode = code;
    },
    SET_USERS_COUNTRY_DATA: function(state, data) {
        state.usersCountryData = data;
    },
    USERS_COUNTRY_ERROR_EVENT: function(state, error) {
        if (error === null) state.usersCountryError = error;
        else state.usersCountryError = error.message;
    },
    USERS_COUNTRY_DATA_ERROR_EVENT: function(state, error) {
        if (error === null) state.countryDataError = error;
        else state.usersCountryDataError = error.name + error.message;
    },
};

export default {
    namespacing: true,
    state,
    getters,
    actions,
    mutations,
};
