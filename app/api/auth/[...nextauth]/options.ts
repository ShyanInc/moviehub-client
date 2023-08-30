import type { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const API_BASE_URL = process.env.API_BASE_URL;

type Token = {
  accessToken: string;
};

export const options: NextAuthOptions = {
  pages: { signIn: '/auth/signin', signOut: '/auth/signout' },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'username',
          reqiered: true,
        },
        password: {
          label: 'Password',
          type: 'password',
          reqiered: true,
        },
      },
      async authorize(credentials) {
        const { username, password } = credentials as any;
        const res = await fetch(API_BASE_URL + 'auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username,
            password,
          }),
        });
        const user = await res.json();
        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as Token;
      return session;
    },
  },
};
