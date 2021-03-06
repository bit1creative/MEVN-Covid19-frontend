<template>
    <div class="bg-yellow-50">
        <Header></Header>
        <Content></Content>
    </div>
</template>

<script>
import Header from '../Header';
import Content from './components/Content';

export default {
    name: 'MainPage',
    components: {
        Header,
        Content
    },

};
</script>

<style lang="css" scoped>
</style>