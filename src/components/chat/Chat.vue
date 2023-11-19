<template>
  <div class="container">
      <h1>Awesome chat - <span class="connection_ready" v-if="connection_ready">Connection ready!</span></h1>
      
      <div class="messages" id="messages">
        <div class="message-container">
          <h1 class="error" v-if="connection_error"> Connection error! </h1>
          <div v-for="(m,idx) in messages" :key="'m-' + idx" style="clear:both">
            <div :class="{ 'msg-from-me' : m.from=='me', 'msg-from-other' : m.from=='other'}">
              {{ m.from === 'me' ? nickname : m.from + ': ' }} {{ m.message }}
            </div>
          </div> 
        </div>
      </div>

      <div class="send-zone">
        <input v-model="new_message" type="text" placeholder="Type a message" @keyup.enter="send_message"/>
      </div>
  </div>
</template>

<script lang="ts">

export default {
  data(){
    return {
      sockets_bay_api_key: "fb4e2d5a9ef8cff6593507f9a366083e", //here you must insert your api key from Sockets Bay
      connection_ready: false as any,
      connection_error: false as any,
      nickname: "" as any,
      websocket: null as any,
      new_message: "" as any,
      messages: [] as any,
    }
  },
  methods:{
    init_chat() {
      //ask for a nickname
      if(this.nickname == "") {
        this.nickname = prompt("Enter a nickname:")};

      //connect to Sockets Bay
      var sockets_bay_url = `wss://socketsbay.com/wss/v2/100/${this.sockets_bay_api_key}/`;
      this.websocket      = new WebSocket(sockets_bay_url);
      //
      this.websocket.onopen    = this.onSocketOpen;
      this.websocket.onmessage = this.onSocketMessage;
      this.websocket.onerror   = this.onSockerError;
    },
    onSocketOpen(evt: any){
      this.connection_ready = true;
    },
    onSocketMessage(evt: { data: string; }){
      //we parse the json that we receive
      var received = JSON.parse(evt.data);
      //check if it's our message or from a friend
      this.messages.push( { from: "other", message: received.message } );
      //scroll to the bottom of the messages div
      const messages_div = document.getElementById('messages')!;
      messages_div.scrollTo({top: messages_div.scrollHeight, behavior: 'smooth'});
    },

    onSockerError(evt: any){
      this.connection_error = true;
    },

    send_message() {
      var to_send = { from: this.nickname, message: this.new_message };
      this.websocket.send( JSON.stringify(to_send) );
      this.messages.push( { from: "me"   , message: this.new_message } );
      this.new_message = "";
    }
  },
  mounted() {
    this.init_chat();
  }
}
</script>
