<template>
    <main-masterpage>
        <stats-page-content />
    </main-masterpage>
</template>

<script>
import MainMasterpage from '../slots/MainMasterpage';
import StatsPageContent from '@/components/StatsPageContent';

export default {
    name: 'StatsPage',
    components: {
        MainMasterpage,
        StatsPageContent,
    },
};
</script>

<style lang="scss" scoped></style>
