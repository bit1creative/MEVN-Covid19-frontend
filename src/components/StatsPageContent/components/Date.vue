<template>
    <div>
        <div v-if="date" class="m-auto text-center pt-2 md:pt-4 pb-2">
            <span
                class="font-semibold text-xl md:text-3xl text-main-color text-opacity-70 dark:text-gray-200 dark:text-opacity-90"
                >{{ date.substring(0, 10) }}</span
            >
        </div>
        <div v-if="error && !date" class="m-auto text-center pb-4">
            <span class="text-xs text-gray-600 dark:text-gray-200"
                >Error occured while trying to get Date. <br />
                {{ error }}</span
            >
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Date',
    computed: {
        ...mapGetters({
            date: 'GET_DATE',
            error: 'GET_DATE_ERROR',
        }),
    },
    methods: {
        ...mapActions(['getDate']),
    },
    created() {
        this.getDate();
        // this.$store.dispatch('getDate');
    },
};
</script>

<style lang="scss" scoped></style>
