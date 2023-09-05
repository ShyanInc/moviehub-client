'use client';
import { Button, Form, Input, message } from 'antd';
import s from './style.module.sass';
import { signIn } from 'next-auth/react';

type Props = {
  signUp: (
    username: string,
    email: string,
    password: string
  ) => Promise<string>;
};

export const SignupForm = ({ signUp }: Props) => {
  const [form] = Form.useForm();

  const onFinish = async () => {
    const username = form.getFieldValue('username');
    const email = form.getFieldValue('email');
    const password = form.getFieldValue('password');

    try {
      const user = await signUp(username, email, password);
      if (user) {
        await signIn('credentials', {
          username: username,
          password: password,
          redirect: false,
        });
        message.success('Register success!');
      } else {
        message.error('Register failed!');
      }
    } catch (err: any) {
      if ('message' in err) message.error(err.message);
    }
  };

  const onFinishFailed = () => {
    message.error('Register failed!');
  };

  return (
    <Form
      form={form}
      layout='vertical'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className={s.signUpForm + ' container'}
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
        label='Email'
        name={'email'}
        rules={[
          { required: true, message: 'Please input your email' },
          { type: 'email', message: 'Invalid email' },
        ]}
      >
        <Input type='email' />
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
          Sign Up
        </Button>
      </div>
    </Form>
  );
};
