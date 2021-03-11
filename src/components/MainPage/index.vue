<template>
    <div class="main-page">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../Header';
import Content from './components/Content';
import Footer from '../Footer';

export default {
    name: 'MainPage',
    components: {
        Header,
        Content,
        Footer,
    },
};
</script>

<style lang="css" scoped>
</style>