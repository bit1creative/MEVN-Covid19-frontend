const state = () => ({
    hideContacts: true,
});

const getters = {
    GET_HIDE_CONTACTS_STATE: state => state.hideContacts,
};

const actions = {
    showContacts({ commit }) {
        commit('SHOW_CONTACTS');
    },
    hideContacts({ commit }) {
        commit('HIDE_CONTACTS');
    },
};

const mutations = {
    SHOW_CONTACTS(state) {
        if (state.hideContacts) state.hideContacts = false;
    },
    HIDE_CONTACTS(state) {
        if (!state.hideContacts) state.hideContacts = true;
    },
};

export default {
    namespacing: true,
    state,
    getters,
    actions,
    mutations,
};
