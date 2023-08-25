'use client';
import { Button, Form, Input, message } from 'antd';
import { signIn } from 'next-auth/react';
import s from './style.module.sass';

export default function Signin() {
  const [form] = Form.useForm();

  const onFinish = async () => {
    try {
      const res = await signIn('credentials', {
        email: form.getFieldValue('email'),
        password: form.getFieldValue('password'),
        redirect: false,
      });
      if (res?.error) {
        message.error('Invalid credentials');
      } else {
        message.success('Login success!');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onFinishFailed = () => {
    message.error('Fill the form!');
  };

  return (
    <main>
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={s.signInForm + ' container'}
      >
        <Form.Item
          label='Email'
          name={'email'}
          rules={[
            { required: true, message: 'Please input your email' },
            { type: 'email', message: 'Invalid email' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Password'
          name={'password'}
          rules={[{ required: true, message: 'Please input your password' }]}
        >
          <Input.Password type='password' />
        </Form.Item>
        <div className={s.buttons}>
          <Button type='primary' htmlType='submit'>
            Sign In
          </Button>
        </div>
      </Form>
    </main>
  );
}
