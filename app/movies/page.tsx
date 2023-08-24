'use client'
import React from 'react'
import s from "./style.module.sass"
import CardItemtoMap from '../../components/CardItem'

export default function moviesPage() {
    return (
        <main>
            <div className={s.moviesPage + " container"}>
                <CardItemtoMap name={"movies"} array={[{ id: 1 }, { id: 45 }, { id: 34 }, { id: 23 }, { id: 3 }, { id: 5 }, { id: 4 }]} />
            </div>
        </main>
    )
}
