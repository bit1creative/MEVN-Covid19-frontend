<template>
    <div id="chart-map">
        <date></date>
        <nav-bar @clicked="onClickTypeOfCasesData"></nav-bar>
        <chart-map :chartToShow="chartToShow" />
    </div>
</template>

<script>
import ChartMap from './components/ChartMap.vue';
import NavBar from './components/NavBar.vue';
import Date from './components/Date.vue';

export default {
    name: 'StatsPageContent',
    components: {
        ChartMap,
        NavBar,
        Date,
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
