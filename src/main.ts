import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import store from "./stores/store";
import _ from "lodash-es";
import './assets/main.css'
import socket from './socket';

const app = createApp(App);

// Use the router
app.use(router);
app.use(store);

app.mount("#app"); // Mount the app after data is loaded
