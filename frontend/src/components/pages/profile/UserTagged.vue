<template>
  <div>
    <div class="row">
      <div class="col-4" v-for="post in posts" :key="post.id">
        <PostSm :post="post"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import store from "../../../stores/store";
import Post from "../../../classes/Post";
import PostSm from "../../post/PostSm.vue";
export default {
  components: {
    PostSm,
  },
  computed: {
    posts() {
      return _.shuffle(store.getters.getPostsById(4));
    },
  },
  methods: {
    likes(thisPost: Post) {
      return _.size(thisPost.likes);
    },
    comments(thisPost: Post) {
      return _.size(thisPost.comments);
    },
  },
};
</script>

<style scoped>
.row {
  --bs-gutter-x: 0.5rem;
  --bs-gutter-y: 0.5rem;
}
</style>
