'use client';

import s from '@/components/Movie/style.module.sass';
import Image from 'next/image';
import { ShortDescription } from '@/components/ShortDescription';
import { Movie as MovieType } from '@/types/types';

type Props = {
  movieInfo: MovieType;
};

export const Movie = ({ movieInfo }: Props) => {
  return (
    <div className={s.movieBlock}>
      <div className={s.movieRating}>
        <p className={s.rating}>{movieInfo.rating}</p>
        <p className={s.marksCount}>1291 marks</p>
      </div>
      <div className={s.movieInfo}>
        <div className={s.hero}>
          <Image
            className={s.coverImage}
            src={'https://picsum.photos/200/300'}
            alt={'Movie cover image'}
            width={200}
            height={300}
          />
          <button className={s.watchTrailerBtn}>WATCH TRAILER</button>
        </div>
        <div className={s.movieDetails}>
          <div>
            <h1>{movieInfo.translatedTitle}</h1>
            <div className={s.originalTitle}>{movieInfo.originalTitle}</div>
            <button className={s.willWatchBtn}>WILL WATCH</button>
          </div>
          <ShortDescription description={movieInfo.description} />
          <div className={s.about}>
            <h2>About</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
