<template>
    <div
        id="chartMap"
        ref="chartMap"
        class="bg-pink-50 dark:bg-dark-mode-bg2 py-4 md:pt-16"
        :key="darkMode"
    >
        <MapChart
            :countryData="countryData"
            :highColor="highColor"
            :lowColor="lowColor"
            countryStrokeColor="#909090"
            :defaultCountryFillColor="defaultCountryFillColor"
            LangUser="eng"
            class="w-full px-3 mx-auto sm:w-9/12 md:w-10/12 lg:w-8/12"
        />
    </div>
</template>

<script>
import MapChart from 'vue-chart-map';
import GlobalCovidDataService from '../../../../../services/GlobalCovidDataService';

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