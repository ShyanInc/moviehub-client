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
  async getUsers() {
    try {
      const res = await instance.get('users');
      return res.data;
    } catch (err) {
      return console.log('error => ', err);
    }
  },

  async getUserById(id: string) {
    try {
      const res = await instance.get(`users/${id}`);
      return res.data;
    } catch (err) {
      return console.log('error => ', err);
    }
  },
};

export const moviesApi = {
  async getMovies() {
    try {
      const res = await instance.get('movies');
      return res.data;
    } catch (err) {
      return console.log('error => ', err);
    }
  },

  async getMovieById(id: string) {
    try {
      const res = await instance.get(`movies/${id}`);
      return res.data;
    } catch (err) {
      return console.log('error => ', err);
    }
  },
};

export const seriesApi = {
  async getSeries() {
    try {
      const res = await instance.get('series');
      return res.data;
    } catch (err) {
      return console.log('error => ', err);
    }
  },

  async getSeriesById(id: string) {
    try {
      const res = await instance.get(`series/${id}`);
      return res.data;
    } catch (err) {
      return console.log('error => ', err);
    }
  },
};

export const episodesApi = {
  async getEpisodes() {
    try {
      const res = await instance.get('episodes');
      return res.data;
    } catch (err) {
      return console.log('error => ', err);
    }
  },

  async getEpisodeById(id: string) {
    try {
      const res = await instance.get(`episodes/${id}`);
      return res.data;
    } catch (err) {
      return console.log('error => ', err);
    }
  },
};
