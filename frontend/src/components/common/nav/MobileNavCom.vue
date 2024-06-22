<template>
  <div>
    <div class="nav-loc">
      <div class="d-flex">
        <router-link to="/home" class="icon-link">
          <i class="bi bi-house-door-fill"></i>
        </router-link>
      </div>
      <div class="d-flex">
        <router-link to="search" class="icon-link">
          <i class="bi bi-search"></i>
        </router-link>
      </div>
      <div class="d-flex">
        <router-link to="home" class="icon-link">
          <i class="bi bi-plus-square"></i>
        </router-link>
      </div>
      <div class="d-flex">
        <router-link to="home" class="icon-link">
          <i class="bi bi-heart"></i>
        </router-link>
      </div>
      <div class="d-flex img">
        <router-link
          :to="{
            name: 'userProfile',
            params: { username: `${user.userName}` },
          }"
          class=""
        >
          <img :src="user.profile_img" alt="" class="user-profile-nav" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-loc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 6.5vh;
  position: fixed;
  bottom: -2px;
  left: 0;
  right: 0;
  border-top: 0.1px solid gray;
  overflow: hidden;
  padding: 3%;
  background-color: black;
  color: white;
}
.user-profile-nav {
  margin-top: 0vh;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.img {
  margin-top: 1vh;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.icon-link i {
  font-size: 1.5rem;
  color: white;
}

@media (max-width: 768px) {
  .icon-link i {
    font-size: 1rem; /* Adjust the icon size for smaller screens */
  }
}
</style>

<script lang="ts">
import User from "@/interfaces/User";
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
      store.commit("toggleSmallNav");
    },
  },
};
</script>
