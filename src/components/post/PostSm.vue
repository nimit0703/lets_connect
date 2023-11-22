<template>
  <div class="image-container" >
    <template v-if="showFullPost">
      <div>
        <PostFull :post="post" @close="closeStory()"></PostFull>
      </div>
    </template>
    <template v-else>
      <img :src="post.img" alt="Image" class="img-fluid"  />
      <div class="hover-content" @click="OpenFullPost()">
        <div class="data">
          <div class="ps-2 pt-2 bg-transparent">
            <i class="bi-heart-fill bg-transparent"></i>
            <span style="margin: 15px 10px" class="bg-transparent">
              {{ likes(post) }}</span
            >
          </div>
          <div class="ps-2 pt-2 bg-transparent">
            <i class="bi bi-chat-fill bg-transparent"></i>
            <span style="margin: 15px 10px" class="bg-transparent">
              {{ comments(post) }}</span
            >
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import Post from "../../classes/Post";
import PostFull from "./PostFull.vue";

export default {
  props: {
    post: {
      type: Post,
      required: true,
    },
  },
  components: {
    PostFull,
  },
  data() {
    return {
      showFullPost: false,
    };
  },
  methods: {
    likes(thisPost: Post) {
      return _.size(thisPost.likes);
    },
    comments(thisPost: Post) {
      return _.size(thisPost.comments);
    },
    OpenFullPost() {
      console.log("clicked");
      this.showFullPost = true;
    },
    closeStory() {
      this.showFullPost = false;
      console.log("closestory called",this.showFullPost);
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
  left: -8px;
  width: 103%;
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
