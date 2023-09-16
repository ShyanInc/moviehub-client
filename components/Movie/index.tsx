'use client';

import s from '@/components/Movie/style.module.sass';
import Image from 'next/image';
import { ShortDescription } from '@/components/ShortDescription';
import { Movie as MovieType } from '@/types/types';

type Props = {
  movieInfo: MovieType;
};

export const Movie = ({ movieInfo }: Props) => {
  const genres = movieInfo.genres.map((genre) => genre.description);

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
          <button className={s.watchTrailerBtn}>
            <a href={movieInfo.trailer}>WATCH TRAILER</a>
          </button>
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
            <div>
              <h3>Year: </h3>
              <p>{movieInfo.year}</p>
            </div>
            <div>
              <h3>Country: </h3>
              <p>{movieInfo.country.join(', ')}</p>
            </div>
            <div>
              <h3>Genre: </h3>
              <p>{genres.join(', ')}</p>
            </div>
            <div>
              <h3>Actors: </h3>
              <p>{movieInfo.actors.join(', ')}</p>
            </div>
            <div>
              <h3>Director: </h3>
              <p>{movieInfo.director.join(', ')}</p>
            </div>
            <div>
              <h3>Screenwriter: </h3>
              <p>{movieInfo.screenwriters.join(', ')}</p>
            </div>
            <div>
              <h3>Producers: </h3>
              <p>{movieInfo.producers.join(', ')}</p>
            </div>
            <div>
              <h3>Budget: </h3>
              <p>{movieInfo.budget}$</p>
            </div>
            <div>
              <h3>Duration: </h3>
              <p>{movieInfo.duration} min.</p>
            </div>
            <div>
              <h3>Age restriction: </h3>
              <p>{movieInfo.ageRestriction}+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
