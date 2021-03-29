<template>
    <div
        v-if="totalData"
        class="flex flex-col md:flex-row text-center justify-center py-4 md:px-14 lg:px-44 xl:px-72"
    >
        <div
            class="mx-auto md:mx-2 lg:mx-4 py-5 rounded shadow dark:shadow-2xl md:w-7/12 w-full bg-gradient-to-br from-pink-50 to-transparent dark:from-transparent dark:border dark:border-dark-mode-main-color dark:border-opacity-50"
            v-for="[dataType, totalValue, string, val] of totalData"
            :key="totalValue"
        >
            <div class="text-lg text-gray-600 dark:text-gray-400">
                {{ dataType.replace(/([A-Z])/g, ' $1').trim() }} <br />
                <span
                    class="mx-auto text-2xl font-bold text-gray-900 dark:text-gray-300"
                >
                    {{ totalValue }}
                </span>
            </div>
            <div class="mt-7">
                <span class="text-gray-500 dark:text-gray-400 text-sm"
                    >{{ string.replace(/([A-Z])/g, ' $1').trim() }} <br />
                    <span
                        class="text-gray-400 dark:text-gray-500 text-xs proportional-nums place-self-start"
                        >{{ val }}</span
                    ></span
                >
            </div>
        </div>
    </div>
</template>
class="mx-auto md:mx-2 lg:mx-4 py-5 rounded shadow md:w-7/12 w-full
bg-gradient-to-br from-pink-50 to-transparent
dark:from-dark-mode-secondary-color dark:via-secondary-color"
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'DataCards',
    data() {
        return {};
    },
    methods: {
        ...mapActions({
            getData: 'getTotalData',
        }),
    },
    computed: {
        ...mapGetters({
            totalData: 'GET_TOTAL_DATA',
            error: 'GET_CARDS_DATA_ERROR',
        }),
    },
    created() {
        this.getData();
    },
};
</script>

<style lang=""></style>
