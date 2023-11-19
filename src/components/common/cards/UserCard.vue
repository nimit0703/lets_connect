<template>
  <div>
    <div class="d-flex align-items-center p-1 mycard" @click="openChat()">
      <div class="img">
        <img :src="user.profile_img" alt="" />
      </div>
      <div class="data d-flex flex-column">
        <p> {{ user.userName }}</p>
        <p> send reel from {{user.userName }}</p>
      </div>
    </div>
  </div>
</template>

<style scopped>

.mycard{
  background-color: transparent;
}
.mycard:hover{
  background-color: rgba(62, 62, 62, 0.482);
}
.img img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.data {
  margin-left: 8px;
  background-color: transparent;
}
.data p {
  background-color: transparent;
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  width: 135px;
}
</style>
<script lang="ts">
import store from "../../../stores/store";
import User from "../../../classes/User";

export default {
  props: {
    user: {
      type: User,
      required: true,
    },
  },
  methods: {
    openChat(){
      store.commit("toggleIsChatOpen")
      store.commit("setChatData", this.user)
    }
  },
};
</script>
