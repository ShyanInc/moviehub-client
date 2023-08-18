import type { NextAuthOptions, User } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { json } from "stream/consumers"

export const options: NextAuthOptions = {
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string
    // }),
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
          return user
        else
          throw new Error("Error");
          
      }
    })
  ],
  pages:
    { signIn: '/auth/signin' }
}
