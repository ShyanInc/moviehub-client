import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { moviesApi } from "./api/auth/movies/movies.api";

export const store = configureStore({
    reducer: { [moviesApi.reducerPath]: moviesApi.reducer },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesApi.middleware)
})

export type typeRootState = ReturnType<typeof store.getState>