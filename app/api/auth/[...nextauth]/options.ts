import type { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          reqiered: true,
        },
        password: {
          label: "Password",
          type: "password",
          reqiered: true,
        },
      },
      async authorize(credentials) {
        const res = await fetch("https://moviehub-api-8l85.onrender.com/auth/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password
            })
          })
        const user = await res.json();
        console.log(user)
        if (user)
          return user as User
        else
          throw new Error("Error");
          
      }
    })
  ],
  pages:
    { signIn: '/auth/signin' }
}
