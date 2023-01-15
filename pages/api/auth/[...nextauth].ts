
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { IUserResponse } from "./getUser";

interface ICredentials {
  login: string,
  password: string
}

export default NextAuth({
  providers: [CredentialsProvider({
    type: "credentials",
    credentials: {},
    async authorize(credentials) {
      try {
        const { login, password } = credentials as unknown as ICredentials

        const res = await fetch(`http://localhost:3000/api/auth/getUser?login=${login}&password=${password}`)

        const { ok, user } = await res.json() as IUserResponse

        if (ok && user) {
          return user;
        }
        return null;
      } catch (error) {
        return null;
      }
    }
  })],
  callbacks: {
    session({ session, token, user }) {
      // Setup id if we are use different of Credentials providers.
      session.user.id = token.sub + "";
      return session // The return type will match the one returned in `useSession()`
    }
  },
  pages: {
    signIn: "/?login=true"
  },
  secret: "1Eku1dVFCnTJGRlmXEbKQINVz4XHqQsNrfYCHlrevKg="
}) 
