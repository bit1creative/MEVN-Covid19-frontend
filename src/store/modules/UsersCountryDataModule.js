import GetUsersCountryData from '@/api/GetUsersCountry.js';
import { getOnlyCases } from '../helpers/UsersCountryDataHelper.js';
import axios from 'axios';

const state = () => ({
    usersCountry: 'China',
    usersCountryCode: 'CN',
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
        state.usersCountryData ? getOnlyCases(rootGetters) : null,
    GET_USERS_DATE: state =>
        state.usersCountryData
            ? state.usersCountryData[state.usersCountryData.length - 1]['Date']
            : null,
};

const actions = {
    getUsersCountry: async function({ commit, getters, dispatch }) {
        GetUsersCountryData.getCountry()
            .then(res => {
                if (getters['GET_USERS_COUNTRY_ERROR'] !== null)
                    commit('USERS_COUNTRY_CODE_ERROR_EVENT', null);
                commit('SET_USERS_COUNTRY', res.country);
                commit('SET_USERS_COUNTRY_CODE', res.country_code);
            })
            .then(() => dispatch('getUsersCountryData'))
            .catch(error => {
                commit('USERS_COUNTRY_CODE_ERROR_EVENT', error);
            });
    },

    getUsersCountryData: async function({ commit, getters }) {
        axios
            .get(
                `https://api.covid19api.com/country/` +
                    getters['GET_USERS_COUNTRY_CODE']
            )
            .then(res => {
                commit('SET_USERS_COUNTRY_DATA', res.data);
            })
            .catch(error => {
                commit('USERS_COUNTRY_DATA_ERROR_EVENT', error);
            });
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
    USERS_COUNTRY_CODE_ERROR_EVENT: function(state, error) {
        if (error === null) state.usersCountryError = error;
        else state.usersCountryError = error.message;
    },
    USERS_COUNTRY_DATA_ERROR_EVENT: function(state, error) {
        if (error === null) state.countryDataError = error;
        else state.usersCountryDataError = error.message;
    },
};

export default {
    namespacing: true,
    state,
    getters,
    actions,
    mutations,
};
