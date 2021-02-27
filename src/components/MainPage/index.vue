<template>
    <div class="bg-yellow-50">
        <Header></Header>
        <chart-map :countryData="countryData"></chart-map>
    </div>
</template>

<script>
import ChartMap from './components/ChartMap';
import Header from './components/Header';
import GlobalCovidDataService from '../../services/GlobalCovidDataService';

export default {
    name: 'MainPage',
    components: {
        ChartMap,
        Header,
    },
    data() {
        return {
            countryData: {},
            error: '',
        };
    },
    async created() {
        try {
            this.countryData = await GlobalCovidDataService.getDataForCountries();
        } catch (error) {
            this.error = error.message;
        }
    },
};
</script>

<style lang="css" scoped>
</style>