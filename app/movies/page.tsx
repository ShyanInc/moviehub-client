import { moviesApi } from '@/api/api';
import Movies from '@/components/Movies';
import s from './style.module.sass';

export default async function moviesPage() {
  const movies = await moviesApi.getMovies();

  return (
    <main>
      <div className={s.moviesPage + ' container'}>
        <Movies initialMovies={movies} />
      </div>
    </main>
  );
}
