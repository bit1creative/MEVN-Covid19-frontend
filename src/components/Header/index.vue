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
                    class="md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 text-center"
                >
                    <span
                        class="md:hidden border border-main-color dark:border-dark-mode-main-color dark:border-opacity-90"
                    ></span>
                    <router-link
                        to="/"
                        class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-dark-mode-bg2 dark:hover:text-gray-300 transition-colors duration-300 active:text-white active:bg-indigo-200"
                        >Home</router-link
                    >
                    <router-link
                        to="/stats"
                        class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-dark-mode-bg2 dark:hover:text-gray-300 transition-colors duration-300 active:text-white active:bg-indigo-200"
                        >Statistics</router-link
                    >
                    <div
                        v-on:click="showContacts"
                        class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-dark-mode-bg2 dark:hover:text-gray-300 transition-colors duration-300 active:text-white active:bg-indigo-200 cursor-pointer"
                    >
                        Contacts
                    </div>
                    <theme-switcher></theme-switcher>
                </div>
            </div>
        </nav>
        <contacts />
        <scroll-top-btn class="z-40"></scroll-top-btn>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import ScrollTopBtn from './components/ScrollTopBtn.vue';
import Contacts from './components/Contacts.vue';
import ThemeSwitcher from './components/ThemeSwitcher.vue';

export default {
    name: 'Header',
    components: {
        ScrollTopBtn,
        Contacts,
        ThemeSwitcher,
    },
    data() {
        return {
            navbarClass: 'hidden',
        };
    },
    methods: {
        showContacts: function() {
            this.showContacts();
            // this.$store.dispatch('showContacts');
        },
        ...mapActions(['showContacts', 'initTheme']),
    },
    computed: {
        ...mapGetters({ theme: 'GET_THEME' }),
    },
    watch: {
        theme(newTheme) {
            if (newTheme === 'light') {
                document.querySelector('html').classList.remove('dark');
                document.body.classList.remove('dark');
            } else {
                document.querySelector('html').classList.add('dark');
                document.body.classList.add('dark');
            }
        },
    },
    beforeMount() {
        this.initTheme();
    },
};
</script>

<style lang="css" scoped></style>
