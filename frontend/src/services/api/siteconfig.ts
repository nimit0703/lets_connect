import { siteURL } from "@/plugins/config";
import axios from "axios";

const API_URL = siteURL || 'http://localhost:5000/api/auth/';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 120000,
});

instance.interceptors.request.use(
  (config) => {
    const AUTH_TOKEN = localStorage.getItem('auth.token');
    if (AUTH_TOKEN) {
      config.headers = config.headers || {};  // Ensure headers is defined
      config.headers["Authorization"] = `Bearer ${AUTH_TOKEN}`;
    }
    config.headers = config.headers || {};  // Ensure headers is defined
    config.headers["Content-Type"] = "application/json"; // Adjust the content type as needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('auth.token');
      // Redirect to login or handle unauthorized access
    }
    return Promise.reject(error);
  }
);

export default instance;
