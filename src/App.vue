<template>
  <div class="app-dark">
    <div class="d-flex align-items-stretch align-self-stretch">
      <NavCom class="p-2 border-end border-secondary position-fixed" style="flex: 1; height: 100vh;">Child 1</NavCom>
      <div class="p-2" style="flex: 3.3; height: 100vh;margin-left: 15%;">
        <router-view></router-view>
      </div>
      <Loader v-if="isLoading" />
    </div>
  </div>
</template>

<script lang="ts">
import NavCom from './components/NavCom.vue';
import Loader from './components/Loader.vue';
import store from './stores/store';
export default {
  name: "App",
  components: {
    NavCom,
    Loader,
  },
  data() {
    return {
    };
  },
  computed:{
    isLoading(){
      return store.state.showLoder;
    }
  }
};
</script>

<style>
* {
  background-color: black;
  color: #fff;
}
</style>
