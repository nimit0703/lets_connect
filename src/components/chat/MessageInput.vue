<template>
  <div>
    <input
      v-model="newMessage"
      @keyup.enter="sendMessage"
      placeholder="Type your message"
    />
  </div>
</template>

<script lang="ts">

export default {
  data() {
    return {
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
    //   socket.sendMessage(this.newMessage);
      this.newMessage = "";
    },
  },
};
</script>
