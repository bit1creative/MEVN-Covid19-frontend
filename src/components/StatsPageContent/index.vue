<template>
    <div id="chart-map">
        <date></date>
        <data-cards />
        <router-link-to-country></router-link-to-country>
        <nav-bar @clicked="onClickTypeOfCasesData"></nav-bar>
        <chart-map :chartToShow="chartToShow" />
    </div>
</template>

<script>
import ChartMap from './components/ChartMap';
import NavBar from './components/NavBar.vue';
import Date from './components/Date.vue';
import DataCards from './components/DataCards.vue';
import RouterLinkToCountry from './components/RouterLinkToCountry.vue';

export default {
    name: 'StatsPageContent',
    components: {
        ChartMap,
        NavBar,
        Date,
        DataCards,
        RouterLinkToCountry,
    },
    data() {
        return {
            chartToShow: 'TotalConfirmed',
        };
    },
    methods: {
        onClickTypeOfCasesData: function(casesType) {
            this.chartToShow = casesType;
        },
    },
};
</script>

<style lang="scss" scoped></style>
