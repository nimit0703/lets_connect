<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col col-sm-12 col-lg-9 d-flex flex-column align-items-center">
        <div class="">
          <StoriesCom></StoriesCom>
        </div>
        <div class="posts-container">
          <PostCard
            v-for="post in posts"
            :post="post"
            :key="post.id"
            class="mt-3"
          ></PostCard>
        </div>
      </div>
      <div v-if="$screen.width > 650" class="col col-lg-3 border-start border-secondary">
        <HomeSideSection />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "../stores/store";
import PostCard from "../components/common/cards/PostCard.vue";
import StoriesCom from "../components/story/StoriesCom.vue";
import HomeSideSection from "../components/pages/home/HomeSideSection.vue";
import Post from "../classes/Post";

export default {
  name: "HomeView",
  components: {
    PostCard,
    StoriesCom,
    HomeSideSection,
  },
  data() {
    return {
      posts: [] as Post[],
    };
  },
  created() {
    this.posts = store.getters.getPostsByFollowing;
    store.state.showLoder = true;
  },
  mounted() {
    setTimeout(() => {
      store.state.showLoder = false;
    }, 200);
  },
};
</script>

<style scoped>
.m-stories {
  margin: 10px 0 !important;
}
</style>
