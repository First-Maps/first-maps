import nodemailer from 'nodemailer';
import NextAuth from 'next-auth';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import clientPromise from "../../../lib/mongodb"
import dbConnect from '../../../utils/dbConnect';

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
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: "/auth/signin",
    // singUp: "/auth/signup",
  },
};

export default NextAuth(authOptions);