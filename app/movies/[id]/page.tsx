import s from '../../../components/Movie/style.module.sass';
import Image from 'next/image';
import { ShortDescription } from '@/components/ShortDescription';
import { Item } from '@/components/Item';
import { moviesApi } from '@/api/api';

type Props = {
  params: {
    id: number;
  };
};

// TODO: finish movie page layout
// TODO: remade item and add a for series page 
export default async function MoviePage({ params }: Props) {
  const movieInfo = await moviesApi.getMovieById(params.id.toString());

  return (
    <main>
      <Item itemInfo={movieInfo} />
    </main>
  );
}
