<template>
    <div id="app">
        <main-page></main-page>
    </div>
</template>

<script>
import MainPage from '@/components/MainPage'

export default {
    name: 'App',
    components: {
        MainPage,
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
