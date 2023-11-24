<template>
  <div class="app" v-cursor-move>
    <div class="cursor"></div>
    <div class="app-dark">
      <Loader/>
      <div class="d-flex align-items-stretch align-self-stretch">
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
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import NavCom from "./components/common/nav/NavCom.vue";
import Loader from "./components/loader/Loader.vue";
import store from "./stores/store";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    NavCom,
    Loader,
  },
  data() {
    return {
      loading: true,
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
  directives: {
    cursorMove: {
      mounted(el) {
        const cursor = document.querySelector(".cursor") as HTMLDivElement;
        el.addEventListener("mousemove", function (e: any) {
          cursor.style.left = e.x + "px";
          cursor.style.top = e.y + "px";
        });
      },
    },
  },
  methods: {
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
.no-scroll {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
}
.space-20 {
  display: flex;
  margin-right: 20vw;
}
.space-7 {
  display: flex;
  margin-right: 7vw;
}
</style>
