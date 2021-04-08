<template>
    <div class="col-3">
        <div class="relative p-8 m-6 ">
            <div
                class="flex justify-center items-center relative p-8 m-0 overflow-hidden"
            >
                <span
                    class="text-xl font-extralight mx-2 mb-2 text-gray-800 dark:text-gray-300"
                    >Fetching data</span
                >
                <div
                    class="w-2.5 h-2.5 relative rounded-xl bg-main-color dark:bg-dark-mode-main-color animate-dot-elastic-before"
                ></div>
                <div
                    class="w-2.5 h-2.5 relative rounded-xl bg-main-color dark:bg-dark-mode-main-color animate-dot-elastic mx-1"
                ></div>
                <div
                    class="w-2.5 h-2.5 relative rounded-xl bg-main-color dark:bg-dark-mode-main-color animate-dot-elastic-after"
                ></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Loading',
};
</script>
