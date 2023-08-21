'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setMovies } from '@/redux/slices/moviesSlice';
import { Movie } from '@/types';
import { Table } from 'antd';
import { useEffect } from 'react';

type Props = {
  initialMovies: Movie[];
};

export const MovieTable = ({ initialMovies }: Props) => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(setMovies(initialMovies));
  }, [dispatch, initialMovies]);

  const dataSource = movies.map((movie) => ({
    key: movie.id,
    translatedTitle: movie.translatedTitle,
    originalTitle: movie.originalTitle,
    country: movie.country,
    year: movie.year,
    genres: movie.genres.map((genre) => genre.description),
    director: movie.director,
    actors: movie.actors,
    screenwriters: movie.screenwriters,
    producers: movie.producers,
    budget: movie.budget,
    ageRestriction: movie.ageRestriction,
    duration: movie.duration,
    rating: movie.rating,
  }));

  const columns = [
    {
      title: 'Translated Title',
      dataIndex: 'translatedTitle',
      key: 'translatedTitle',
    },
    {
      title: 'Original Title',
      dataIndex: 'originalTitle',
      key: 'originalTitle',
    },
    { title: 'Country', dataIndex: 'country', key: 'country' },
    { title: 'Year', dataIndex: 'year', key: 'year' },
    { title: 'Genres', dataIndex: 'genres', key: 'genres' },
    { title: 'Director', dataIndex: 'director', key: 'director' },
    { title: 'Actors', dataIndex: 'actors', key: 'actors' },
    {
      title: 'Screenwriters',
      dataIndex: 'screenwriters',
      key: 'screenwriters',
    },
    { title: 'Producers', dataIndex: 'producers', key: 'producers' },
    { title: 'Budget ($)', dataIndex: 'budget', key: 'budget' },
    {
      title: 'Age Restriction',
      dataIndex: 'ageRestriction',
      key: 'ageRestriction',
    },
    { title: 'Duration', dataIndex: 'duration', key: 'duration' },
    { title: 'Rating', dataIndex: 'rating', key: 'rating' },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};
