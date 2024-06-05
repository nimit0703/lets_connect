<template>
  <div>
    <div class="d-flex align-items-center">
      <div class="img">
        <img :src="userData.profile_img" alt="story Image" />
      </div>
      <div class="data d-flex flex-column">
        <p>{{ userData.userName }}</p>
        <p>{{ (userData.name)? userData.name: userData.userName }}</p>
      </div>
      <div class="option">
        <a href="#" v-if="userData.uid === myid">switch</a>
        <a href="#" v-else @click=followUser()>Follow</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import User from "../../classes/User";
import store from "../../stores/store";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      userData:{} as any,
      myid:store.state.thisUser.uid,
    };
  },
  methods: {
    followUser(){
      // add follow logic here
    }
  },
  mounted(){
    this.userData = store.getters.getUserById(this.id) as User

  }
};
</script>

<style scoped>
.img img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.data{
    margin-left: 8px;
}
.data p{
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
    width: 135px;
}
.option a{
    text-decoration: none;
}
</style>
