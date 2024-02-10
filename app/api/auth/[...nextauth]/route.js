import NextAuth from "next-auth/next";

const handler = NextAuth({
    providers: [],
});

export { handler as POST, handler as GET };
