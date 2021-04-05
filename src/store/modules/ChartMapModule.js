import GlobalCovidDataService from '@/api/GlobalCovidDataService.js';

const state = () => ({
    countryData: {},
    date: null,
    chartMapError: null,
    dateError: null,
    chartDataIsLoading: false,
});

const getters = {
    GET_COUNTRY_DATA: state => state.countryData,
    GET_DATE: state => state.date,
    GET_CHART_MAP_ERROR: state => state.chartMapError,
    GET_DATE_ERROR: state => state.dateError,
    GET_CHART_DATA_LOADING_STATUS: state => state.chartDataIsLoading,
};

const actions = {
    async getCountryData(
        { commit, dispatch, getters, rootGetters },
        casesType
    ) {
        commit('SET_LOADING_STATUS', true);
        if (!rootGetters['GET_TOTAL_DATA'])
            dispatch('getTotalData', {}, { root: true });
        if (getters['GET_CHART_MAP_ERROR'] !== null)
            commit('CHARTMAP_ERROR_EVENT', null);
        if (!getters['GET_DATE']) dispatch('getDate');

        GlobalCovidDataService.getDataForCountries(casesType)
            .then(res => {
                if (getters['GET_DATE_ERROR'] !== null) dispatch('getDate');
                commit('SET_COUNTRY_DATA', res);
                commit('SET_LOADING_STATUS', false);
            })
            .catch(error => {
                console.log(error);
                commit('CHARTMAP_ERROR_EVENT', error);
            });
    },
    async getDate({ commit, getters }) {
        GlobalCovidDataService.getDate()
            .then(res => {
                if (getters['GET_DATE_ERROR'] !== null)
                    commit('DATE_ERROR_EVENT', null);
                commit('SET_DATE', res);
            })
            .catch(error => {
                console.log(error.stack);
                commit('DATE_ERROR_EVENT', error);
            });
    },
};

const mutations = {
    SET_COUNTRY_DATA(state, newCountryData) {
        state.countryData = newCountryData;
    },
    SET_DATE(state, newDate) {
        // state.date = new Date(newDate).toDateString();
        state.date = newDate;
    },
    CHARTMAP_ERROR_EVENT(state, error) {
        if (error === null) state.chartMapError = error;
        else state.chartMapError = error.stack.split('\n') || error;
    },
    DATE_ERROR_EVENT(state, error) {
        if (error === null) state.dateError = error;
        else state.dateError = error.message;
    },
    SET_LOADING_STATUS(state, newStatus) {
        state.chartDataIsLoading = newStatus;
    },
};

export default {
    namespacing: true,
    state,
    getters,
    actions,
    mutations,
};
