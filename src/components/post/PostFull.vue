<template>
  <div class="fixed-bg">
    <div class="full-post-box">
      <div class="post-sec">
          <img :src="post.img" alt="" class="img-fluid">
      </div>
      <div class="comment-sec"></div>
    </div>
    <button @click="closeModal" class="cancel-button">
      <i class="bi bi-x" style="font-size: 1.5rem"></i>
    </button>
  </div>
</template>

<script lang="ts">
import Post from "../../classes/Post";

export default {
  name: "PostFull",
  props: {
    post: {
      type: Post,
      required: true,
    },
  },
  created() {
    console.log("FullPost Created", this.post);
    document.body.style.overflow = "hidden";
  },
  beforeDestroy() {
    console.log("FullPost destroyed", this.post);
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
  z-index: 999;
  overflow-y: hidden;
}
.full-post-box {
  width: 75vw;
  background-color: rgb(0, 0, 0);
  height: 90vh;
  box-shadow: 0 0 10px rgba(235, 235, 235, 0.2); /* Adjust the values as needed */
  display: flex;
}
.post-sec {
  flex: 1;
}
.comment-sec {
  flex: 1;
}
.post-sec img {
  width: 100%; /* Take up full width of parent */
  height: 100%; /* Take up full height of parent */
  object-fit: cover; /* Ensure the image covers the entire container */
}
.cancel-button {
  position: absolute;
  right: 10vw;
  top: 5vh;
  background: transparent;
  border: none;
}
</style>
