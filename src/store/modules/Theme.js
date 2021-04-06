const state = () => ({
    theme: {},
});

const getters = {
    GET_THEME: state => state.theme,
};

const actions = {
    initTheme({ commit }) {
        const cachedTheme = localStorage.theme ? localStorage.theme : false;
        const userPrefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;
        if (cachedTheme) commit('SET_THEME', cachedTheme);
        else if (userPrefersDark) commit('SET_THEME', 'dark');
        else commit('SET_THEME', 'light');
    },
    toggleTheme({ commit }) {
        switch (localStorage.theme) {
            case 'light':
                commit('SET_THEME', 'dark');
                break;
            case 'dark':
                commit('SET_THEME', 'light');
                break;
        }
    },
};

const mutations = {
    SET_THEME(state, theme) {
        state.theme = theme;
        localStorage.theme = theme;
    },
};

export default {
    namespacing: true,
    state,
    getters,
    actions,
    mutations,
};
