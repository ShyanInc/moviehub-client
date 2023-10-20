'use client';

import s from '@/components/Item/style.module.sass';
import Image from 'next/image';
import { ShortDescription } from '@/components/ShortDescription';
import { Movie as MovieType } from '@/types/types';
import { Series as SeriesType } from '@/types/types';
import { Card } from 'antd';

type Props = {
  itemInfo: MovieType | SeriesType;
};

export const Item = ({ itemInfo: itemInfo }: Props) => {
  console.log(itemInfo);

  const genres = itemInfo.genres.map((genre) => genre.description);

  return (
    <Card className={s.itemBlock}>
      <div className={s.itemRating}>
        <p className={s.rating}>{itemInfo.rating}</p>
        <p className={s.marksCount}>1291 marks</p>
      </div>
      <div className={s.itemInfo}>
        <div className={s.hero}>
          <Image
            className={s.coverImage}
            src={'https://picsum.photos/200/300'}
            alt={'Movie cover image'}
            width={200}
            height={300}
          />
         {itemInfo.trailer && <button className={s.watchTrailerBtn}>
            <a href={itemInfo.trailer}>WATCH TRAILER</a>
          </button>}
        </div>
        <div className={s.itemDetails}>
          <div>
            <h1>{itemInfo.translatedTitle}</h1>
            <div className={s.originalTitle}>{itemInfo.originalTitle}</div>
            <button className={s.willWatchBtn}>WILL WATCH</button>
          </div>
          <ShortDescription description={itemInfo.description} />
          <div className={s.about}>
            <h2>About</h2>
            <div>
              <h3>Year: </h3>
              <p>{itemInfo.year}</p>
            </div>
            <div>
              <h3>Country: </h3>
              <p>{itemInfo.country.join(', ')}</p>
            </div>
            {(!!itemInfo.genres.length) && <div>
              <h3>Genre: </h3>
              <p>{genres.join(', ')}</p>
            </div>}
            <div>
              <h3>Actors: </h3>
              <p>{itemInfo.actors.join(', ')}</p>
            </div>
            <div>
              <h3>Director: </h3>
              <p>{itemInfo.director.join(', ')}</p>
            </div>
            <div>
              <h3>Screenwriter: </h3>
              <p>{itemInfo.screenwriters.join(', ')}</p>
            </div>
            <div>
              <h3>Producers: </h3>
              <p>{itemInfo.producers.join(', ')}</p>
            </div>
            {itemInfo.budget && (
              <div>
                <h3>Budget: </h3>
                <p>{itemInfo.budget}$</p>
              </div>
            )}
            {itemInfo.duration && (
              <div>
                <h3>Duration: </h3>
                <p>{itemInfo.duration} min.</p>
              </div>
            )}
            <div>
              <h3>Age restriction: </h3>
              <p>{itemInfo.ageRestriction}+</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
