<template>
    <div class="home-page">
        <Header/>
        <home-page-content />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import HomePageContent from '@/components/HomePageContent';

export default {
    name: 'Home',
    components: {
        HomePageContent,
        Footer,
        Header
    },
};
</script>
