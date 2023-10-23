<template>
  <div class="fixed-bg">
    <div class="left-story bg-transparent p-4"><i class="bi bi-caret-left-fill bg-transparent"></i></div>
    <div class="indicudual-story-container shadow">
        <div class="story">
            <div class="profil-data">
                <img src="../assets/image-1.png" alt="" >
                <p>username</p>
            </div>
            <img src="../assets/image-1.png" alt="" class="main-img">
        </div>
    </div>
    <div class="right-story bg-transparent p-4"><i class="bi bi-caret-right-fill bg-transparent"></i></div>
  </div>
</template>

<script lang="ts">
export default {
    methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.fixed-bg {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgb(8, 8, 8);
  justify-content: center;
  align-items: center;
  /* z-index: 999; */
  overflow-y: hidden;
}
.indicudual-story-container{
    width: 30vw;
    height: 90vh;
    background-color: antiquewhite;
}
.story {
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}
.story .main-img{
    width: inherit;
    height: inherit;
    max-width: 30vw;
    max-height: 90vh;
    object-fit: cover; 
}
.profil-data {
    position: absolute;
    top: 6vh;
    left: 36vw;
    background-color: transparent;
    display: flex;
}

.profil-data p {
    background: transparent;
    padding-left: 10px;
    margin-top: 5px;
}
.profil-data img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 6vh;
    left: 36vw;
    border: 2px solid orange;

}
</style>
