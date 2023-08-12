'use client'
import { Header } from "antd/es/layout/layout";
import s from "./style.module.sass"
import Link from "next/link";
import { Input } from "antd"

export default function HeaderComponent() {
    return (
        <Header className={s.header}>
            <h1 className={'text_logo'}>MovieHub</h1>
            <div className={s.section}>
                <Link href={""}>Series</Link>
                <Link href={""}>Films</Link>
            </div>
            <div>
                <Input
                    className={s.search}
                    placeholder="Search"
                    allowClear />
            </div>
        </Header>
    );
}