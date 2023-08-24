'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Form, Input, Button } from 'antd';
import s from './style.module.sass';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signInHanlder(e: any) {
    e.preventDefault();
    try {
      const res = await signIn('credentials', {
        email: email,
        password: password,
        redirect: false,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main>
      <Form className={s.signInForm + ' container'}>
        <Form.Item label='E-mail'>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item label='Password'>
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <div className={s.buttons}>
          <Button htmlType='submit' onClick={(e) => signInHanlder(e)}>
            Sign In
          </Button>
        </div>
      </Form>
    </main>
  );
}
