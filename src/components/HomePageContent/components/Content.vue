<template>
    <div class="bg-pink-50 dark:bg-dark-mode-bg2 py-6 md:py-12">
        <div class="sm:w-full mx-auto">
            <div class="text-center mx-auto select-none">
                <h1
                    class="text-3xl md:text-4xl font-medium mb-2 py-4 text-gray-200 bg-main-color dark:bg-dark-mode-main-color dark:text-gray-100"
                >
                    COVID-19
                </h1>
                <a
                    href=""
                    v-scroll-to="{
                        element: '#overview',
                        duration: 500,
                        easing: 'ease-in-out',
                    }"
                >
                    <button
                        class="animate-pulse rounded-sm text-gray-500 py-4 dark:text-gray-200 px-6 text-xl focus:outline-none"
                    >
                        Read About<br />
                        <font-awesome-icon
                            :icon="['fas', 'arrow-down']"
                            class="animate-bounce mt-2"
                        />
                    </button>
                </a>
                <!-- <div class="mt-4">
                    <img
                        src="https://www.who.int/images/default-source/health-topics/coronavirus/gettyimages-1203376093.tmb-1366v.png?Culture=en&sfvrsn=6e0c1bc7_6%201366w"
                        alt="mockup"
                        class="d-block max-w-full rounded shadow-md"
                    />
                </div> -->
            </div>
            <div
                class="relative flex justify-center overflow-hidden w-full h-44 sm:h-64 lg:h-112"
            >
                <img
                    src="https://www.who.int/images/default-source/health-topics/coronavirus/gettyimages-1203376093.tmb-1366v.png?Culture=en&sfvrsn=6e0c1bc7_6%201366w"
                    alt="photo of people wearing mask"
                    class="shadow w-full object-cover"
                />
                <div
                    id="overview"
                    class="absolute invisible md:visible bottom-0 left-10 bg-pink-50 dark:bg-dark-mode-bg2 w-4/12 h-1/4 text-left text-bottom border dark:border-dark-mode-secondary-color select-none"
                >
                    <span class="absolute flex h-3 w-3 -right-1 -top-1">
                        <span
                            class="absolute inline-flex rounded-full h-3 w-3 dark:bg-dark-mode-secondary-color"
                        ></span>
                        <span
                            class="animate-ping inline-flex h-full w-full rounded-full dark:bg-dark-mode-secondary-color opacity-75"
                        ></span>
                    </span>
                    <div class="absolute w-full h-full overflow-hidden">
                        <span
                            class="absolute text-7xl lg:text-9xl font-sans text-main-color opacity-20 dark:opacity-30 dark:text-dark-mode-main-color font-bold ml-10 md:ml-8 lg:ml-32 mb-6 lg:mb-10 bottom-0"
                        >
                            Overview
                        </span>
                        <span
                            class="absolute text-7xl lg:text-9xl font-sans text-main-color opacity-30 dark:opacity-20 dark:text-dark-mode-main-color font-bold -ml-32 lg:-ml-72 -mb-2 lg:-mb-4 bottom-0"
                        >
                            Overview
                        </span>
                        <span
                            class="absolute text-3xl lg:text-5xl font-sans text-main-color dark:text-dark-mode-main-color font-light ml-4 lg:ml-8 mb-2 lg:mb-4 bottom-0"
                        >
                            Overview
                        </span>
                    </div>
                </div>
            </div>

            <div
                class="md:flex md:flex-wrap mx-2 mt-6 md:mt-12 md:w-11/12 lg:w-9/12 md:mx-auto"
            >
                <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                    <span
                        class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3 dark:border-dark-mode-secondary-color"
                    ></span>
                    <h5
                        class="text-xl dark:text-gray-200 font-medium uppercase mb-4"
                    >
                        Virus
                    </h5>
                    <p class="text-gray-600 dark:text-gray-400">
                        Most people infected with the COVID-19 virus will
                        experience mild to moderate respiratory illness and
                        recover without requiring special treatment. Older
                        people, and those with underlying medical problems like
                        cardiovascular disease, diabetes, chronic respiratory
                        disease, and cancer are more likely to develop serious
                        illness.
                    </p>
                </div>

                <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                    <span
                        class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3 dark:border-dark-mode-secondary-color"
                    ></span>
                    <h5
                        class="text-xl dark:text-gray-200 font-medium uppercase mb-4"
                    >
                        Prevention
                    </h5>
                    <p class="text-gray-600 dark:text-gray-400">
                        The best way to prevent and slow down transmission is to
                        be well informed about the COVID-19 virus, the disease
                        it causes and how it spreads. Protect yourself and
                        others from infection by washing your hands or using an
                        alcohol based rub frequently and not touching your face.
                    </p>
                </div>

                <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                    <span
                        class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3 dark:border-dark-mode-secondary-color"
                    ></span>
                    <h5
                        class="text-xl dark:text-gray-200 font-medium uppercase mb-4"
                    >
                        Spread
                    </h5>
                    <p class="text-gray-600 dark:text-gray-400">
                        The COVID-19 virus spreads primarily through droplets of
                        saliva or discharge from the nose when an infected
                        person coughs or sneezes, so it’s important that you
                        also practice respiratory etiquette (for example, by
                        coughing into a flexed elbow).
                    </p>
                </div>

                <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-16 text-center">
                    <span
                        class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3 dark:border-dark-mode-secondary-color"
                    ></span>
                    <h5
                        class="text-xl dark:text-gray-200 font-medium uppercase mb-4"
                    >
                        Most common symptoms
                    </h5>
                    <div class="flex justify-between">
                        <div></div>
                        <ul
                            class="list-disc list-inside text-left text-gray-600 dark:text-gray-400 dark:border-dark-mode-secondary-color"
                        >
                            <li>fever.</li>
                            <li>dry cough.</li>
                            <li>tiredness.</li>
                        </ul>
                        <div></div>
                    </div>
                </div>

                <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-16 text-center">
                    <span
                        class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3 dark:border-dark-mode-secondary-color"
                    ></span>
                    <h5
                        class="text-xl dark:text-gray-200 font-medium uppercase mb-4"
                    >
                        Less common symptoms
                    </h5>
                    <div class="flex justify-between">
                        <div></div>
                        <ul
                            class="list-disc list-inside text-left text-gray-600 dark:text-gray-400"
                        >
                            <li>aches and pains.</li>
                            <li>sore throat.</li>
                            <li>diarrhoea.</li>
                            <li>conjunctivitis.</li>
                            <li>headache.</li>
                            <li>loss of taste or smell.</li>
                            <li>
                                a rash on skin, or discolouration of fingers or
                                toes.
                            </li>
                        </ul>
                        <div></div>
                    </div>
                </div>

                <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-16 text-center">
                    <span
                        class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3 dark:dark-mode-secondary-color"
                    ></span>
                    <h5
                        class="text-xl dark:text-gray-200 font-medium uppercase mb-4"
                    >
                        Serious symptoms
                    </h5>
                    <div class="flex justify-between">
                        <div></div>
                        <ul
                            class="list-disc list-inside text-left text-gray-600 dark:text-gray-400"
                        >
                            <li>
                                difficulty breathing or shortness of breath.
                            </li>
                            <li>chest pain or pressure.</li>
                            <li>loss of speech or movement.</li>
                        </ul>
                        <div></div>
                    </div>
                </div>
            </div>
            <div
                class="bg-main-color dark:bg-dark-mode-bg3 text-gray-200 text-center h-18 mx-auto mb-4 mt-8 text-2xl"
            >
                <router-link
                    to="/stats"
                    class="flex justify-center py-4 mx-auto w-5/12 sm:w-4/12 md:w-3/12 select-none"
                >
                    <span class="pr-5 dark:text-gray-200">View Stats</span>
                    <div class="pt-1">
                        <font-awesome-icon
                            class="absolute dark:text-gray-200"
                            :icon="['far', 'chart-bar']"
                        ></font-awesome-icon>
                        <font-awesome-icon
                            class="absolute animate-ping opacity-70 dark:text-dark-mode-main-color dark:opacity-40"
                            :icon="['far', 'chart-bar']"
                        ></font-awesome-icon>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content',
    components: {},
};
</script>

<style lang="css" scoped></style>
