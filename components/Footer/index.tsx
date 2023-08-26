'use client';
import { Footer } from 'antd/es/layout/layout';
import s from './style.module.sass';
import {
  InstagramOutlined,
  TwitterOutlined,
} from '@ant-design/icons/lib/icons';
import Link from 'next/link';

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <Footer className={s.footer + ' container'}>
      <div>
        <p>
          <span>©</span>All rights reserved
        </p>
        <div>Copyright {currentYear}</div>
      </div>
      <Link href={'/'}>
        <h1 className={'text_logo'}>MovieHub</h1>
      </Link>
      <div className={s.social}>
        <Link
          href='https://instagram.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <InstagramOutlined />
        </Link>
        <Link
          href='https://twitter.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <TwitterOutlined />
        </Link>
      </div>
    </Footer>
  );
}
