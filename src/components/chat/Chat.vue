<template>
  <div class="container">
    <div v-if="userData.connected" class="chat-box">
      <div class="member-list">
        <ul>
          <li
            @click="setTab('CHATROOM')"
            :class="{ active: tab === 'CHATROOM' }"
          >
            Chatroom
          </li>
          <li
            v-for="(name, index) in privateChats.keys()"
            :key="index"
            @click="setTab(name)"
            :class="{ active: tab === name }"
          >
            {{ name }}
          </li>
        </ul>
      </div>
      <div v-if="tab === 'CHATROOM'" class="chat-content">
        <!-- Chatroom content -->
      </div>
      <div v-else class="chat-content">
        <!-- Private chat content -->
      </div>
    </div>
    <div v-else class="register">
      <input
        v-model="userData.username"
        placeholder="Enter your name"
        name="userName"
      />
      <button @click="registerUser">Connect</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

export default {
  data() {
    return {
      stompClient: null,
      privateChats: new Map(),
      publicChats: [],
      tab: "CHATROOM",
      userData: {
        username: "",
        receivername: "",
        connected: false,
        message: "",
      },
    };
  },
  methods: {
    connect() {
        const sock = new SockJS('http://localhost:8080/ws');
      this.stompClient = new Stomp.Client();
      this.stompClient.webSocketFactory = () => {
        return sock;
      };

      this.stompClient.onConnect = this.onConnected;
      this.stompClient.onStompError = this.onError;
      this.stompClient.activate();
    },
    onConnected() {
      this.userData.connected = true;
      this.stompClient.subscribe("/chatroom/public", this.onMessageReceived);
      this.stompClient.subscribe(
        `/user/${this.userData.username}/private`,
        this.onPrivateMessage
      );
      this.userJoin();
    },
    userJoin() {
      const chatMessage = {
        senderName: this.userData.username,
        status: "JOIN",
      };
      this.stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    },
    onMessageReceived(payload) {
      const payloadData = JSON.parse(payload.body);
      switch (payloadData.status) {
        case "JOIN":
          if (!this.privateChats.has(payloadData.senderName)) {
            this.privateChats.set(payloadData.senderName, []);
          }
          break;
        case "MESSAGE":
          this.publicChats.push(payloadData);
          break;
      }
    },
    onPrivateMessage(payload) {
      const payloadData = JSON.parse(payload.body);
      if (this.privateChats.has(payloadData.senderName)) {
        this.privateChats.get(payloadData.senderName).push(payloadData);
      } else {
        this.privateChats.set(payloadData.senderName, [payloadData]);
      }
    },
    onError(err) {
      console.log(err);
    },
    handleMessage(event) {
      this.userData.message = event.target.value;
    },
    sendValue() {
      if (this.stompClient) {
        const chatMessage = {
          senderName: this.userData.username,
          message: this.userData.message,
          status: "MESSAGE",
        };
        this.stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
        this.userData.message = "";
      }
    },
    sendPrivateValue() {
      if (this.stompClient) {
        const chatMessage = {
          senderName: this.userData.username,
          receiverName: this.tab,
          message: this.userData.message,
          status: "MESSAGE",
        };
        if (this.userData.username !== this.tab) {
          if (this.privateChats.has(this.tab)) {
            this.privateChats.get(this.tab).push(chatMessage);
          } else {
            this.privateChats.set(this.tab, [chatMessage]);
          }
        }
        this.stompClient.send(
          "/app/private-message",
          {},
          JSON.stringify(chatMessage)
        );
        this.userData.message = "";
      }
    },
    handleUsername(event) {
      this.userData.username = event.target.value;
    },
    registerUser() {
      this.connect();
    },
    setTab(tab) {
      this.tab = tab;
    },
  },
  watch: {
    userData: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true,
    },
  },
  mounted() {
    console.log(this.userData);
  },
};
</script>

<style scoped>
/* Your component styles */
input {
  padding: 10px;
  font-size: 1.2em;
}
button {
  border: none;
  padding: 10px;
  background: green;
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
}

.container {
  position: relative;
}

.register {
  position: fixed;
  padding: 30px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  top: 35%;
  left: 32%;
  display: flex;
  flex-direction: row;
}
.chat-box {
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  margin: 40px 50px;
  height: 600px;
  padding: 10px;
  display: flex;
  flex-direction: row;
}

.member-list {
  width: 20%;
}

.chat-content {
  width: 80%;
  margin-left: 10px;
}

.chat-messages {
  height: 80%;
  border: 1px solid #000;
}

.send-message {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.input-message {
  width: 90%;
  border-radius: 50px;
}

ul {
  padding: 0;
  list-style-type: none;
}
.send-button {
  width: 10%;
  border-radius: 50px;
  margin-left: 5px;
  cursor: pointer;
}
.member {
  padding: 10px;
  background: #eee;
  border: #000;
  cursor: pointer;
  margin: 5px 2px;
  box-shadow: 0 8px 8px -4px lightblue;
}
.member.active {
  background: blueviolet;
  color: #fff;
}
.member:hover {
  background: grey;
  color: #fff;
}

.avatar {
  background-color: cornflowerblue;
  padding: 3px 5px;
  border-radius: 5px;
  color: #fff;
}
.avatar.self {
  color: #000;
  background-color: greenyellow;
}
.message {
  padding: 5px;
  width: auto;
  display: flex;
  flex-direction: row;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin: 5px 10px;
}
.message-data {
  padding: 5px;
}
.message.self {
  justify-content: end;
}
</style>
