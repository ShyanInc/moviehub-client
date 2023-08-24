'use client';
import { Card, Avatar } from 'antd';
import s from './style.module.sass';

export default function Profile() {
  return (
    <main>
      <div className={s.profileCards + ' container'}>
        <Card className={s.userCard}>
          <Avatar
            className={s.avatar}
            src='https://avatars.githubusercontent.com/u/123456789?v=4'
          />
          <h1>{'UserName'}</h1>
        </Card>
        <Card className={s.lastWatchedCard}></Card>
      </div>
    </main>
  );
}
