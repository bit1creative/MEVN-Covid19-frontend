<template>
    <div class="select-text py-8 w-10/12 text-center mx-auto">
        <font-awesome-icon
            :icon="['fas', 'exclamation-triangle']"
            class="text-3xl block mx-auto mb-4 text-main-color text-opacity-70"
        ></font-awesome-icon>
        <span class="font-light text-xl"
            >Unfortunately we were not able to get your location. <br />
            Try using the search tab instead!</span
        >
    </div>
</template>
<script>
export default {
    name: 'CountryError',
};
</script>
