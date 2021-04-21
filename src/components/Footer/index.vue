<template>
    <div id="footer" class="bg-white dark:bg-dark-mode-bg">
        <div
            class="container flex items-center justify-center md:block mx-auto md:px-4 lg:px-16"
        >
            <div class="text-center pr-4 pt-1 text-gray-500 dark:text-gray-400">
                <span>© 2021 Ivan Hrytsenko</span><br />
            </div>
            <!-- <div class="hidden md:block w-2/12"></div> -->
            <div id="contacts" class="pt-1 flex justify-center">
                <a
                    class="text-linkedin pr-2 text-xl"
                    href="https://www.linkedin.com/in/ivan-hrytsenko-4a9912208/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <font-awesome-icon
                        :icon="['fab', 'linkedin']"
                    ></font-awesome-icon>
                </a>
                <a
                    class="text-facebook pr-2 text-xl"
                    href="https://www.facebook.com/profile.php?id=100013248375974"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <font-awesome-icon
                        :icon="['fab', 'facebook-square']"
                    ></font-awesome-icon>
                </a>
                <a
                    class="text-telegram pr-2 text-xl"
                    href="http://t.me/bit1creative"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <font-awesome-icon
                        :icon="['fab', 'telegram']"
                    ></font-awesome-icon>
                </a>
                <a
                    class="text-twitter pr-2 text-xl"
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
        <div class="text-center pb-4 select-none">
            <b class="block font-thin text-xs text-gray-400 dark:text-gray-500">
                For Non-Commercial usage only. <br /><a
                    href="https://www.who.int/health-topics/coronavirus"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Main page source</a
                ></b
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style lang="scss" scoped></style>
