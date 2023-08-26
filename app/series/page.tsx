import { seriesApi } from '@/api/api'
import Series from '@/components/Series';
import React from 'react'
import s from "./style.module.sass"


export default async function SeriesPage() {
    const series = await seriesApi.getSeries();

    return (
        <main >
            <div className={s.seriesPage + " container"}>
                <Series initialSeries={series} />
            </div>
        </main>
    )
}
