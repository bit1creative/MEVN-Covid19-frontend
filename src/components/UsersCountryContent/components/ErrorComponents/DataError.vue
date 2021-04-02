<template>
    <div
        class="select-text text-center dark:text-gray-300 py-16 w-10/12 mx-auto"
    >
        <font-awesome-icon
            :icon="['fas', 'exclamation-triangle']"
            class="text-3xl block mx-auto mb-4 text-main-color dark:text-dark-mode-main-color text-opacity-70"
        ></font-awesome-icon>
        Error occured while trying to fetch data. Please try again later or
        <span v-on:click="showContacts" class="underline cursor-pointer"
            >contact us</span
        >
        with the following error message:
        <br />
        <span class="text-xs">{{ error }}</span>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: 'DataError',
    props: {
        error: {
            type: String,
            default: '',
        },
    },
    methods: {
        ...mapActions(['showContacts']),
    },
};
</script>
<style lang=""></style>
