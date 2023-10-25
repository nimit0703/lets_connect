<template>
  <div>
    <div class="d-flex align-items-stretch m-0">
      <div class="d-flex flex-column" style="flex: 4">
        <div class="storySection postSection d-flex flex-column ps-5 m-stories">
          <StoriesCom></StoriesCom>
        </div>
        <div class="postSection d-flex flex-column overflow-hidden">
          <PostCard
            v-for="post in posts"
            :post="post"
            :key="post.id"
            class="mt-3"
          ></PostCard>
        </div>
      </div>
      <div class="right-sec border-start border-secondary" style="flex: 1">
        <h1>sideSection</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "../stores/store";
import PostCard from "../components/PostCard.vue";
import StoriesCom from "../components/StoriesCom.vue";
export default {
  name: "HomeView",
  components: {
    PostCard,
    StoriesCom,
  },
  data() {
    return {
      posts: store.getters.getPostsByFollowing(),
    };
  },
  created() {
    console.log(this.posts);
  },
  mounted(){

    console.log("homeview mounted");
    store.state.showLoder =false;
  },
  beforeUnmount() {
    console.log("homeview unmounted");
    store.state.showLoder =true
  },
};
</script>
<style scoped>
.m-stories {
  margin: 10px 6% !important;
}
</style>
