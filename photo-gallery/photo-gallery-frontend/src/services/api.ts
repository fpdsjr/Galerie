import axios from 'axios';

import { getUserLocalStorage } from '../context/AuthProvider/utils';

export const Api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000',
});

Api.interceptors.request.use(
  (config: any) => {
    const user = getUserLocalStorage();

    config.headers.Authorization = user?.token ? `Bearer ${user?.token}` : '';

    return config;
  },
  (error) => {
    return console.log(error);
  },
);
