<template>
    <div>
        <div v-if="date" class="m-auto text-center pb-2 md:pb-8 md:pt-4">
            <span
                class="font-semibold md:text-3xl text-gray-600 dark:text-gray-200"
                >{{ date.substring(0, 10) }}</span
            >
        </div>
        <!-- <div v-if="error" class="m-auto text-center border-0 border-t-2 border-b-2"> -->
        <div v-if="error" class="m-auto text-center pb-4">
            <span class="text-xs text-gray-600 dark:text-gray-200"
                >Error occured while trying to get Date. <br />Please contact us
                with following error message:<br />{{ error }}</span
            >
        </div>
    </div>
</template>

<script>
import GlobalCovidDataService from '@/services/GlobalCovidDataService';

export default {
    name: 'Date',
    data() {
        return {
            date: null,
            error: null,
        };
    },
    beforeCreate: async function() {
        try {
            this.date = await GlobalCovidDataService.getDate();
        } catch (e) {
            this.error = e.message;
            console.log(e);
        }
    },
};
</script>

<style lang="scss" scoped></style>
