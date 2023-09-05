import React, { useState } from 'react';
import s from '../Header/style.module.sass';
import Link from 'next/link';
import { CloseOutlined, UnorderedListOutlined } from '@ant-design/icons';

const links = [
  {
    label: 'Movies',
    url: '/movies',
  },
  {
    label: 'Series',
    url: '/series',
  },
];

export default function UserBurgerMenu({ userIcon }: { userIcon: any }) {
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const toggleMenu = () => {
    setIsOpenBurger(!isOpenBurger);
  };

  return (
    <>
      {isOpenBurger ? (
        <CloseOutlined
          className={s.BurgerMenuIcon + ' open'}
          onClick={() => setIsOpenBurger(!isOpenBurger)}
        />
      ) : (
        <UnorderedListOutlined
          className={s.BurgerMenuIcon}
          onClick={() => setIsOpenBurger(!isOpenBurger)}
        />
      )}
      {isOpenBurger && (
        <>
          <ul className={s.burgerMenuList}>
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.url} onClick={toggleMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={'/profile'} onClick={toggleMenu}>
                {userIcon}
              </Link>
            </li>
          </ul>
        </>
      )}
    </>
  );
}
