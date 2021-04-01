<template>
    <div class="pt-4">
        <button
            class="group block mx-auto px-4 py-2 border-2 border-main-color dark:border-dark-mode-main-color overflow-hidden select-none"
        >
            <router-link to="/country" class="p-6">
                <font-awesome-icon
                    :icon="['fas', 'chart-line']"
                    class="relative left-0 -ml-4 text-main-color dark:text-dark-mode-main-color group-hover:left-1/2 group-hover:text-3xl group-hover:-ml-9 group-hover:-mb-1 transition-font-size duration-500 lg:duration-700"
                ></font-awesome-icon>
                <span
                    class="relative inline-block right-0 ml-2 pl-2 py-2 border-0 border-l-2 border-main-color dark:border-dark-mode-main-color text-main-color dark:text-dark-mode-main-color group-hover:-right-72 transition-inset duration-500 lg:duration-700"
                >
                    View for my country</span
                >
            </router-link>
        </button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'RouterLinkToCountry',
    computed: {
        ...mapGetters({
            date: 'GET_DATE',
        }),
    },
};
</script>
