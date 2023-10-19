<template>
  <div>
    <div class="d-flex align-items-stretch">
      <div class="d-flex flex-column" style="flex: 2.3">
        <div class="storySection"></div>
        <div class="postSection d-flex flex-column">
          <PostCard v-for="post in posts" :post="post" :key="post.id" class="mt-3"></PostCard>
        </div>
      </div>
      <div class="right-sec border-start border-secondary" style="flex: 1">
        <!-- <h1>sideSection</h1> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "../stores/store";
import PostCard from "../components/PostCard.vue";
export default {
  name: "HomeView",
  components: {
    PostCard,
  },
  data() {
    return {
      posts: store.getters.getPostsByFollowing(),
    };
  },
  created() {
    console.log(this.posts);
  },
};
</script>
