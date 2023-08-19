import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface IMovie {
  id: number;
  translatedTitle: string;
  originalTitle: string;
  country: string[];
  year: number;
  genres: string[];
  director: string[];
  actors: string[];
  screenwriters: string[];
  producers: string[];
  budget: number;
  ageRestriction: number;
  duration: number;
  coverImage: string;
  trailer: string;
  rating: number;
}

// https://moviehub-api-8l85.onrender.com
export const moviesApi = createApi({
    reducerPath: 'api/movies',
    // refetchOnFocus: true,
    // refetchOnReconnect: true,
    baseQuery: fetchBaseQuery({ baseUrl: 'https://moviehub-api-8l85.onrender.com/' }),
    endpoints: (builder) => ({
      getAllMovies: builder.query({
        query: () => `movies`
      }),
    }),
  });

export const { useGetAllMoviesQuery } = moviesApi;