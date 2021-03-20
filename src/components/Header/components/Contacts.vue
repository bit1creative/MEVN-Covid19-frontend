<template>
    <div :key="contacts" id="contacts">
        <div
            v-on:click="
                () => {
                    this.$store.dispatch('hideContacts');
                    this.hide();
                }
            "
            :class="{ hidden: contacts !== 'show' }"
            class="fixed top-0 left-0 h-full w-7/12 bg-white bg-opacity-50 z-10 animate-appear"
        ></div>
        <div
            :class="[
                { hidden: hidden },
                { 'animate-slideout': contacts !== 'show' },
            ]"
            class="fixed top-0 -right-2/4 h-full w-6/12 bg-pink-50 z-10 animate-slidein"
        >
            asdasd
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'Contacts',
    data() {
        return {
            hidden: this.contacts == 'hide',
        };
    },
    methods: {
        hide: function() {
            setTimeout(() => {
                if (this.contacts == 'hide') {
                    this.hidden = !this.hidden;
                }
            }, 1000);
        },
    },
    computed: mapState({
        contacts: 'showContacts',
    }),
    watch: {
        hidden: function(newVal) {
            if (newVal) this.$store.dispatch('showContacts');
            else this.$store.dispatch('hideContacts');
        },
    },
};
</script>
<style lang=""></style>
