<template>
  <div class="app" v-cursor-move>
    <div class="cursor"></div>
    <div class="app-dark">
      <Loader />
      <div
        v-if="$screen.width > 650"
        class="d-flex align-items-stretch align-self-stretch"
      >
        <!-- Apply the no-scroll class to prevent scrolling on NavCom -->
        <NavCom
          class="p-2 border-end border-secondary no-scroll"
          style="height: 100vh"
        ></NavCom>
        <div :class="{ 'space-20': !isSmallNav, 'space-7': isSmallNav }"></div>
        <div class="p-2" style="height: 100vh; width: 100%">
          <router-view v-if="!loading"></router-view>
        </div>
      </div>
      <div v-else class="mobile-view">
        <router-view v-if="!loading"></router-view>
        <MobileNavCom></MobileNavCom>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import NavCom from "./components/common/nav/NavCom.vue";
import MobileNavCom from "./components/common/nav/MobileNavCom.vue";
import Loader from "./components/loader/Loader.vue";
import store from "./stores/store";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    NavCom,
    Loader,
    MobileNavCom,
  },
  data() {
    return {
      loading: true,
      width: 0,
    };
  },
  async beforeCreate() {
    this.loading = true;
    // const response = await axios.get('http://localhost:8080/api/user/allUser'); // Replace with your actual endpoint
    // console.log("backend:",response)
  },
  async created() {
    console.log(
      " _________________________________________________\n",
      "               App has been created              \n",
      "__________________________________________________"
    );
    var userSystemTheme = this.getUserSystemTheme();
    try {
      await Promise.all([
        store.dispatch("fetchUserData"),
        store.dispatch("fetchPostData"),
      ]);
    } catch (error) {
    } finally {
      this.loading = false;
    }
  },
  computed: {
    isSmallNav() {
      return store.state.smallNav;
    },
  },
  methods: {
    width() {
      console.log(this.$screen.width);
    },
    getUserSystemTheme() {
      const theme =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      if (theme) return theme;
      else return "dark";
    },
  },
};
</script>

<style>
* {
  background-color: black;
  color: #fff;
}
.bottom-space {
  display: flex;
  height: 7vh;
}
.nav-z-index {
  z-index: 99;
}
.no-scroll {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
}
.space-20 {
  display: flex;
  margin-right: 20vw;
}
.space-7 {
  display: flex;
  margin-right: 7vw;
}
.router-view-container {
  position: absolute;
  min-height: 90vh;
  margin-bottom: 6.5vh;
}
.router-view-container > router-view {
  overflow-y: auto;
  height: 100%;
}
.mobile-nav {
  position: fixed;
  bottom: 0;
  overflow: hidden;
  margin-left: 0;
  padding: 0;
}
</style>
