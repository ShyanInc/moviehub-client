import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import seriesReducer from "./slices/seriesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
