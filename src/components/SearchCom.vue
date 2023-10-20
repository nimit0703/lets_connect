<template>
    <div class="search-container">
      <div class="search">
        <input
          v-model="searchTerm"
          type="text"
          class="search-input"
          placeholder="Search by username"
        />
        <i class="bi bi-search ms-2"></i>
      </div>
      <div class="list-container mt-2" v-if="showUsers">
        <div class="list-group">
          <button
            type="button"
            class="list-group-item list-group-item-action"
            v-for="user in filteredList"
            :key="user.uid"
          >
            <div class="d-flex justify-content-between bg-transparent">
              <div class="d-flex bg-transparent w-100">
                <img
                  :src="user.profile_img"
                  alt="Profile"
                  class="profile-image"
                />
                <h6 class="user-name bg-transparent">{{ user.userName }}</h6>
              </div>
              <button
                v-show="isFollowing(user.uid)"
                class="btn btn-sm unfollow-btn"
                @click="unfollow(user.uid)"
              >
                Unfollow
              </button>
              <button
                v-show="!isFollowing(user.uid)"
                class="btn btn-sm follow-btn"
                @click="follow(user.uid)"
              >
                Follow
              </button>
            </div>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import User from "@/classes/User";
  import store from "../stores/store";
  
  export default {
    data() {
      return {
        searchTerm: "",
        showUsers: false, // Initially hide the user list
      };
    },
    computed: {
      allusers() {
        return store.state.users;
      },
      filteredList() {
        if (!this.searchTerm) {
          return [];
        }
        const lowerSearchTerm = this.searchTerm.toLowerCase();
        return this.allusers.filter((user: User) => {
          const userName = user.userName.toLowerCase();
          return userName.includes(lowerSearchTerm);
        });
        
      },
      
    },
    methods: {
      unfollow(userId: number) {
        store.commit('unfollow',userId)
      },
      follow(userId:number){
        store.commit('follow',userId)
      },
      isFollowing(userId: number):boolean {
        // Check if the current user is following the user
        return store.state.thisUser.following.some((followedId) => followedId === userId);
      },
      
    },
    props: ["title"],
    watch: {
      searchTerm(newSearchTerm) {
        this.showUsers = !!newSearchTerm;
      },
    },
  };
  </script>

<style scoped>
.follow-btn{
    background-color: rgba(147, 183, 255, 0.621);
    color: #fff;
}
.unfollow-btn{
    background-color: rgba(199, 95, 196, 0.543);
    color: #fff;
}
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 20px;
}

.search {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
}

.list-container {
  height: 100%;
  overflow-y: auto;
  background: transparent;
}

.list-group-item {
  background-color: #242424;
  border: none;
  color: #fff;
  margin-bottom: 10px;
  background-color: transparent;
  width: 35vw;
}
.list-group-item:hover {
  background-color: #9a9a9a30;
}

.user-name {
  margin-left: 10px;
  padding-top: 5px;
}

.profile-image {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

</style>
