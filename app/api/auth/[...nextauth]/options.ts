import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "i need ur username"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "i need ur password"
        },
      },
      async authorize(credential) {
        const user = { id: 12, name: "feidr", password: "admin" };
        if (credential?.username === user.name && credential?.password === user.password)
          return user
        else return null
      }
    })
  ],

}

