import { connection } from "@/app/database/dbconnect";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const comparePassword = (currentPassword, hashPassword) => {
    return bcrypt.compareSync(currentPassword, hashPassword);
};

const handler = NextAuth({
    pages: {
        signIn: "/user/signin",
        signOut: "/user/signout",
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
                    "SELECT * FROM users WHERE email=?",
                    [credentials.email]
                );

                if (results.length > 0) {
                    const user = results[0];

                    const checkPassworkd = await comparePassword(
                        credentials.password,
                        user.password
                    );

                    if (checkPassworkd) {
                        return { email: user.email, name: user.name };
                    } else {
                        throw new Error("password not match");
                    }
                } else {
                    throw new Error("No user found");
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
