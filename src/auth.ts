import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Github from "@auth/core/providers/github";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "database" },   // sessions live in Postgres
  providers: [Github({id: "github"})],
});
