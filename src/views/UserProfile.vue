<template>
  <div>
    <div class="d-flex flex-column">
      <ProfileUserInfo></ProfileUserInfo>
      <ProfileUserFeed></ProfileUserFeed>
    </div>
  </div>
</template>
<script lang="ts">
import store from "../stores/store";
import ProfileUserFeed from "../components/ProfileUserFeed.vue";
import ProfileUserInfo from "../components/ProfileUserInfo.vue";
export default {
  components: {
    ProfileUserInfo,
    ProfileUserFeed,
  },
  created() {
    store.state.showLoder = true;
  },
  mounted() {
    setTimeout(() => {
      store.state.showLoder = false;
    }, 200);
  },
};
</script>
