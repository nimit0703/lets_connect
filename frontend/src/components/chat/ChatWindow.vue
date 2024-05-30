<template>
    <div>
      <div v-for="message in messages" :key="message.id">
        <strong>{{ message.sender }}</strong>: {{ message.content }}
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: ['messages'],
  };
  </script>
  