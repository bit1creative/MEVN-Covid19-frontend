export function getOnlyCases(rootGetters) {
    return Object.keys(
        rootGetters['GET_USERS_COUNTRY_DATA'][
            rootGetters['GET_USERS_COUNTRY_DATA'].length - 1
        ]
    )
        .filter(key =>
            ['Confirmed', 'Deaths', 'Recovered', 'Active'].includes(key)
        )
        .reduce((obj, key) => {
            obj[key] =
                rootGetters['GET_USERS_COUNTRY_DATA'][
                    rootGetters['GET_USERS_COUNTRY_DATA'].length - 1
                ][key];
            return obj;
        }, {});
}
