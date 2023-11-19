<template>
  <div class="messages-page">
    <div class="d-flex">
      <div class="user-list">
        <div class="head">
          <div class="headings">
            <h4 class="font-weight-bold">
              nimit.trevadiya2 <i class="bi bi-chevron-down"></i>
            </h4>
            <svg
              aria-label="New message"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>New message</title>
              <path
                d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="16.848"
                x2="20.076"
                y1="3.924"
                y2="7.153"
              ></line>
            </svg>
          </div>
          <div class="headings">
            <h5 class="font-weight-bold">Messages</h5>
            <h6 class="text-secondary">requests</h6>
          </div>
        </div>
        <div class="users">
          <div
            class="user-block"
            v-for="(user, index) in following"
            :key="index"
          >
            <UserCard :user="(user as User)"></UserCard>
          </div>
        </div>
      </div>
      <div class="chat-sec">
        <template v-if="isChatOpen">
          <Chat></Chat>
        </template>
        <template v-else>
          <NoChat></NoChat>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "../stores/store";
import UserCard from "../components/common/cards/UserCard.vue";
import User from "../classes/User";
import NoChat from "../components/chat/NoChat.vue";
import Chat from "../components/chat/Chat.vue";
export default {
  components: {
    UserCard,
    NoChat,
    Chat
  },
  data() {
    return {
      following: store.getters.getMyFollowing(),
    };
    
  },
  computed:{
    isChatOpen(){
      return store.getters.getIsChatOpen();
    }
  }
};
</script>

<style scoped>
.messages-page {
  height: 100vh; /* Full height of the viewport */
  width: 100%;
  height: 100%;
}
.head{
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 0vh 2.5vw
}

.d-flex {
  display: flex;
  width: 100%;
  height: 100%;
}
.users {
  
  padding-top: 14vh; /* Adjust to accommodate the fixed header */
  padding-left: 2vw;
  overflow-y: auto; /* Enable vertical scrolling for the user list */
  height: calc(100vh - 8vh); /* Adjust the height to fill the remaining space */
}
.users::-webkit-scrollbar {
  width: 0;
}
.headings {
  display: flex;
  justify-content: space-between;
  width: 120%;
}

.user-list {
  flex: 1;
  height: 100%;
  border-right: 0.1px solid rgb(63, 63, 63);
  display: flex;
  flex-direction: column;
  padding: 3vh 0vw;
}
.chat-sec {
  flex: 2.7;
  height: 100%;
}
</style>
