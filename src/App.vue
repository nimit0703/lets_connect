<template>
  <div class="app-dark">
    <div class="d-flex align-items-stretch align-self-stretch">
      <NavCom
        class="p-2 border-end border-secondary position-fixed"
        style="flex: 1; height: 100vh"
      >Child 1</NavCom>
      <div class="p-2" style="flex: 3.3; height: 100vh; margin-left: 15%">
        <router-view v-if="!loading"></router-view>
        <div v-if="loading">
          <Loader />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavCom from "./components/NavCom.vue";
import Loader from "./components/Loader.vue";
import store from "./stores/store";

export default {
  name: "App",
  components: {
    NavCom,
    Loader,
  },
  data() {
    return {
      loading: true, // Initialize loading state to true
    };
  },
  beforeCreate() {
    this.loading = true; // Set loading state to true before component is created
  },
  created() {
    console.log("app created", store.state);

    store.dispatch("fetchUserData")
      .then(() => {
        console.log("data fetch", store.state);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        this.loading = false; // Set loading state to false when data fetching is complete
      });
  },
};
</script>

<style>
* {
  background-color: black;
  color: #fff;
}
</style>
