<template>
  <div class="app" v-cursor-move>
    <div class="cursor"></div>
    <div class="app-dark">
      <div class="d-flex align-items-stretch align-self-stretch">
        <NavCom
          class="p-2 border-end border-secondary"
          style="height: 100vh"
        ></NavCom>
        <div class="p-2" style="height: 100vh">
          <router-view v-if="!loading"></router-view>
          <div v-if="loading">
            <Loader />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavCom from "./components/common/nav/NavCom.vue";
import Loader from "./components/loader/Loader.vue";
import store from "./stores/store";

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
  beforeCreate() {
    this.loading = true;
  },
  async created() {
    try {
      await Promise.all([
        store.dispatch("fetchUserData"),
        store.dispatch("fetchPostData"),
      ]);
      console.log("Data fetched", store.state);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      this.loading = false;
    }
  },
  directives: {
    cursorMove: {
      mounted(el) {
        const cursor = document.querySelector(".cursor") as HTMLDivElement;
        el.addEventListener("mousemove", function (e:any) {
          cursor.style.left = e.x + "px";
          cursor.style.top = e.y + "px";
        });
      },
    },
  },
};
</script>

<style>
* {
  background-color: black;
  color: #fff;
}
</style>
