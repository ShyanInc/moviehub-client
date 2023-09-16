'use client';

import { currPath } from '@/app/helpers/pathName';
import { Genre } from '@/types/types';
import { Pagination } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import s from './style.module.sass';
import ratingIcon from '@/public/assets/img/star.png';
import { RatingIcon } from '../SVG/RatingIcon';
import Link from 'next/link';

interface Props {
  name: string;
  array: any[];
}

export default function CardItemToMap({ name, array }: Props) {
  const [page, setPage] = useState({
    pageNumber: 1,
    pageSize: 5,
    pageTotal: array.length,
  });
  const sliceArray = (array: any[], pageNumber: number, pageSize: number) => {
    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize;
    return array.slice(start, end);
  };
  console.log(currPath());
  return (
    <>
      <h1 className={s.cardName}>{name}</h1>
      <div className={s.itemsCard}>
        {sliceArray(array, page.pageNumber, page.pageSize).map((i: any) => (
          <div key={i.id} className={s.item}>
            <div className={s.itemRating}>
              <div>
                {/* <Image
                  src={ratingIcon}
                  width={36}
                  height={36}
                  alt='Rating Icon'
                /> */}
                <RatingIcon />
              </div>
              <div className={s.ratingTypography}>
                <div>
                  <p>{i.rating}</p>
                  <p className={s.postfixTypography}> /10</p>
                </div>
                <p className={s.subTypography}>2.8 M</p>
              </div>
            </div>
            <div className={s.itemContent}>
              <Image
                src={'https://picsum.photos/200/300'}
                width={100}
                height={150}
                className={s.cardPoster}
                alt='Card Poster'
                quality={75}
              />

              {/* currPath ? movies || series */}
              <div className={s.itemInfo}>
                <div className={s.translatedTitle}>
                  <Link href={`/movies/${i.id}`}>
                    <p>{i.translatedTitle}</p>
                  </Link>
                </div>
                <div className={s.infoTitle}>
                  <p>
                    {i.originalTitle}, {i.year}, {i.duration} min.
                  </p>
                </div>
                <div>
                  <h3>Country:</h3>
                  {i.country?.map((i: string) => <p key={i}>{i}</p>)}
                </div>
                <div>
                  {i.genres?.map((i: Genre) => (
                    <div key={i.id}>
                      <h3>Genres:</h3>
                      <p>{i.description}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h3>Actors:</h3>
                  {i.actors?.map((i: string) => <p key={i}>{i}</p>)}
                </div>
                <div>
                  <h3>Age:</h3>
                  <p>{i.ageRestriction}+</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        className={s.pagination}
        defaultCurrent={page.pageNumber}
        pageSize={page.pageSize}
        total={page.pageTotal}
      />
    </>
  );
}
