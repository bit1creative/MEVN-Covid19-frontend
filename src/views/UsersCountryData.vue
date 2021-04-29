<template>
    <main-masterpage>
        <users-country-content />
    </main-masterpage>
</template>
<script>
import UsersCountryContent from '@/components/UsersCountryContent';
import MainMasterpage from '../slots/MainMasterpage';

export default {
    name: 'UsersCountryData',
    components: {
        UsersCountryContent,
        MainMasterpage,
    },
};
</script>
