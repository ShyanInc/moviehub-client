'use client';

import { currPath } from '@/app/helpers/pathName';
import { Genre } from '@/types/types';
import { Pagination } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import s from './style.module.sass';

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
            <Image
              src={'https://picsum.photos/200/300'}
              width={100}
              height={150}
              alt='Picture'
              quality={75}
            />
            {/* currPath ? movies || series */}
            <div className={s.itemInfo}>
              <p>{i.translatedTitle}</p>
              <p>{i.originalTitle}</p>
              <div>
                <h3>Country:</h3>
                {i.country?.map((i: string) => (
                  <p key={i}>{i}</p>
                ))}
              </div>
              <div>
                <h3>Year:</h3>
                <p>{i.year}</p>
              </div>
              <div>
                {i.genres?.map((i: Genre) => (
                  <div key={i.id}>
                    <h3>Genres:</h3>
                    <p>{i.value}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3>Actors:</h3>
                {i.actors?.map((i: string) => (
                  <p key={i}>{i}</p>
                ))}
              </div>
              <div>
                <h3>Duration:</h3>
                <p> {i.duration}min</p>
              </div>
              <div>
                <h3>Age:</h3>
                <p>{i.ageRestriction}+</p>
              </div>
              <p>{i.rating}</p>
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
