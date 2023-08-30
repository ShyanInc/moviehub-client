'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setMovies } from '@/redux/slices/moviesSlice';
import { Movie } from '@/types/types';
import { useEffect } from 'react';
import CardItemtoMap from '../CardItem';

type Props = {
  initialMovies: Movie[];
};

const Movies = ({ initialMovies }: Props) => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(setMovies(initialMovies));
  }, [dispatch, initialMovies]);

  return <CardItemtoMap name='Movies' array={movies} />;
};

export default Movies;
