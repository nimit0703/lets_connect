<template>
  <div class="centered-component">
    <!-- Cancel button in the top-right corner -->
    <button @click="closeModal" class="cancel-button">
      <i class="bi bi-x"></i>
    </button>
    <div class="title">
      <p class="text-center p-2 border-bottom text">{{ title }}</p>
    </div>
    <div class="search">
      <i class="bi bi-search ms-2"></i>
      <input
        v-model="searchTerm"
        type="text"
        class="search"
        placeholder="Search by username"
      />
    </div>
    <div class="list-container">
      <div class="list-group">
        <button
          type="button"
          class="list-group-item list-group-item-action"
          v-for="userId in filteredList"
        >
          <div class="d-flex justify-content-between bg-transparent">
            <div class="d-flex bg-transparent">
              <img :src="user(userId).profile_img" alt="" />
              <h6 class="ps-3 bg-transparent pt-2">
                {{ user(userId).userName }}
              </h6>
            </div>
            <button class="btn btn-sm btn-secondary">{{ option}}</button>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "../stores/store";

export default {
  data() {
    return {
      searchTerm: "", // Data property for the search term
      option: this.title==="Following"?'remove':this.title,
    };
  },
  computed: {
    user() {
      return (userId: number) => {
        return store.getters.getUserById(userId);
      };
    },
    filteredList() {
      if (!this.searchTerm) {
        return this.list;
      }
      const lowerSearchTerm = this.searchTerm.toLowerCase();
      return this.list.filter((userId: number) => {
        const userName = this.user(userId).userName.toLowerCase();
        return userName.includes(lowerSearchTerm);
      });
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
  props: ["list", "title"],
};
</script>

<style scoped>
.centered-component {
  width: 400px;
  height: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #424242;
  border: 1px solid #000;
  z-index: 999;
  overflow: hidden; /* Hidden overflow to prevent the whole modal from scrolling */
}
.list-container {
  height: 100%; /* Set a fixed height for the container */
  overflow-y: auto; /* Enable vertical scrolling for the list */
  background: transparent;
}
.list-group-item {
  background-color: #424242;
  border: #000;
  color: #fff;
}
.list-group-item:hover {
  background-color: #2c2c2c;
  color: #fff;
}
.search,
.text {
  background: #424242;
  border: none;
}
input {
  border: none;
  outline: none;
  padding-left: 20px;
}
i {
  background: transparent;
}
img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.cancel-button {
  position: absolute;
  top: 10px; /* Adjust this value to control the vertical position */
  right: 10px; /* Adjust this value to control the horizontal position */
  background: none;
  border: none;
  cursor: pointer;
}
</style>
