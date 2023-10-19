<template>
  <div class="d-flex flex-column p-3">
    <div class="img-logo">
      <img src="../assets/insta_logo.png.png" alt="" class="img-fluid" />
    </div>
    <div class="icons d-flex flex-column p-3">
      <div class="d-flex">
        <router-link to="home" class="icon-link">
          <i class="bi bi-house-door-fill"></i> <span class="text">Home</span>
        </router-link>
      </div>
      <div class="d-flex">
        <router-link to="home" class="icon-link">
          <i class="bi bi-house-door-fill"></i> <span class="text">Home</span>
        </router-link>
      </div>
      <div class="d-flex">
        <router-link to="home" class="icon-link">
          <i class="bi bi-house-door-fill"></i> <span class="text">Home</span>
        </router-link>
      </div>
      <div class="d-flex">
        <router-link to="home" class="icon-link">
          <i class="bi bi-house-door-fill"></i> <span class="text">Home</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style scoped>
.icon-link {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  font-size: 1.5vw;
}
.text {
  margin-top: 10px;
}

/* You can define more styles for the icon or text here */
</style>
