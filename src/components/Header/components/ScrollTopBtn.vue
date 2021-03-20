<template>
    <div>
        <a
            href=""
            v-scroll-to="{
                element: '#header',
                duration: 750,
                easing: 'ease-out',
            }"
        >
            <button
                v-bind:class="scrollUpBtnClass"
                class="fixed bottom-5 right-3 md:right-5 focus:outline-none text-3xl text-gray-100 flex items-center justify-center h-14 w-14 bg-main-color opacity-70 rounded-full dark:bg-dark-mode-main-color dark:text-white dark:opacity-90"
            >
                <font-awesome-icon
                    :icon="['fas', 'chevron-up']"
                    class="md:hover:animate-bounce md:hover:mb-0"
                    v-bind:class="[
                        margin,
                        {
                            'md:animate-bounce': atTheBottomOfThePage,
                        },
                    ]"
                />
            </button>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ScrollTopBtn',
    data() {
        return {
            scrollUpBtnClass: 'hidden',
            atTheBottomOfThePage: false,
            margin: 'mb-1',
        };
    },
    methods: {
        handleScroll: function() {
            window.onscroll = () => {
                if (window.scrollY <= 200) {
                    if (this.scrollUpBtnClass != 'hidden') {
                        return (this.scrollUpBtnClass = 'hidden');
                    }
                }
                if (window.scrollY > 200) {
                    if (this.scrollUpBtnClass != 'block') {
                        return (this.scrollUpBtnClass = 'block');
                    }

                    let bottomOfPage =
                        window.innerHeight + window.scrollY >
                        document.body.scrollHeight - 50;

                    if (bottomOfPage) {
                        if (
                            this.atTheBottomOfThePage &&
                            this.margin == 'md:mb-0'
                        )
                            return;
                        this.atTheBottomOfThePage = true;
                        this.margin = 'mb-1 md:mb-0';
                        return;
                    } else {
                        this.atTheBottomOfThePage = false;
                        this.margin = 'mb-1';
                        return;
                    }
                }
            };
        },
    },
    created: function() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<style lang="scss" scoped></style>
