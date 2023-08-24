'use client';
import { Header } from 'antd/es/layout/layout';
import s from './style.module.sass';
import Link from 'next/link';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons/lib/icons';
import { useState } from 'react';
import UserAvatar from '../UserAvatar';

export default function HeaderComponent() {
  const [search, setSearch] = useState('');

  return (
    <Header className={s.header + ' container'}>
      <Link href={'/'}>
        <h1 className={'text_logo'}>MovieHub</h1>
      </Link>
      <div className={s.navigation}>
        <Link href={''}>Movies</Link>
        <Link href={''}>Series</Link>
      </div>

      <div>
        <div className={s.user_search}>
          <div className={s.search_block}>
            <Input
              className={s.search}
              placeholder='Search'
              onInput={(e) => setSearch(e.currentTarget.value)}
            />
            {search.length < 1 && <SearchOutlined className={s.search_icon} />}
          </div>
          <UserAvatar />
        </div>
      </div>
    </Header>
  );
}
