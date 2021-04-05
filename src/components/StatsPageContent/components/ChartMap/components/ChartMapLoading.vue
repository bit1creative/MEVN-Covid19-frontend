<template>
    <div
        class="w-full py-32 sm:py-44 md:py-64 lg:py-80 bg-main-color opacity-50 dark:bg-dark-mode-bg2 dark:opacity-100"
    >
        <button
            type="button"
            class="flex items-center mx-auto border border-transparent text-base leading-6 font-medium rounded-md text-white dark:text-gray-200 transition ease-in-out duration-150 cursor-default select-none"
            disabled
        >
            <svg
                class="-ml-1 mr-3 h-5 w-5 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                ></circle>
                <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
            <span>
                Collecting data ...
            </span>
        </button>
    </div>
</template>
<script>
export default {
    name: 'ChartMapLoading',
};
</script>
