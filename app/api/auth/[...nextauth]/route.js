import { connection } from "@/app/database/dbconnect";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
    pages: {
        signIn: "/users/signin",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { type: "email" },
                password: { type: "password" },
            },
            async authorize(credentials, req) {
                const [results] = await connection.query(
                    "SELECT * FROM users WHERE email=? AND password=?",
                    [credentials.email, credentials.password]
                );
                console.log(results);

                if (results.length > 0) {
                    return results;
                } else {
                    return null;
                }
            },
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
});

export { handler as POST, handler as GET };
