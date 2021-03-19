<template>
    <div>
        <div class="block md:hidden mx-auto pt-4 text-center">
            <div
                class="w-full flex justify-center items-center"
                :id="casesTypeId"
            >
                <font-awesome-icon
                    :icon="['fas', 'arrow-left']"
                    v-on:click="changeCasesType('prev')"
                    class="text-sm"
                ></font-awesome-icon>
                <div class="pb-1 w-4/12 sm:w-3/12">
                    <span class="mx-2">{{ casesTypes[casesTypeId] }}</span>
                </div>
                <font-awesome-icon
                    :icon="['fas', 'arrow-right']"
                    v-on:click="changeCasesType('next')"
                    class="text-sm"
                ></font-awesome-icon>
            </div>
        </div>
        <div
            class="hidden py-4 md:grid grid-flow-col auto-cols-auto md:px-14 lg:px-44 xl:px-72 m-auto text-center md:text-base md:font-light divide-x-2 divide-main-color dark:text-gray-200 divide-dark-mode-main-color select-none"
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
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            casesTypes: [
                'Total Confirmed',
                'Total Deaths',
                'Total Recovered',
                'New Confirmed',
                'New Deaths',
                'New Recovered',
            ],
            casesTypeId: 0,
        };
    },
    methods: {
        clickedTypeOfCasesData: function(casesType, event) {
            if (event) {
                let siblings = Array.prototype.slice.call(
                    event.target.parentNode.children
                );
                siblings.forEach(el => {
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
        changeCasesType: function(condition) {
            switch (condition) {
                case 'prev':
                    if (this.casesTypeId === 0)
                        this.casesTypeId = this.casesTypes.length - 1;
                    else this.casesTypeId--;
                    break;
                case 'next':
                    if (this.casesTypeId === this.casesTypes.length - 1)
                        this.casesTypeId = 0;
                    else this.casesTypeId++;
                    break;
            }
            this.$emit(
                'clicked',
                this.casesTypes[this.casesTypeId].replace(' ', '')
            );
        },
    },
};
</script>

<style lang="scss" scoped></style>
