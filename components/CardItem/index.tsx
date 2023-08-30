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

export default function CardItemtoMap({ name, array }: Props) {
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
                {i.country?.map((i: string) => (
                  <p key={i}>{i}</p>
                ))}
              </div>
              <p>{i.year}</p>
              <div>
                {i.genres?.map((i: Genre) => (
                  <div key={i.id}>
                    <p>{i.value}</p>
                  </div>
                ))}
              </div>
              <div>
                {i.director?.map((i: string) => (
                  <p key={i}>{i}</p>
                ))}
              </div>
              <div>
                {i.actors?.map((i: string) => (
                  <p key={i}>{i}</p>
                ))}
              </div>
              <div>
                {i.screenwriters?.map((i: string) => (
                  <p key={i}>{i}</p>
                ))}
              </div>
              <div>
                {i.producers?.map((i: string) => (
                  <p key={i}>{i}</p>
                ))}
              </div>
              <p>{i.budget}$</p>
              <p>{i.ageRestriction}+</p>
              <p>{i.duration}min</p>
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
