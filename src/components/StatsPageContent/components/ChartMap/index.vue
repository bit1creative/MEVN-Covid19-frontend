<template>
    <div class="pb-4">
        <div ref="loading" v-if="isLoading && !error">
            <chart-map-loading></chart-map-loading>
        </div>
        <div v-else-if="error">
            <chart-map-error :error="error"></chart-map-error>
        </div>
        <div v-else>
            <div
                id="chartMap"
                class="w-full max-w-full bg-pink-50 dark:bg-dark-mode-bg2 py-4 md:pt-16"
                :key="theme"
            >
                <MapChart
                    :countryData="countryData"
                    :highColor="highColor"
                    :lowColor="lowColor"
                    countryStrokeColor="#909090"
                    :defaultCountryFillColor="defaultCountryFillColor"
                    LangUser="en"
                    :currencyAdd="false"
                    :showEmptyValue="false"
                    legendHeaderBackgroundColor="#FDF2F8"
                    :positionLeftTooltip="0"
                    class="w-full px-2 mx-auto sm:w-11/12 md:w-10/12 lg:w-9/12"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import MapChart from 'vue-chart-map';
import ChartMapLoading from './components/ChartMapLoading';
import ChartMapError from './components/ChartMapError';

export default {
    name: 'ChartMap',
    components: {
        MapChart,
        ChartMapLoading,
        ChartMapError,
    },
    // old dark-mode-check method
    // data() {
    //     return {
    //         darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    //     };
    // },
    props: {
        chartToShow: {
            type: String,
            default: 'TotalConfirmed',
        },
    },
    methods: {
        // showContacts: function() {
        //     this.showContacts();
        //     // this.$store.dispatch('showContacts');
        // },
        // ...mapActions(['showContacts', 'getCountryData']),
        ...mapActions(['getCountryData']),
    },
    watch: {
        chartToShow: function(newChart) {
            this.getCountryData(newChart);
            // this.$store.dispatch('getCountryData', newChart);
        },
    },
    computed: {
        ...mapGetters({
            countryData: 'GET_COUNTRY_DATA',
            error: 'GET_CHART_MAP_ERROR',
            isLoading: 'GET_CHART_DATA_LOADING_STATUS',
            theme: 'GET_THEME',
        }),
        highColor: function() {
            return this.theme == 'dark' ? '#4f3b78' : '#d83737';
        },
        lowColor: function() {
            return this.theme == 'dark' ? '#c4bbf0' : '#fde2e2';
        },
        defaultCountryFillColor: function() {
            return this.theme == 'dark' ? '#b5adc9' : '#dadada';
        },
    },
    created: function() {
        this.getCountryData(this.chartToShow);
        // this.$store.dispatch('getCountryData', this.chartToShow);
    },

    // old dark-mode-check method
    // mounted: function() {
    //     window
    //         .matchMedia('(prefers-color-scheme: dark)')
    //         .addEventListener('change', e => {
    //             this.darkMode = e.matches ? true : false;
    //         });
    // },
};
</script>

<style lang="scss" scoped></style>
