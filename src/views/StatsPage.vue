<template>
    <div class="stats-page">
        <Header />
        <stats-page-content />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatsPageContent from '@/components/StatsPageContent';

export default {
    name: 'StatsPage',
    components: {
        Header,
        Footer,
        StatsPageContent,
    },
};
</script>

<style lang="scss" scoped></style>
