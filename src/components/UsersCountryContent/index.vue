<template>
    <div>
        <div v-if="date" class="m-auto text-center pt-2 md:pt-4 pb-2">
            <span
                class="font-semibold text-xl md:text-3xl text-main-color text-opacity-70 dark:text-gray-200 dark:text-opacity-90"
                >{{ date.substring(0, 10) }}</span
            >
        </div>
        <div class="text-center py-2 dark:text-dark-mode-title">
            <span class="text-3xl font-bold">{{ country }}</span> <br />
            <div
                class="w-10/12 sm:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 mt-4 mx-auto"
            >
                <autocomplete
                    ref="searchTab"
                    :search="search"
                    :autoSelect="true"
                    @submit="handleSubmit"
                    placeholder="Search for a country"
                ></autocomplete>
            </div>
        </div>
        <total-info></total-info>
        <div
            v-if="data"
            class="grid grid-cols-1 xl:grid-cols-2 w-full md:w-11/12 mx-auto mb-4"
        >
            <Chart class="ml-4" :chart-data="setChartdata('Confirmed')"></Chart>
            <Chart class="ml-4" :chart-data="setChartdata('Active')"></Chart>
            <Chart class="ml-4" :chart-data="setChartdata('Recovered')"></Chart>
            <Chart class="ml-4" :chart-data="setChartdata('Deaths')"></Chart>
        </div>
        <country-error v-if="countryError && !data"></country-error>
        <data-error v-if="dataError && !data" :error="dataError"></data-error>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import TotalInfo from './components/TotalInfo';
import Chart from './components/Chart';
import CountryError from './components/ErrorComponents/CountryError.vue';
import DataError from './components/ErrorComponents/DataError.vue';
import Autocomplete from '@trevoreyre/autocomplete-vue';
import countries from '../../../countries.json';
import '@trevoreyre/autocomplete-vue/dist/style.css';

export default {
    name: 'UsersCountryContent',
    components: {
        TotalInfo,
        Chart,
        Autocomplete,
        CountryError,
        DataError,
    },
    data() {
        return {
            chartColors: {
                Deaths: {
                    bg: 'rgba(231, 76, 60 ,0.2)',
                    border: 'rgba(231, 76, 60 ,1)',
                },
                Recovered: {
                    bg: 'rgba(26, 188, 156,0.2)',
                    border: 'rgba(26, 188, 156,1)',
                },
                Confirmed: {
                    bg: 'rgba(165, 105, 189 ,0.2)',
                    border: 'rgba(165, 105, 189 ,1)',
                },
                Active: {
                    bg: 'rgba(243, 156, 18,0.2)',
                    border: 'rgba(243, 156, 18,1)',
                },
            },
        };
    },
    methods: {
        ...mapActions([
            'getUsersCountryData',
            'getUsersCountry',
            'showContacts',
            'userChangedCountry',
        ]),
        setChartdata: function(casesType) {
            if (this.data)
                return {
                    labels: Object.keys(this.data),
                    datasets: [
                        {
                            label: casesType,
                            backgroundColor: this.chartColors[casesType].bg,
                            borderColor: this.chartColors[casesType].border,
                            data: Object.values(this.data).map(
                                el => el[casesType]
                            ),
                            pointRadius: 0,
                        },
                    ],
                };
            return null;
        },
        search(input) {
            if (input.length < 1) {
                return [];
            }
            return Object.values(countries).filter(country => {
                return country.toLowerCase().startsWith(input.toLowerCase());
            });
        },
        handleSubmit(result) {
            this.userChangedCountry({
                name: result,
                code: Object.keys(countries).find(
                    country => countries[country] === result
                ),
            });
        },
    },
    computed: {
        ...mapGetters({
            date: 'GET_USERS_DATE',
            country: 'GET_USERS_COUNTRY',
            usersCountryCode: 'GET_USERS_COUNTRY_CODE',
            data: 'GET_USERS_COUNTRY_DATA',
            dataError: 'GET_USERS_COUNTRY_DATA_ERROR',
            countryError: 'GET_USERS_COUNTRY_ERROR',
        }),
    },
    watch: {
        countryError: function(val) {
            if (val !== null) {
                setTimeout(this.$refs.searchTab.$refs.input.focus(), 2000);
            }
        },
    },
    beforeCreate: function() {
        this.$store.dispatch('getUsersCountry');
    },
};
</script>
<style lang=""></style>
