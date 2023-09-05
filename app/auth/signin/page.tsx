'use client';
import { Button, Form, Input, message } from 'antd';
import { signIn } from 'next-auth/react';
import s from './style.module.sass';

export default function Signin() {
  const [form] = Form.useForm();

  const onFinish = async () => {
    try {
      const res = await signIn('credentials', {
        username: form.getFieldValue('username'),
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
          label='Username'
          name={'username'}
          rules={[
            { required: true, message: 'Please input your username' },
            { min: 3, max: 18, message: 'Min length is 3, Max length is 18' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Password'
          name={'password'}
          rules={[
            { required: true, message: 'Please input your password' },
            {
              min: 4,
              max: 32,
              message: 'Min length is 4, Max length is 32',
            },
          ]}
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
