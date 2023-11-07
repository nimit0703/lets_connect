<template>
  <div>
    <div class="row">
      <div class="col-md-4" v-for="post in posts" :key="post.id">
        <div class="image-container">
          <img :src="post.img" alt="Image" class="img-fluid" />
          <div class="hover-content">
            <div class="data ">
              <div class="ps-2 pt-2 bg-transparent">
                <i class="bi-heart-fill bg-transparent"></i>
                <span style="margin: 15px 10px" class="bg-transparent"> {{ likes(post) }}</span>
              </div>
              <div class="ps-2 pt-2 bg-transparent">
                <i class="bi bi-chat-fill bg-transparent"></i>
                <span style="margin: 15px 10px" class="bg-transparent"> {{ comments(post) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import store from "../../../stores/store";

export default {
  computed: {
    posts() {
      return store.getters.getPostsById(10);
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
