import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          reqiered: true,
        },
        password: {
          label: 'Password',
          type: 'password',
          reqiered: true,
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials as any;
        const res = await fetch(
          'https://moviehub-api-8l85.onrender.com/auth/login',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );
        const user = await res.json();
        console.log(user);
        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: { signIn: '/auth/signin', signOut: '/auth/signout' },
};
