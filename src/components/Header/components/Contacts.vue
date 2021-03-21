<template>
    <div id="contacts">
        <div
            v-on:click="toggleHideContactsAnimation"
            :class="{ hidden: hideContacts }"
            class="fixed top-0 left-0 h-full w-full bg-white bg-opacity-50 z-10 animate-appear"
        ></div>
        <div
            :class="contactsW"
            class="fixed top-0 right-0 h-full bg-pink-50 z-10 animate-slidein transition-width ease-in-out duration-1000"
        >
            <div
                id="contacts"
                :class="{ hidden: hideContacts }"
                class="pt-1 grid grid-cols-1 h-full gap-y-8 text-center content-center text-3xl text-gray-900 text-opacity-80"
            >
                <a
                    href="https://www.linkedin.com/in/ivan-hrytsenko-4a9912208/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <font-awesome-icon
                        :icon="['fab', 'linkedin']"
                    ></font-awesome-icon>
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100013248375974"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <font-awesome-icon
                        :icon="['fab', 'facebook-square']"
                    ></font-awesome-icon>
                </a>
                <a
                    href="http://t.me/bit1creative"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <font-awesome-icon
                        :icon="['fab', 'telegram']"
                    ></font-awesome-icon>
                </a>
                <a
                    href="https://twitter.com/bit1creative"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <font-awesome-icon
                        :icon="['fab', 'twitter-square']"
                    ></font-awesome-icon>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'Contacts',
    data() {
        return {
            contactsW: 'w-0',
        };
    },
    methods: {
        toggleHideContactsAnimation: function() {
            this.contactsW = 'w-7/12 md:w-6/12';
            setTimeout(() => this.$store.dispatch('hideContacts'), 450);
        },
    },
    computed: mapState({
        hideContacts: 'hideContacts',
    }),
    watch: {
        hideContacts: function(newVal) {
            if (!newVal) this.contactsW = 'w-5/12';
            else if (newVal) this.contactsW = 'w-0';
        },
    },
};
</script>
<style lang=""></style>
