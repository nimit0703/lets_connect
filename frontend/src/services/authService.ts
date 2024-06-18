import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

export const register = async (user:any) => {
  const response = await axios.post(API_URL + 'register', user);
  return response.data;
};

export const login = async (user:any) => {
  const response = await axios.post(API_URL + 'login', user);
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('user');
};
