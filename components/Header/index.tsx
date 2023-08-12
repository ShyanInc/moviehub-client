'use client'
import { Header } from "antd/es/layout/layout";
import s from "./style.module.sass"
import Link from "next/link";

export default function HeaderComponent() {
    return (
        <Header className={s.header}>
            <h1 className={'text_logo'}>MovieHub</h1>
            <div>
                <Link href={""}>Series</Link>
                <Link href={""}>Films</Link>
            </div>
            <div></div>
        </Header>
    );
}