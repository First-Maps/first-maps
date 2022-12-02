import nodemailer from 'nodemailer';
import NextAuth from 'next-auth';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import clientPromise from "../../../lib/mongodb"
import { Magic } from '@magic-sdk/admin';

const magic = new Magic(process.env.MAGIC_SK);

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    CredentialsProvider({
      name: 'Magic Link',
      credentials: {
        didToken: { label: 'DID Token', type: 'text' },
      },
      async authorize({ didToken }, req) {
        magic.token.validate(didToken);
        const metadata = await magic.users.getMetadataByToken(didToken);
        return { ...metadata };
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: "/auth/signin",
    // singUp: "/auth/signup",
  },
  callbackUrl: process.env.NEXT_PUBLIC_CALLBACK_URL,
};

export default NextAuth(authOptions);