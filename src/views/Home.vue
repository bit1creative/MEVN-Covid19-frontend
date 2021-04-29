<template>
    <main-masterpage>
        <home-page-content />
    </main-masterpage>
</template>

<script>
// @ is an alias to /src
import MainMasterpage from '../slots/MainMasterpage';
import HomePageContent from '@/components/HomePageContent';

export default {
    name: 'Home',
    components: {
        HomePageContent,
        MainMasterpage,
    },
};
</script>

MainMasterpage
