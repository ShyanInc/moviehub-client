'use client';
import { Card, Avatar } from 'antd';
import s from './style.module.sass';
import Preloader from '../loading';
import { useLoginSecurity } from '@/components/Hooks/hooks';

export default function Profile() {
  const { user, loading } = useLoginSecurity();

  if (loading)
    return <Preloader />;

  return (
    <main>
      <div className={s.profileCards + ' container'}>
        <Card className={s.userCard}>
          <div className={s.topUserCard}>
            <Avatar
              className={s.avatar}
              src='https://avatars.githubusercontent.com/u/123456789?v=4'
            />
            <h3>#{user?.username}</h3>
            {user?.name && user?.username && <h1>{`${user?.name} ${user?.surname}`}</h1>}
          </div>
          <div className={s.bottomUserCard}>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi sequi nam animi culpa recusandae.</p>
            </div>
            <div>
              <p>Watched films:<br /><span>1</span></p>
              <p>Watched series:<br /><span>1</span></p>
            </div>
            <p className={s.userRegistrated}>with us from: {"11.12.2022"}</p>
          </div>
        </Card>
        <Card className={s.lastWatchedCard}></Card>
      </div>
    </main>
  );
}
