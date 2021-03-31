export function getTotalCases(rootGetters) {
    return Object.entries(rootGetters['GET_USERS_COUNTRY_DATA'])[
        Object.entries(rootGetters['GET_USERS_COUNTRY_DATA']).length - 1
    ][1];
}

export function getDate(rootGetters) {
    return Object.entries(rootGetters['GET_USERS_COUNTRY_DATA'])[
        Object.entries(rootGetters['GET_USERS_COUNTRY_DATA']).length - 1
    ][0];
}
