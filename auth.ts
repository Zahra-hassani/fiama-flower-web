import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthConfig } from "next-auth";
import { prisma } from "./lib/db";
import CredentialsProvider from "next-auth/providers/credentials"

export const setting = {
    pages: {
        signIn: '/sign-in',
        error: '/sign-in'
    },
    session: {
        strategy: "jwt",
        maxAge: 30*24*60*60, //30 days
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials:{
                email: {type: "email"},
                password: {type: "password"}
            },
            async authorize(credentials){
                    if(credentials=== null) return null;
                    const user =await prisma.user.findFirst({
                        where: {email: credentials.email as string}
                    });
                    if(user && user.password){
                        const isMatch = 
                    }
            }
        })
    ]

} satisfies NextAuthConfig;
export const {handlers,auth,signIn,signOut} = NextAuth(setting);
