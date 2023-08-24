import { moviesApi } from '@/api/api';
import { Movie } from '@/types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface moviesState {
  movies: Movie[];
}

const initialState: moviesState = {
  movies: [],
};

export const getMovies = createAsyncThunk('movies/getMovies', async () => {
  const movies = await moviesApi.getMovies();
  return movies;
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
// export const { setMovies } = moviesSlice.actions;
// export default moviesSlice.reducer;
