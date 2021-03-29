<template>
    <div id="contacts">
        <div
            v-on:click="toggleHideContactsAnimation"
            :class="{ hidden: hideContacts }"
            class="fixed top-0 left-0 h-full w-full bg-white dark:bg-dark-mode-secondary-color bg-opacity-60 dark:bg-opacity-30 z-10 animate-appear"
        ></div>
        <div
            :class="contactsW"
            class="fixed top-0 right-0 h-full bg-pink-50 dark:bg-dark-mode-bg3 z-10 animate-slidein transition-width ease-in-out duration-1000"
        >
            <div class="h-3/4 w-full top-0 right-0 absolute">
                <div class="h-full w-full absolute">
                    <div
                        class="bg-pink-100 dark:bg-dark-mode-bg2 dark:opacity-60 h-full w-full opacity-70"
                    ></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            class="fill-pink-100 dark:fill-dark-mode-bg2 opacity-70 dark:opacity-60"
                            d="M0,224L120,197.3C240,171,480,117,720,96C960,75,1200,85,1320,90.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                        ></path>
                    </svg>
                </div>
                <div class="h-full w-full absolute">
                    <div
                        class="bg-pink-200 dark:bg-dark-mode-bg2 dark:opacity-100 h-4/6 opacity-60"
                    ></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            class="fill-pink-200 dark:fill-dark-mode-bg2 opacity-60 dark:opacity-100"
                            d="M0,128L120,154.7C240,181,480,235,720,256C960,277,1200,267,1320,261.3L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                        ></path>
                    </svg>
                </div>
                <div class="h-full w-full absolute">
                    <div
                        class="bg-main-color dark:bg-dark-mode-bg h-3/6 opacity-30 dark:opacity-60"
                    ></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            class="fill-main-color dark:fill-dark-mode-bg opacity-30 dark:opacity-60"
                            d="M0,256L120,224C240,192,480,128,720,117.3C960,107,1200,149,1320,170.7L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                        ></path>
                    </svg>
                </div>
                <div class="h-full w-full absolute">
                    <div
                        class="bg-main-color dark:bg-dark-mode-bg h-1/6 opacity-50 dark:opacity-80"
                    ></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            class="fill-main-color dark:fill-dark-mode-bg opacity-50 dark:opacity-80"
                            d="M0,160L120,181.3C240,203,480,245,720,224C960,203,1200,117,1320,74.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                        ></path>
                    </svg>
                </div>
            </div>
            <div
                id="contacts"
                :class="iconsOpacity"
                class="pt-1 md:pt-0 flex flex-col md:flex-row-reverse justify-center h-full text-center text-3xl text-gray-900 dark:text-gray-300 text-opacity-90 transition-opacity duration-1000"
            >
                <a
                    href="https://www.linkedin.com/in/ivan-hrytsenko-4a9912208/"
                    target="_blank"
                    rel="noopener noreferrer"
                    :class="iconLinkedInPos"
                    class="mb-12 md:-ml-12 transition-margin ease-in-out duration-300"
                >
                    <font-awesome-icon
                        class="absolute z-10"
                        :icon="['fab', 'linkedin']"
                    ></font-awesome-icon>
                    <font-awesome-icon
                        class="text-main-color absolute mt-1 ml-1 opacity-10"
                        :icon="['fab', 'linkedin']"
                    ></font-awesome-icon>
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100013248375974"
                    target="_blank"
                    rel="noopener noreferrer"
                    :class="iconFacebookPos"
                    class="md:-ml-12 transition-margin ease-in-out duration-500"
                >
                    <font-awesome-icon
                        class="absolute z-10"
                        :icon="['fab', 'facebook-square']"
                    ></font-awesome-icon>
                    <font-awesome-icon
                        class="absolute text-main-color mt-1 ml-1 opacity-10"
                        :icon="['fab', 'facebook-square']"
                    ></font-awesome-icon>
                </a>
                <a
                    href="http://t.me/bit1creative"
                    target="_blank"
                    rel="noopener noreferrer"
                    :class="iconTelegramPos"
                    class="md:-ml-12 transition-margin ease-in-out duration-700"
                >
                    <font-awesome-icon
                        class="absolute z-10"
                        :icon="['fab', 'telegram']"
                    ></font-awesome-icon>
                    <font-awesome-icon
                        class="absolute text-main-color mt-1 ml-1 opacity-10"
                        :icon="['fab', 'telegram']"
                    ></font-awesome-icon>
                </a>
                <a
                    href="https://twitter.com/bit1creative"
                    target="_blank"
                    rel="noopener noreferrer"
                    :class="iconTwitterPos"
                    class="md:-ml-12 transition-margin ease-in-out duration-1000"
                >
                    <font-awesome-icon
                        class="absolute z-10"
                        :icon="['fab', 'twitter-square']"
                    ></font-awesome-icon>
                    <font-awesome-icon
                        class="absolute text-main-color mt-1 ml-1 opacity-10"
                        :icon="['fab', 'twitter-square']"
                    ></font-awesome-icon>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Contacts',
    data() {
        return {
            contactsW: 'w-0',
            iconsOpacity: 'block',
            iconLinkedInPos: 'ml-64 md:-mt-8',
            iconFacebookPos: 'ml-72 -my-12',
            iconTelegramPos: 'ml-80 -my-12',
            iconTwitterPos: 'ml-96 -my-12',
        };
    },

    methods: {
        toggleHideContactsAnimation: function() {
            // this.contactsW = 'w-7/12 md:w-6/12';
            // setTimeout(() => this.hideContactsPage(), 450);
            this.hideContactsPage();
            //////////////////////////////////////////////////////////////////
            // setTimeout(() => this.$store.dispatch('hideContacts'), 450);
            // this.$store.dispatch('hideContacts');
        },
        ...mapActions({ hideContactsPage: 'hideContacts' }),
    },
    computed: {
        ...mapGetters({
            hideContacts: 'GET_HIDE_CONTACTS_STATE',
        }),
    },
    watch: {
        hideContacts: function(newVal) {
            this.contactsW = newVal ? 'w-0' : 'w-5/12';
            if (!newVal) this.iconsOpacity = 'block';
            let time = newVal ? 0 : 400;
            setTimeout(() => {
                this.iconsOpacity = newVal
                    ? 'opacity-0 ease-slow-in-quick-out'
                    : 'opacity-100 ease-slow-in-quick-out';
                this.iconLinkedInPos = newVal
                    ? 'ml-64 md:-mt-8'
                    : '-ml-8 md:mt-12';
                this.iconFacebookPos = newVal
                    ? 'ml-72 md:-my-12'
                    : '-ml-8 my-12';
                this.iconTelegramPos = newVal
                    ? 'ml-80 md:-my-12'
                    : '-ml-8 my-12';
                this.iconTwitterPos = newVal
                    ? 'ml-96 md:-my-12'
                    : '-ml-8 my-12';
            }, time);
            //////////////////////////////////////////////
            if (newVal)
                setTimeout(() => {
                    this.iconsOpacity = 'hidden';
                }, 800);

            ////////////////////////////////////////////////
            // if (!newVal) this.contactsW = 'w-5/12';
            // else if (newVal) this.contactsW = 'w-0';
        },
    },
};
</script>
<style lang=""></style>
