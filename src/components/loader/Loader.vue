<template>
  <div class="horizontal-loader"></div>
</template>

<script lang="ts">
export default {
  created(){
    console.log("hello from loader")
  },
};
</script>

<style scoped>
.horizontal-loader {
  position: absolute;
  width: 100%;
  height: 5px;
  background: linear-gradient(to right, rgb(250, 115, 217), #8261f9, #21004a);
  animation: loadani infinite 500ms;
}
@keyframes loadani {
  30% {
    background: linear-gradient(to right, #21004a, rgb(250, 115, 217), #8261f9);
  }
  60% {
    background: linear-gradient(to right, #21004a, rgb(250, 115, 217), #21004a);
  }
  
}
</style>
