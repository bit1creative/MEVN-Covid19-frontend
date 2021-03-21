<template>
    <div id="header" class="header-2 select-none">
        <nav class="bg-white dark:bg-dark-mode-bg py-2 md:py-4">
            <div
                class="container px-4 mx-auto md:flex md:items-center md:w-9/12"
            >
                <div class="flex justify-between items-center">
                    <router-link
                        to="/"
                        class="font-bold text-xl text-main-color dark:text-dark-mode-title"
                        >COVID-19</router-link
                    >
                    <button
                        class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden outline-none"
                        v-on:click="
                            navbarClass =
                                navbarClass == `hidden` ? `flex` : `hidden`
                        "
                    >
                        <font-awesome-icon :icon="['fas', 'bars']" />
                    </button>
                </div>

                <div
                    :class="navbarClass"
                    class="md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                >
                    <span
                        class="md:hidden border border-main-color dark:border-dark-mode-main-color dark:border-opacity-90"
                    ></span>
                    <router-link
                        to="/"
                        class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-dark-mode-btn dark:hover:text-gray-300 transition-colors duration-300 active:text-white active:bg-indigo-200"
                        >Home</router-link
                    >
                    <router-link
                        to="/stats"
                        class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-dark-mode-btn dark:hover:text-gray-300 transition-colors duration-300 active:text-white active:bg-indigo-200"
                        >Statistics</router-link
                    >
                    <div
                        v-on:click="showContacts"
                        class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-dark-mode-btn dark:hover:text-gray-300 transition-colors duration-300 active:text-white active:bg-indigo-200 cursor-pointer"
                    >
                        Contacts
                    </div>
                </div>
            </div>
        </nav>
        <contacts />
        <scroll-top-btn class="z-40"></scroll-top-btn>
    </div>
</template>

<script>
import ScrollTopBtn from './components/ScrollTopBtn.vue';
import Contacts from './components/Contacts.vue';

export default {
    name: 'Header',
    components: {
        ScrollTopBtn,
        Contacts,
    },
    data() {
        return {
            navbarClass: 'hidden',
        };
    },
    methods: {
        showContacts: function() {
            this.$store.dispatch('showContacts');
        },
    },
};
</script>

<style lang="css" scoped></style>
