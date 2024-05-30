<template>
  <div class="container-x">
    <div class="user-profile">
      <div class="d-flex">
        <div class="img">
          <img :src="other.profile_img" alt="" />
        </div>
        <div class="name">
          <h4>{{ other.userName }}</h4>
        </div>
        <div class="d-flex icons-container">
          <div class="icon bi bi-telephone"></div>
          <div class="icon bi bi-camera-video"></div>
          <div class="icon bi bi-info-circle"></div>
        </div>
      </div>
    </div>
    <template v-if="connection_ready">
      <div class="chat-sec">
        <div class="messages" id="messages">
          <div class="message-container">
            <h1 class="error" v-if="connection_error">Connection error!</h1>
            <div
              v-for="(m, idx) in messages"
              :key="'m-' + idx"
              style="clear: both"
            >
              <div
                :class="{
                  'msg-from-me': m.from == 'me',
                  'msg-from-other': m.from == 'other',
                }"
              >
                <template v-if="m.from === 'me'">
                  <div class="right-side">
                    {{ m.message }}
                  </div>
                </template>
                <template v-else>
                  <div class="left-side">
                    <img :src="other.profile_img" alt="">
                    {{ m.message }}
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>

        <div class="send-zone">
          <input
            v-model="new_message"
            type="text"
            placeholder="Type a message"
            @keyup.enter="send_message"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.left-side img{
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.right-side{
  margin-left:62vw;
}
.left-side{
  margin-left: 2vw;
}
.send-zone {
  display: flex;
  width: 100%;
  padding: 1vw 5vw;
}
.send-zone input {
  width: 65%;
  height: 8vh;
  border: 0.1px solid #6a6a6a;
  border-radius: 20px;
  padding: 1vw;
}
.icon {
  font-size: 1.7vw;
  margin-left: 1vw;
}
.name {
  margin-left: 1vw;
  margin-top: 8px;
}
.img img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.user-profile {
  display: flex;
  position: fixed;
  width: 100%;
  height: 10vh;
  top: 0;
  border-bottom: 0.1px solid rgb(78, 78, 78);
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  padding: 0 2vw;
}

.icons-container {
  display: flex;
  align-items: center; /* Align icons vertically centered */
  margin-left: 42vw;
}

.chat-sec {
  margin-top: 10vh;
  position: fixed;
  bottom: 0;
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>

<script lang="ts">
import User from "../../classes/User";
import store from "../../stores/store";

export default {
  data() {
    return {
      sockets_bay_api_key: "fb4e2d5a9ef8cff6593507f9a366083e", //here you must insert your api key from Sockets Bay
      connection_ready: false as any,
      connection_error: false as any,
      nickname: "" as any,
      websocket: null as any,
      new_message: "" as any,
      messages: [] as any,
      other: {} as User,
    };
  },
  created() {
    const chatData = store.getters.getChatData();
    const me = store.state.thisUser;
    this.nickname = me.userName;
    this.other = chatData.payload;
    store.commit("setLoader", true);
  },
  methods: {
    init_chat() {
      if (this.nickname == "") {
        this.nickname = prompt("Enter a nickname:");
      }

      var sockets_bay_url = `wss://socketsbay.com/wss/v2/100/${this.sockets_bay_api_key}/`;
      this.websocket = new WebSocket(sockets_bay_url);
      //
      this.websocket.onopen = this.onSocketOpen;
      this.websocket.onmessage = this.onSocketMessage;
      this.websocket.onerror = this.onSockerError;
    },
    onSocketOpen(evt: any) {
      this.connection_ready = true;
      store.commit("setLoader", false);
    },
    onSocketMessage(evt: { data: string }) {
      //we parse the json that we receive
      var received = JSON.parse(evt.data);
      //check if it's our message or from a friend
      this.messages.push({ from: "other", message: received.message });
      //scroll to the bottom of the messages div
      const messages_div = document.getElementById("messages")!;
      messages_div.scrollTo({
        top: messages_div.scrollHeight,
        behavior: "smooth",
      });
    },

    onSockerError(evt: any) {
      this.connection_error = true;
    },

    send_message() {
      var to_send = { from: this.nickname, message: this.new_message };
      this.websocket.send(JSON.stringify(to_send));
      this.messages.push({ from: "me", message: this.new_message });
      this.new_message = "";
    },
  },
  mounted() {
    this.init_chat();
  },
};
</script>
