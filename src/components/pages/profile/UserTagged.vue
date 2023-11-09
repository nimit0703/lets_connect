<template>
  <div>
    <div class="row">
      <div class="col-md-4" v-for="post in posts" :key="post.id">
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

.image-container {
  position: relative;
  overflow: hidden;
}

.hover-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  transition: opacity 0.7s;
}

.image-container:hover .hover-content {
  display: flex;
  background-color: transparent;
}

.data {
  height: inherit;
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.272);
}

i {
  font-size: 24px;
  background: transparent;
}
</style>
