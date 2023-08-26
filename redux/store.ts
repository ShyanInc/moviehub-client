import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import { Movie,Series } from '@/types';

// export interface IState {
//   movies: Movie[];
//   series: Series[];
// }

// export const initialState: IState = {
//   movies: [],
//   series:[],
// };

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
