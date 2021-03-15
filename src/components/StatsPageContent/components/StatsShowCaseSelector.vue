<template>
    <div
        class="py-4 grid grid-flow-col auto-cols-auto md:px-14 lg:px-44 xl:px-72 m-auto text-center md:text-base md:font-light divide-x-2 divide-main-color dark:text-gray-200 divide-dark-mode-main-color select-none"
    >
        <span
            v-on:click="clickedTypeOfCasesData('TotalConfirmed', $event)"
            class="cursor-pointer underline text-main-color dark:text-dark-mode-main-color"
            >Total Confirmed</span
        >
        <!-- <span
            class="h-10 border-0 border-r-2 border-main-color border-opacity-50"
        ></span> -->
        <span
            v-on:click="clickedTypeOfCasesData('TotalDeaths', $event)"
            class="cursor-pointer"
            >Total Deaths</span
        >
        <!-- <span
            class="h-10 border-0 border-r-2 border-main-color border-opacity-50"
        ></span> -->
        <span
            v-on:click="clickedTypeOfCasesData('TotalRecovered', $event)"
            class="cursor-pointer"
            >Total Recovered</span
        >
        <!-- <span
            class="h-10 border-0 border-r-2 border-main-color border-opacity-50"
        ></span> -->
        <span
            v-on:click="clickedTypeOfCasesData('NewConfirmed', $event)"
            class="cursor-pointer"
            >New Confirmed</span
        >
        <!-- <span
            class="h-10 border-0 border-r-2 border-main-color border-opacity-50"
        ></span> -->
        <span
            v-on:click="clickedTypeOfCasesData('NewDeaths', $event)"
            class="cursor-pointer"
            >New Deaths</span
        >
        <!-- <span
            class="h-10 border-0 border-r-2 border-main-color border-opacity-50"
        ></span> -->
        <span
            v-on:click="clickedTypeOfCasesData('NewRecovered', $event)"
            class="cursor-pointer"
            >New Recovered</span
        >
    </div>
</template>

<script>
export default {
    name: 'StatsShowCaseSelector',
    methods: {
        clickedTypeOfCasesData: function(casesType, event) {
            if (event) {
                let siblings = Array.prototype.slice.call(
                    event.target.parentNode.children
                );
                siblings.forEach((el) => {
                    if (el.classList.contains('underline'))
                        el.classList.toggle('underline');
                    if (el.classList.contains('text-main-color'))
                        el.classList.toggle('text-main-color');
                    if (el.classList.contains('dark:text-dark-mode-main-color'))
                        el.classList.toggle('dark:text-dark-mode-main-color');
                });
                event.target.classList.toggle('underline');
                event.target.classList.toggle('text-main-color');
                event.target.classList.toggle('dark:text-dark-mode-main-color');
            }
            this.$emit('clicked', casesType);
        },
    },
};
</script>

<style lang="scss" scoped>
</style>