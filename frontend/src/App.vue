<template>
  <div class="app">
    <Loader />

    <div class="row m-0">
      <div class="d-none d-md-block col-md-2 col-lg-2 col-xl-2 border-end">
        <NavCom />
      </div>
      <div class="col-12 col-md-10 col-lg-10 col-xl-10">
        <router-view v-if="!loading"></router-view>
      </div>
    </div>
    <div class="d-block d-md-none position-fixed bottom-0 ">
      <MobileNavCom />
    </div>
    
  </div>
</template>

<script lang="ts">
import NavCom from "./components/common/nav/NavCom.vue";
import MobileNavCom from "./components/common/nav/MobileNavCom.vue";
import Loader from "./components/loader/Loader.vue";
import store from "./stores/store";

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
    };
  },
  async created() {
    try {
      await Promise.all([
        store.dispatch("fetchUserData"),
        store.dispatch("fetchPostData"),
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.app {
  position: relative;
  min-height: 100vh;
  background-color: black;
  color: #fff;
}

.d-block.d-md-none.position-fixed.bottom-0.w-100 {
  background-color: #f8f9fa; /* Adjust this as needed */
  z-index: 1000; /* Ensure it stays above other elements */
}
</style>
