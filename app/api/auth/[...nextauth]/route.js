import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { type: "email" },
                password: { type: "password" },
            },
            async authorize(credentials, req) {
                const user = { id: 1, email: "abc@gmail.com", password: "123" };
                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
});

export { handler as POST, handler as GET };
