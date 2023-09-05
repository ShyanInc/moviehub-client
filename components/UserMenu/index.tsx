import React, { useState } from 'react'
import s from "../Header/style.module.sass"
import { Menu, Button } from 'antd'
import Link from 'next/link'
import { BarsOutlined } from '@ant-design/icons/lib/icons';

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
    return (<>
        <Button onClick={() => setIsOpenBurger(!isOpenBurger)}>
            <BarsOutlined />
        </Button>
        {isOpenBurger && <Menu
            mode="vertical"
            className={s.BurgerMenu}>
            {menuItems.map((i, index) =>
                <Menu.Item key={index}>
                    <Link href={i.href}>{i.title}</Link>
                </Menu.Item>
            )}
            <Menu.Item><Link href={"/profile"}>{userIcon}</Link></Menu.Item>
        </Menu>}
    </>)

}
