import axios from 'axios';

export const api = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL_API,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
