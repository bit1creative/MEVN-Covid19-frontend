<template>
    <div>
        <div v-if="date" class="m-auto text-center pt-2 md:pt-4">
            <span
                class="font-semibold text-xl md:text-3xl text-gray-600 dark:text-gray-200"
                >{{ date.substring(0, 10) }}</span
            >
        </div>
        <div v-if="error" class="m-auto text-center pb-4">
            <span class="text-xs text-gray-600 dark:text-gray-200"
                >Error occured while trying to get Date. <br />
                {{ error }}</span
            >
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Date',
    computed: mapState({
        date: 'date',
        error: 'dateError',
    }),
    created() {
        this.$store.dispatch('getDate');
    },
};
</script>

<style lang="scss" scoped></style>
