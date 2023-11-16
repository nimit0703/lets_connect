<template>
  <div class="ps-5 pe-5 pt-5">
    <div class="row">
      <div class="col-md-4" v-for="post in posts" :key="post.id">
        <PostSm :post="post" class="m-1" />
      </div>
    </div>

    <!-- Loader -->
    <div v-if="loading" class="text-center mt-3">
      <div class="spinner-border text-success" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Post from "../classes/Post";
import store from "../stores/store";
import PostSm from "../components/post/PostSm.vue";
import _ from "lodash";

export default {
  components: { PostSm },
  data() {
    return {
      posts: [] as Post[],
      loading: false,
    };
  },
  created() {
    this.loadPosts(); // Initial load
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    async loadPosts() {
      if (!this.loading) {
        this.loading = true;
        // Simulate an API call with a delay
        setTimeout(() => {
          this.posts = [...this.posts, ..._.shuffle(store.state.posts)];
          this.loading = false;
        }, 1500);
      }
    },
    handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 200 && !this.loading) {
        // Load more posts when the user is close to the bottom
        this.loadPosts();
      }
    },
  },
};
</script>

<style scoped>
.row {
  --bs-gutter-x: 0.1rem;
  --bs-gutter-y: 0.1rem;
}
</style>
