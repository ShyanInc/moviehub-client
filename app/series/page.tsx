import { seriesApi } from '@/api/api'
import Series from '@/components/Series';
import React from 'react'
import s from "./style.module.sass"


export default async function SeriesPage() {
    const series = await seriesApi.getSeries();
    console.log(series);

    return (
        <main className={s.seriesPage + " container"}>
           <Series initialMovies={series} />
        </main>
    )
}
