import { Movie } from '@/types/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface MoviesState {
  movies: Movie[];
}

const initialState: MoviesState = {
  movies: []
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    }
  }
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
