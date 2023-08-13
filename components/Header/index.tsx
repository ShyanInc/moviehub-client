'use client';
import { Header } from 'antd/es/layout/layout';
import s from './style.module.sass';
import Link from 'next/link';
import { Input } from 'antd';

export default function HeaderComponent() {
    return (
        <Header className={s.header + ' container'}>
            <h1 className={'text_logo'}>MovieHub</h1>
            <div className={s.section}>
                <Link href={''}>Series</Link>
                <Link href={''}>Films</Link>
            </div>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <line x1="16.361" y1="17.654" x2="23.2609" y2="24.854" stroke="#333333"/>
                <path
                    d="M20.2213 10.0654C20.2213 15.3347 15.8203 19.6308 10.3607 19.6308C4.90105 19.6308 0.5 15.3347 0.5 10.0654C0.5 4.7961 4.90105 0.5 10.3607 0.5C15.8203 0.5 20.2213 4.7961 20.2213 10.0654Z"
                    stroke="#333333"/>
            </svg>
            <div>
                <Input
                    className={s.search}
                    placeholder="Search"
                    allowClear/>
            </div>
        </Header>
    );
}