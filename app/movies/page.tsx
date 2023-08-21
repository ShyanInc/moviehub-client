import { moviesApi } from '@/api/api';
import { MovieTable } from '@/components/Movies/MovieTable';

export default async function Movies() {
  const movies = await moviesApi.getMovies();

  return (
    <main>
      <h1>Movies</h1>
      <MovieTable initialMovies={movies} />
    </main>
  );
}
