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
                const isExist = await fetch(
                    "http://localhost:3000/api/users/verify",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password,
                        }),
                    }
                );
                console.log(isExist);

                const user = {
                    id: 1,
                    name: "J Smith",
                    email: "test@gmail.com",
                    password: "123",
                };
                if (user) {
                    return user;
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
