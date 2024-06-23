<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { register } from '@/services/authService';
  import apiRequest from '@/services/api/apiService'
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      async register() {
        try {
          let data = {
            username: this.username,
            email: this.email,
            password: this.password,
          }
          apiRequest.register(data).then((res)=>{
            console.log(res);
            // this.$router.push('/login');
          });
          this.$router.push('/login');
        } catch (err) {
          console.error(err);
        }
      },
    },
  };
  </script>
  