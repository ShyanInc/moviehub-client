'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {  Series } from '@/types';
import { useEffect } from 'react';
import CardItemtoMap from '../CardItem';
import { setSeries } from '@/redux/slices/seriesSlice';

type Props = {
  initialSeries: Series[];
};

const Series = ({ initialSeries }: Props) => {
  const dispatch = useAppDispatch();
  const series = useAppSelector((state) => state.series.series);

  useEffect(() => {
    dispatch(setSeries(initialSeries));
  }, [dispatch, initialSeries]);

  return <CardItemtoMap name='Series' array={series} />;
};

export default Series;
