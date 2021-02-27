<template>
    <div class="home">
        <main-page></main-page>
    </div>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/MainPage';

export default {
    name: 'Home',
    components: {
        MainPage,
    },
};
</script>
