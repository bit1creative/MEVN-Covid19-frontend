<template>
    <div class="pb-4">
        <div
            class="w-full py-32 sm:py-44 md:py-64 lg:py-80 bg-main-color opacity-50 dark:bg-dark-mode-bg2 dark:opacity-100"
            v-bind:class="[
                Object.keys(countryData).length !== 0
                    ? 'hidden'
                    : !error
                    ? 'block'
                    : 'block',
            ]"
        >
            <button
                type="button"
                class="flex items-center mx-auto border border-transparent text-base leading-6 font-medium rounded-md text-white dark:text-gray-200 transition ease-in-out duration-150 cursor-default select-none"
                disabled
            >
                <svg
                    v-bind:class="[
                        Object.keys(countryData).length !== 0
                            ? ''
                            : !error
                            ? 'animate-spin'
                            : 'hidden',
                    ]"
                    class="-ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                    ></circle>
                    <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
                <div :class="{ hidden: error }">
                    Collecting data ...
                </div>
                <div v-if="error" class="select-text">
                    Try again later or
                    <span
                        v-on:click="showContacts"
                        class="underline cursor-pointer"
                        >contact us</span
                    >
                    with the following error message:
                    <br />
                    <span class="text-xs">{{ error.join('') }}</span>
                </div>
            </button>
        </div>
        <div
            id="chartMap"
            class="w-full max-w-full bg-pink-50 dark:bg-dark-mode-bg2 py-4 md:pt-16"
            v-bind:class="[
                Object.keys(countryData).length != 0 ? 'block' : 'hidden',
            ]"
            :key="darkMode"
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import MapChart from 'vue-chart-map';

export default {
    name: 'ChartMap',
    components: {
        MapChart,
    },
    data() {
        return {
            highColor: '#d83737',
            lowColor: '#fde2e2',
            defaultCountryFillColor: '#dadada',
            darkMode: 'false',
        };
    },
    props: {
        chartToShow: {
            type: String,
            default: 'TotalConfirmed',
        },
    },
    methods: {
        showContacts: function() {
            this.showContacts();
            // this.$store.dispatch('showContacts');
        },
        ...mapActions(['showContacts', 'getCountryData']),
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
        }),
    },
    created: function() {
        this.getCountryData(this.chartToShow);
        // this.$store.dispatch('getCountryData', this.chartToShow);
    },
    mounted: function() {
        if (
            document.defaultView.getComputedStyle(
                document.getElementById('chartMap'),
                null
            )['backgroundColor'] == 'rgb(253, 242, 248)'
        ) {
            return;
        }
        this.highColor = '#4f3b78';
        this.lowColor = '#c4bbf0';
        this.defaultCountryFillColor = '#b5adc9';
        this.darkMode = 'true';
        return;
    },
};
</script>

<style lang="scss" scoped></style>
