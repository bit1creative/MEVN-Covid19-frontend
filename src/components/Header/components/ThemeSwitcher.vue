<template>
    <div class="flex items-center justify-center w-full px-2 py-4 md:py-0">
        <label class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative">
                <!-- input -->
                <input type="checkbox" class="sr-only" v-model="isDarkMode" />
                <!-- line -->
                <div
                    class="line w-10 h-4 bg-yellow-200 dark:bg-blue-200 rounded-full shadow-inner"
                ></div>
                <!-- dot -->
                <div
                    class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition text-center align-middle inline-block"
                >
                    <font-awesome-icon
                        v-if="isDarkMode"
                        :icon="['fas', 'moon']"
                        class="inline-block text-base align-middle mb-0.5 md:mb-1 text-blue-400"
                    ></font-awesome-icon>
                    <font-awesome-icon
                        v-if="!isDarkMode"
                        :icon="['fas', 'sun']"
                        class="inline-block text-base align-middle mb-0.5 md:mb-1 text-yellow-500"
                    ></font-awesome-icon>
                </div>
            </div>
        </label>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'ThemeSwitcher',
    data() {
        return {
            isDarkMode: null,
        };
    },
    methods: {
        ...mapActions(['toggleTheme']),
    },
    computed: {
        ...mapGetters({ theme: 'GET_THEME' }),
    },
    watch: {
        isDarkMode: function(val, oldVal) {
            if (oldVal === null) return;
            this.toggleTheme();
        },
    },
    created() {
        this.isDarkMode = this.theme == 'dark';
    },
};
</script>
<style>
input:checked ~ .dot {
    transform: translateX(100%);
}
</style>
