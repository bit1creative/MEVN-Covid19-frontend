<template>
    <Content></Content>
</template>

<script>
import Content from './components/Content.vue';

export default {
    name: 'HomePageContent',
    components: {
        Content
    },
    beforeCreate: function() {
        this.$cookie.set('casesTypeId', 4, 1);
    }
};
</script>

<style lang="css" scoped>
</style>