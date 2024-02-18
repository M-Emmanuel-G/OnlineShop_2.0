import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { Adapter } from "next-auth/adapters"

const prisma = new PrismaClient()

const handler = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: "979325569121-vm24ha9sla7m80st6tttt878ue4iqfm1.apps.googleusercontent.com" as string,
      clientSecret: "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" as string,
    }),
  ],
})

export {handler as GET, handler as POST}