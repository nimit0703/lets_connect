<template>
  <div class="sidedrawer">
    <div class="img-logo">
      <router-link to="/home" class="icon-link">
        <i class="bi bi-instagram" style="font-size: 2rem"></i>
      </router-link>
    </div>
    <div class="icons d-flex flex-column options">
      <div class="d-flex" @click="closeSidebar">
        <router-link to="/home" class="icon-link">
          <i class="bi bi-house-door-fill"></i>
        </router-link>
      </div>
      <div class="d-flex">
        <router-link to="search" class="icon-link">
          <i class="bi bi-search"></i>
        </router-link>
      </div>
      <div class="d-flex" @click="closeSidebar">
        <router-link to="explore" class="icon-link">
          <i class="bi bi-compass"></i>
        </router-link>
      </div>
      <div class="d-flex" @click="closeSidebar">
        <router-link to="home" class="icon-link">
          <i class="bi bi-chat-dots"></i>
        </router-link>
      </div>
      <div class="d-flex" @click="closeSidebar">
        <router-link to="home" class="icon-link">
          <i class="bi bi-heart"></i>
        </router-link>
      </div>
      <div class="d-flex" @click="closeSidebar">
        <router-link to="home" class="icon-link">
          <i class="bi bi-plus-square"></i>
        </router-link>
      </div>
      <div class="d-flex" @click="closeSidebar">
        <router-link
          :to="{
            name: 'userProfile',
            params: { username: `${user.userName}` },
          }"
          class="icon-link"
        >
          <img :src="user.profile_img" alt="" class="user-profile-nav" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import User from "../../../classes/User";
import store from "../../../stores/store";

export default {
  data() {
    return {
      user: store.state.thisUser as User,
    };
  },
  methods: {
    closeSidebar() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.sidedrawer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 2rem 1.5rem;
}
.icon-link {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw;
  margin-bottom: 1.8rem;
  padding: 0;
}
.icon-link i:hover {
  color: rgb(54, 54, 54);
}

.options {
  margin-top: 3rem;
}
.icon-link i {
  font-size: 2.5vw;
}

.user-profile-nav {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: 25px;
}
</style>
