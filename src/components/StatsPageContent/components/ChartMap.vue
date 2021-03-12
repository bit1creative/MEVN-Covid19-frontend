<template>
    <div>
        <div
            class="w-full py-32 sm:py-40 md:py-64 bg-main-color opacity-50 dark:bg-dark-mode-bg2 dark:opacity-100 cursor-wait"
            v-bind:class="[
                Object.keys(countryData).length != 0 ? 'hidden' : 'block',
            ]"
        >
            <button
                type="button"
                class="flex items-center mx-auto border border-transparent text-base leading-6 font-medium rounded-md text-white dark:text-gray-200 transition ease-in-out duration-150"
                disabled
            >
                <svg
                    v-bind:class="[
                        Object.keys(countryData).length != 0
                            ? ''
                            : 'animate-spin ',
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
                Collecting data ...
            </button>
        </div>
        <div
            id="chartMap"
            ref="chartMap"
            class="bg-pink-50 dark:bg-dark-mode-bg2 py-4 md:pt-16"
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
                LangUser="eng"
                class="w-full px-2 mx-auto sm:w-11/12 md:w-10/12 lg:w-8/12"
            />
        </div>
    </div>
</template>

<script>
import MapChart from 'vue-chart-map';
import GlobalCovidDataService from '@/services/GlobalCovidDataService';

export default {
    name: 'ChartMap',
    components: {
        MapChart,
    },
    data() {
        return {
            highColor: '#ff1453',
            lowColor: '#ff99b4',
            defaultCountryFillColor: '#dadada',
            darkMode: 'false',
            countryData: {},
            error: '',
        };
    },
    async beforeCreate() {
        try {
            this.countryData = await GlobalCovidDataService.getDataForCountries();
        } catch (error) {
            this.error = error.message;
        }
    },
    mounted() {
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

<style lang="scss" scoped>
</style>