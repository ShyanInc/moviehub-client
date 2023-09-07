'use client';
import { Card, Avatar } from 'antd';
import s from './style.module.sass';
import { getSession, signIn } from "next-auth/react"
import { useState, useEffect } from 'react';
import Preloader from '../loading';
export default function Profile() {
  const [loading, setLoading] = useState(true)

  const securePage = async () => {
    const session = await getSession();
    if (!session)
      signIn();
    else
    setLoading(!loading)
  }

  useEffect(() => {
    securePage()
  }, [])

  if(loading)
    return <Preloader/>;

  return (
    <main>
      <div className={s.profileCards + ' container'}>
        <Card className={s.userCard}>
          <div className={s.topUserCard}>
            <Avatar
              className={s.avatar}
              src='https://avatars.githubusercontent.com/u/123456789?v=4'
            />
            <h3>{"user#12"}</h3>
            <h1>{'UserName'}</h1>
          </div>
          <div className={s.bottomUserCard}>
            <div className={s.watchedTracker}>
              <p>1</p>
              <p>1</p>
            </div>
            <p className={s.userRegistrated}>23.444.4545</p>
          </div>
        </Card>
        <Card className={s.lastWatchedCard}></Card>
      </div>
    </main>
  );
}
