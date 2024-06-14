<template>
  <div>
    <div
      class="border border-secondary p-0"
    >
      <div class="d-flex flex-column">
        <div class="user p-2" style="flex: 1">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex">
              <div class="img-fluid">
                <img
                  :src="user.profile_img"
                  alt=""
                  class="user-profile-post border border-warning"
                />
              </div>
              <div class="d-flex flex-column">
                <span>{{ user.userName }}</span>
                <span class="fs-6">{{ user.name }}</span>
              </div>
            </div>
            <i class="bi bi-three-dots pe-2 fs-4"></i>
          </div>
        </div>
        <div class="img-fluid mt-0">
          <img :src="thisPost.img" alt="" class="mx-auto d-block img-fluid" />
        </div>
        <div class="post-interaction d-flex flex-column" style="flex: 3">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex">
              <i
                class="bi pe-2 ps-2 fs-4 icon"
                @mouseenter="toggleHover(true)"
                @mouseleave="toggleHover(false)"
                @click="toggleLike"
                :class="{
                  'bi-heart-fill': isLiked,
                  'text-danger': isLiked,
                  'bi-heart': !isLiked,
                }"
              ></i>
              <i
                class="bi bi-chat pe-2 ps-2 fs-4 icon"
                @mouseenter="toggleHover(true)"
                @mouseleave="toggleHover(false)"
              ></i>
              <i
                class="bi bi-send pe-2 ps-2 fs-4 icon"
                @mouseenter="toggleHover(true)"
                @mouseleave="toggleHover(false)"
              ></i>
            </div>
            <i class="bi bi-bookmark pe-2 fs-4"></i>
          </div>
          <div class="likes-count ps-2">
            <span>{{ likesSize }} likes</span>
          </div>
          <div class="likes-count ps-2">
            <span>{{ user.userName }} {{ thisPost.caption }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import User from "../../../classes/User";
import store from "../../../stores/store";
import _ from "lodash";
import Post from "../../../classes/Post";

export default {
  name: "PostCard",
  data() {
    return {
      user: {} as User,
      isHovered: false,
      isLiked: false,
    };
  },
  props: {
    post: Post,
  },
  created() {
    this.user = store.getters.getUserById(this.post?.belongsTo);
  },
  methods: {
    toggleHover(hovered: boolean) {
      this.isHovered = hovered;
    },
    toggleLike() {
      this.isLiked = !this.isLiked;
      if (this.isLiked) {
        store.commit("likedPost", this.post?.id);
      } else {
        store.commit("dislikedPost", this.post?.id);
      }
    },
  },
  computed: {
    thisPost() {
      return store.getters.getPostById(this.post?.id);
    },
    likesSize() {
      return _.size(this.thisPost.likes);
    },
  },
};
</script>

<style scoped>
@media (max-width: 650px) {
  .post {
    display: flex;
    flex-direction: column; /* Adjust layout for smaller screens */
    width: 500px; /* Set width to 500px for smaller screens */
    height: auto; /* Adjust height for smaller screens */
  }

  .user-profile-post {
    margin: 10px auto; /* Center the user profile image on smaller screens */
  }

  .post-img{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .post-img img{
    width: 520px;
    height: 520px;
  }
}
.post {
  display: flex;
  width: 542px;
  height: 760px;
}
.user-profile-post {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-top: 11px;
  margin-right: 10px;
}
.fs-6 {
  font-size: 0.9rem !important;
}

.icon:hover {
  color: #808080; /* Change the color to your desired hover color */
}
</style>
