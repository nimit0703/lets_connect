<template>
  <div class="app" v-cursor-move>
    <div class="cursor"></div>
    <div class="app-dark">
      <div class="d-flex align-items-stretch align-self-stretch">
        <!-- Apply the no-scroll class to prevent scrolling on NavCom -->
        <NavCom class="p-2 border-end border-secondary no-scroll" style="height: 100vh"></NavCom>
        <div class="space"></div>
        <div class="p-2" style="height: 100vh; ">
          <router-view v-if="!loading"></router-view>
          <div v-if="loading">
            <Loader />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import NavCom from "./components/common/nav/NavCom.vue";
import Loader from "./components/loader/Loader.vue";
import store from "./stores/store";
import _ from "lodash";
import User from "./classes/User";

export default {
  name: "App",
  components: {
    NavCom,
    Loader,
  },
  data() {
    return {
      loading: true,
      thisUserId:1
    };
  },
  async beforeCreate() {
    this.loading = true;
    
  },
  async created() {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/${this.thisUserId}`); 
      store.commit("setThisUser",response.data)
      console.log("backend:",response)
      this.setFollowingAndFollowers();
      
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      this.loading = false;
    }
  },
  directives: {
    cursorMove: {
      mounted(el) {
        const cursor = document.querySelector(".cursor") as HTMLDivElement;
        el.addEventListener("mousemove", function (e:any) {
          cursor.style.left = e.x + "px";
          cursor.style.top = e.y + "px";
        });
      },
    },
  },
  methods: {
    async getUserData(userId:number) {
      const response = await axios.get(`http://localhost:8080/api/user/${userId}`);
      return response.data;
    },

    async fetchUsers(userIds:number[]) {
      const userPromises = userIds.map(this.getUserData);
      return Promise.all(userPromises);
    },

    async setFollowingAndFollowers() {
      const user = this.$store.state.thisUser;

      try {
        const followingArray = JSON.parse(user.following);
        const followerArray = JSON.parse(user.followers);

        const followers = await this.fetchUsers(followerArray);
        const following = await this.fetchUsers(followingArray);

        store.commit("setMyFollowing",following);
        store.commit("setMyFollowers",followers);
      } catch (error) {
        console.log(error);
        
      }
    },
  },
};
</script>

<style>
* {
  background-color: black;
  color: #fff;
}
.no-scroll{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
}
.space{
  display: flex;
  margin-right: 20vw;
}
</style>
