import GlobalCovidDataService from '@/api/GlobalCovidDataService.js';

const state = () => ({
    totalData: null,
    cardsDataError: null,
});

const getters = {
    GET_TOTAL_DATA: state => state.totalData,
    GET_CARDS_DATA_ERROR: state => state.cardsDataError,
};

const actions = {
    async getTotalData({ commit, getters }) {
        if (getters['GET_CARDS_DATA_ERROR'] !== null) {
            commit('CARDS_DATA_ERROR_EVENT', null);
        }
        GlobalCovidDataService.getTotalCovidData()
            .then(res => {
                commit('SET_TOTAL_DATA', res);
            })
            .catch(error => {
                console.log(error);
                commit('CARDS_DATA_ERROR_EVENT', error);
            });
    },
};

const mutations = {
    SET_TOTAL_DATA(state, newData) {
        let tempTotal = Object.entries(newData)
            .filter(([key]) => key !== 'Date')
            .sort()
            .slice(3);
        let tempNew = Object.entries(newData)
            .filter(([key]) => key !== 'Date')
            .sort()
            .slice(0, 3);

        for (let i = 0; i < tempTotal.length; i++) {
            tempTotal[i] = tempTotal[i].concat(tempNew[i]);
        }

        state.totalData = tempTotal;
        // state.totalData = Object.entries(newData).filter(
        //     ([key]) => key !== 'Date'
        // );
    },
    CARDS_DATA_ERROR_EVENT(state, error) {
        if (error === null) state.cardsDataError = error;
        else state.cardsDataError = error.message;
    },
};

export default {
    namespacing: true,
    state,
    getters,
    actions,
    mutations,
};
