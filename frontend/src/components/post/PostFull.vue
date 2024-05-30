<template>
  <div class="fixed-bg">
    <div class="full-post-box">
      <div class="post-sec">
        <img :src="post.img" alt="" class="img-fluid" />
      </div>
      <div class="comment-sec">
        <div class="caption">
          <div class="d-flex align-items-center m-3">
            <div class="img-fluid">
              <img
                :src="user.profile_img"
                alt=""
                class="user-profile-post border border-warning"
              />
            </div>
            <div class="d-flex">
              <span>{{ user.userName }} : </span>
            </div>
            <div class="d-flex ps-2">
              <span class="text-white-50">Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
        </div>
        <div class="comment-sec">
          <CommentsCard :allComments="allComments"></CommentsCard>
        </div>
      </div>
    </div>
    <button @click="closeModal" class="cancel-button">
      <i class="bi bi-x" style="font-size: 1.5rem"></i>
    </button>
  </div>
</template>

<script lang="ts">
import Comment from "../../classes/Comment";
import store from "../..//stores/store";
import Post from "../../classes/Post";
import User from "../../classes/User";
import CommentsCard from "../common/cards/CommentsCard.vue";

export default {
  name: "PostFull",
  props: {
    post: {
      type: Post,
      required: true,
    },
  },
  data() {
    return {
      user: store.state.thisUser as User,
      allComments: this.post.comments as unknown as Comment[],
    };
  },
  components: {
    CommentsCard,
  },
  created() {
    document.body.style.overflow = "hidden";
  },
  unmounted() {
    document.body.style.overflow = "";
  },
  
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.fixed-bg {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(8, 8, 8, 0.297);
  justify-content: center;
  align-items: center;
  z-index: 130;
  overflow-y: hidden;
  backdrop-filter: blur(10px); /* Adjust the blur value as needed */

}
.full-post-box {
  width: 75vw;
  background-color: rgb(0, 0, 0);
  height: 90vh;
  box-shadow: 0 0 10px rgba(235, 235, 235, 0.2); 
  display: flex;
}
.post-sec {
  flex: 1;
}
.comment-sec {
  flex: 1;
}
.post-sec img {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}
.cancel-button {
  position: absolute;
  right: 10vw;
  top: 5vh;
  background: transparent;
  border: none;
}
.user-profile-post {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-top: 11px;
  margin-right: 10px;
}
</style>
