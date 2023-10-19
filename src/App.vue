<template>
  <div class="app-dark">
    <div class="d-flex">
      <NavCom class="p-2 border-end" style="flex: 1;height: 100vh;">Child 1</NavCom>
      <div class="p-2  " style="flex: 3.3;height: 100vh;">
      <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavCom from './components/NavCom.vue';
export default {
  name: "App",
  components:{
    NavCom,
  }
};
</script>
<style>
.app-dark{
  background-color: black;
  color: #fff;
}
</style>
