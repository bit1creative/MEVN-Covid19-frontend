<template>
    <div
        class="w-full py-32 sm:py-44 md:py-64 lg:py-80 bg-main-color opacity-50 dark:bg-dark-mode-bg2 dark:opacity-100"
    >
        <button
            type="button"
            class="flex items-center mx-auto border border-transparent text-base leading-6 font-medium rounded-md text-white dark:text-gray-200 transition ease-in-out duration-150 cursor-default select-none"
            disabled
        >
            <div class="select-text">
                Try again later or
                <span v-on:click="showContacts" class="underline cursor-pointer"
                    >contact us</span
                >
                with the following error message:
                <br />
                <span class="text-xs">{{ error.join('') }}</span>
            </div>
        </button>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'ChartMapError',
    props: ['error'],
    methods: {
        ...mapActions(['showContacts']),
    },
};
</script>
