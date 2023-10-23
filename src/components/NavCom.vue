<template>
  <div class="">
    <div class="img-logo">
      <img
        src="../assets/insta_logo.png.png"
        alt=""
        class="img-fluid insta-logo"
      />
    </div>
    <div class="icons d-flex flex-column ps-4">
      <div class="d-flex">
        <router-link to="/home" class="icon-link">
          <i class="bi bi-house-door-fill"></i> <span class="text">Home</span>
        </router-link>
      </div>
      <div class="d-flex">
        <router-link to="search" class="icon-link">
          <i class="bi bi-search"></i> <span class="text">Search</span>
        </router-link>
      </div>
      <div class="d-flex">
        <router-link to="home" class="icon-link">
          <i class="bi bi-compass"></i><span class="text">Explore</span>
        </router-link>
      </div>
      <div class="d-flex">
        <router-link to="home" class="icon-link">
          <i class="bi bi-chat-dots"></i> <span class="text">Message</span>
        </router-link>
      </div>
      <div class="d-flex">
        <router-link to="home" class="icon-link">
          <i class="bi bi-heart"></i> <span class="text">Notification</span>
        </router-link>
      </div>
      <div class="d-flex">
        <router-link to="home" class="icon-link">
          <i class="bi bi-plus-square"></i> <span class="text">Create</span>
        </router-link>
      </div>
      <div class="d-flex">
        <router-link :to="{name:'userProfile',params:{username:`${user.userName}`}}" class="icon-link">
          <img :src="user.profile_img" alt="" class="user-profile-nav" />
          <span class="text">Profile</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import User from "../interfaces/User";
import store from "../stores/store";

export default {
  data() {
    return {
      user: store.state.thisUser as User,
      
    }
  },
};
</script>
<style scoped>
.icon-link {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  font-size: 1.2vw;
  margin-bottom: 5px;
}

.icon-link i {
  font-size: 2vw;
}
.text {
  margin-top: 25px;
  margin-left: 5px;
}
.insta-logo {
  width: 200px;
  margin: 0;
}
.user-profile-nav {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: 25px;
}

/* You can define more styles for the icon or text here */
</style>
