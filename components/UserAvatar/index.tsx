'use client';
import { UserOutlined } from '@ant-design/icons/lib/icons';
import Avatar from 'antd/es/avatar/avatar';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import s from '../Header/style.module.sass';

export default function UserAvatar() {
  const session = useSession();

  return (
    <div className={s.Auth}>
      {!session.data && (
        <>
          <Avatar icon={<UserOutlined />} />
          <p>Guest</p>
          <Link href='/api/auth/signin'>Sign In</Link>
        </>
      )}
      {session.data && (
        <Link
          href='#'
          onClick={() => signOut({ callbackUrl: '/', redirect: true })}
        >
          Sign Out
        </Link>
      )}
    </div>
  );
}
