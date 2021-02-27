<template>
    <div class="bg-pink-50 py-2 md:py-4">
        <MapChart
            :countryData="countryData"
            highColor="#ff1453"
            lowColor="#ff99b4"
            countryStrokeColor="#909090"
            defaultCountryFillColor="#dadada"
            LangUser="eng"
            class="w-full px-3 mx-auto sm:w-9/12 md:w-10/12 lg:w-8/12"
        />
    </div>
</template>

<script>
import MapChart from 'vue-chart-map'
export default {
    name: 'ChartMap',
    components: {
        MapChart,
    },
    props: {
        countryData: {
            type: Object,
            default: () => {},
        },
    },
}
</script>

<style lang="scss" scoped>
</style>