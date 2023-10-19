<template>
    <div>
        <div class="d-flex flex-column">
            <ProfileUserInfo></ProfileUserInfo>
            <ProfileUserFeed></ProfileUserFeed>
        </div>
    </div>
</template>
<script lang="ts">
import ProfileUserFeed from '../components/ProfileUserFeed.vue';
import ProfileUserInfo from '../components/ProfileUserInfo.vue';
export default{
    components:{
        ProfileUserInfo,
        ProfileUserFeed,

    }

}
</script>