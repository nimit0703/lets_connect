<template>
  <div class="d-flex flex-column" style="margin-left: 20px">
    <!-- showing current user -->
    <SmallUserProfile :id="1"></SmallUserProfile>
    <div class="tags">
        <p>Suggested for you</p>
        <p>see all</p>
    </div>
    <SmallUserProfile v-for="suggest in suggestedUsers" :key="suggest" :id="suggest" class="mb-2"></SmallUserProfile>
  </div>
</template>
<script lang="ts">
import SmallUserProfile from "./SmallUserProfile.vue";
export default {
  component: {
    SmallUserProfile,
  },
  data() {
    return {
        suggestedUsers:[32,31,30,4]
    }
  },
  components: { SmallUserProfile },
};
</script>

<style scoped>
.tags {
  display: flex;
  width: inherit;
  justify-content: space-between;
  margin: 10px 0;
  padding: 0;
}
.tags p{
    background-color: transparent;
    color: rgb(87, 87, 87);
}
</style>
