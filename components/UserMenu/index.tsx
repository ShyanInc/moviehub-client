import React, { useState } from 'react'
import s from "../Header/style.module.sass"
import { Menu } from 'antd'
import Link from 'next/link'

const menuItems = [
    {
        title: 'Movies',
        href: '/movies',
    },
    {
        title: 'Series',
        href: '/series',
    },
];

export default function UserBurgerMenu({ userIcon }: { userIcon: any }) {
    const [isOpenBurger, setIsOpenBurger] = useState(false)
    return (
        <Menu
            mode="vertical"
            className={s.card}>
            {menuItems.map((i, index) =>
                <Menu.Item key={index}>
                    <Link href={i.href}>{i.title}</Link>
                </Menu.Item>
            )}
            <Menu.Item><Link href={"/profile"}>{userIcon}</Link></Menu.Item>

        </Menu>
    )

}
