<template>
    <div>
        <Header />
        <slot></slot>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
    name: 'MainMasterpage',
    components: {
        Header,
        Footer,
    },
};
</script>

<style></style>
