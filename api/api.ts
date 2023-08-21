import { Movie } from '@/types';
import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

const instance = axios.create({
  withCredentials: true,
  baseURL: API_BASE_URL,
});

instance.interceptors.request.use((config) => {
  let token;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const usersApi = {
  getUsers() {
    return instance.get('users').then((res) => res.data);
  },
};

export const moviesApi = {
  getMovies(): Promise<Movie[]> {
    return instance
      .get('movies')
      .then((res) => res.data)
      .catch((err) => console.log('error => ', err));
  },
};

export const seriesApi = {};

export const episodesApi = {};
