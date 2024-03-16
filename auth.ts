import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma =  new PrismaClient();
export const {
  handlers,
  signOut,
  signIn,
  auth,
  
} = NextAuth({
  providers: [GitHub],
  adapter: PrismaAdapter(prisma)
})
