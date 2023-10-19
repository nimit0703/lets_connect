<template>
  <div class="app-dark">
    <div class="d-flex">
      <NavCom class="p-2 border-end" style="flex: 1;height: 100vh;">Child 1</NavCom>
      <div class="p-2  " style="flex: 2.3;height: 100vh;">Child 2</div>
      <div class="p-2  " style="flex: 1;height: 100vh;">Child 3</div>
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
