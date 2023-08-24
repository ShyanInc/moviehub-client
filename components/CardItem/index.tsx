'use client';

import { Pagination } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import s from './style.module.sass';
import { IMovie } from '@/app/api/auth/movies/movies.api';
interface Props {
  name: string;
  array: IMovie[];
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
              alt='Picture of the author'
              quality={75}
            />
            <div className={s.itemInfo}>
              <p>{i.id}</p>
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
