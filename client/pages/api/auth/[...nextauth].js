import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            name: "Google",
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            async authorise(credentials) {
                try {
                    const user = await axios.post("http://localhost:4000/auth/login", { email: credentials.email, password: credentials.password });
                    if (user.data) {
                        return user.data;
                    } else {
                        return null;
                    }
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
    },
};

export default NextAuth(authOptions);
