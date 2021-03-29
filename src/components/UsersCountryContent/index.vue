<template>
    <div>
        <div v-if="date" class="m-auto text-center pt-2 md:pt-4 pb-2">
            <span
                class="font-semibold text-xl md:text-3xl text-main-color text-opacity-70 dark:text-gray-200 dark:text-opacity-90"
                >{{ date.substring(0, 10) }}</span
            >
        </div>
        <div class="text-center py-2">
            <span class="text-3xl font-bold">{{ country }}</span> <br />
            <span>search tab</span>
        </div>
        <total-info></total-info>
        <br />
        <br />
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import TotalInfo from './components/TotalInfo';

export default {
    name: 'UsersCountryContent',
    components: {
        TotalInfo,
    },
    methods: {
        ...mapActions(['getUsersCountryData', 'getUsersCountry']),
    },
    computed: {
        ...mapGetters({
            date: 'GET_USERS_DATE',
            country: 'GET_USERS_COUNTRY',
            usersCountryCode: 'GET_USERS_COUNTRY_CODE',
            data: 'GET_USERS_COUNTRY_DATA',
        }),
    },
    beforeCreate: function() {
        this.$store.dispatch('getUsersCountry');
    },
    created() {},
};
</script>
<style lang=""></style>
