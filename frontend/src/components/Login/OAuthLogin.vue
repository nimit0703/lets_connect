<template>
  <div>
    <h2>Login with Google</h2>
    <button @click="loginWithGoogle" v-if="!loggedIn">Login with Google</button>
    <div v-if="loggedIn">
      <p>Logged in as: {{ user.displayName }}</p>
      <p>Email: {{ user.email }}</p>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loggedIn: false,
      user: {}
    };
  },
  methods: {
    loginWithGoogle() {
      window.location.href = 'http://localhost:5000/auth/google';
    },
    async logout() {
      try {
        // Make a request to your server to logout
        const response = await axios.get('http://localhost:5000/auth/logout', { withCredentials: true });
        console.log(response.data); // Assuming your server handles logout
        this.user = {};
        this.loggedIn = false;
      } catch (error) {
        console.error('Logout error:', error);
      }
    },
    async fetchUser() {
      try {
        const response = await axios.get('http://localhost:5000/auth/user', { withCredentials: true });
        this.user = response.data;
        this.loggedIn = true;
      } catch (error) {
        console.error('Fetch user error:', error);
      }
    }
  },
  created() {
    this.fetchUser();
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
