<template>
    <div
        v-if="totalData"
        class="grid grid-rows-4 md:grid-cols-4 md:grid-rows-1 justify-center py-8 md:px-14 lg:px-44 xl:px-72 divide-y-2 md:divide-x-2 md:divide-y-0 divide-main-color"
    >
        <div
            v-for="[key, val] of Object.entries(totalData)"
            :key="key"
            class="flex flex-col text-center p-2 sm:p-3 md:p-4"
        >
            <span class="inline-block text-2xl font-medium text-gray-600">{{
                key
            }}</span>
            <span class="inline-block text-normal text-gray-500">{{
                val
            }}</span>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'TotalInfo',
    computed: {
        ...mapGetters({
            totalData: 'GET_USERS_COUNTRY_TOTAL_DATA',
        }),
    },
};
</script>
