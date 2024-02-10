import NextAuth from "next-auth/next";

const handler = NextAuth({
    providers: [CredentialsProvider],
});

export { handler as POST, handler as GET };
