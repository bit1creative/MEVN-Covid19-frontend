<template>
    <div class="user-country-data">
        <Header />
        <UsersCountryContent />
        <Footer />
    </div>
</template>
<script>
import UsersCountryContent from '@/components/UsersCountryContent';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
    name: 'UsersCountryData',
    components: {
        UsersCountryContent,
        Footer,
        Header,
    },
};
</script>
