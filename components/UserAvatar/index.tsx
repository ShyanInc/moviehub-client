'use client';
import s from '../Header/style.module.sass';
import { UserOutlined } from '@ant-design/icons/lib/icons';
import Avatar from 'antd/es/avatar/avatar';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import UserBurgerMenu from '../UserMenu';
import { useEffect, useState } from 'react';

export const UserAvatar = () => {
  return <>{<Avatar icon={<UserOutlined />} />}</>;
};

const UserCompoment = () => {
  const [sessionState, setSessionState] = useState<any>({});
  const { data, status } = useSession();

  useEffect(() => {
    if (status != 'loading') setSessionState(data);
  }, [data, status]);

  return (
    <>
      <div className={s.Auth}>
        <div>
          {!sessionState && (
            <>
              <UserAvatar />
              <Link href={'/profile'}>Guest</Link>
              <Link href='/api/auth/signin'>Sign In</Link>
            </>
          )}
          {sessionState && (
            <>
              {/* temporary profile link  */}
              <Link href={'/profile'}>Profile</Link>
              <Link
                href='#'
                onClick={() => signOut({ callbackUrl: '/', redirect: true })}
              >
                Sign Out
              </Link>
            </>
          )}
        </div>
      </div>
      <UserBurgerMenu userIcon={<UserAvatar />} />
    </>
  );
};

export default UserCompoment;
