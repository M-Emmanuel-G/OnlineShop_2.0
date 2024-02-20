import { db } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: "979325569121-vm24ha9sla7m80st6tttt878ue4iqfm1.apps.googleusercontent.com" as string,
      clientSecret: "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" as string,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user = { ...session.user, id: user.id } as {
        id: string;
        name: string;
        email: string;
      };

      return session;
    },
  },
  secret: "askdn2172hnj9-2n12-0=dsja81nh1-",
};