<template>
  <div class="container d-flex justify-content-center align-items-stretch mt-4">
    <div class="profile-img d-flex justify-content-center">
      <img :src="user.profile_img" alt="" class="img-fluid" />
    </div>
    <div class="profile-data d-flex flex-column">
      <div class="d-flex">
        <span class="fs-5">{{ user.userName }}</span>
        <button type="button" class="btn btn-secondary">Edit profile</button>
        <button type="button" class="btn btn-secondary">View Archive</button>
        <i class="bi bi-gear-wide mt-1 ml-3"></i>
      </div>
      <div class="d-flex mt-3">
        <span class="pe-5">{{ myPostsCount }} posts</span>
        <span class="pe-5">{{ following }} Following</span>
        <span class="pe-5">{{ followers }} Followers</span>
      </div>
      <div class="d-flex mt-3">
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
      <div class="d-flex mt-1">
        <i class="bi bi-link-45deg"></i>
        <a href="#" class=" link-underline-dark link-secondary link-offset-2 pe-3" style="text-decoration: none;">nimit0703.github.io/nimit </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import store from "../stores/store";

export default {
  computed: {
    user() {
      return store.state.thisUser;
    },
    followers() {
      return _.size(this.user.followers);
    },
    following() {
      return _.size(this.user.following);
    },
    myPostsCount() {
      return _.size(store.getters.getMypost);
    },
  },
};
</script>

<style scoped>
.profile-img {
  width: 300px;
  height: 300px;
  /* border-radius: 50%; */
}
.profile-img img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.profile-data {
  width: 600px;
  height: 300px;
}
.btn {
  --bs-btn-padding-x: 1.75rem;
  --bs-btn-padding-y: 0.1rem;
  margin: 0 7px;
}
</style>
