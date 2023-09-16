import s from '../../../components/Movie/style.module.sass';
import Image from 'next/image';
import { ShortDescription } from '@/components/ShortDescription';
import { Movie } from '@/components/Movie';
import { moviesApi } from '@/api/api';

type Props = {
  params: {
    id: number;
  };
};

// TODO: finish movie page layout
export default async function MoviePage({ params }: Props) {
  const movieInfo = await moviesApi.getMovieById(params.id.toString());

  return (
    <main>
      <Movie movieInfo={movieInfo} />
    </main>
  );
}
