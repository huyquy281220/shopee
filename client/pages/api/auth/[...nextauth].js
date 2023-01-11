import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                try {
                    const user = await axios.post("https://shopee-api.vercel.app/user/login", { email: credentials.email, password: credentials.password });
                    if (user) {
                        return user.data;
                    } else {
                        return null;
                    }
                } catch (error) {
                    throw new Error(error.response.data);
                }
            },
        }),
    ],
    pages: {
        error: "/auth/login",
        signIn: "/auth/login",
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },

        // async jwt(token, user) {
        //     if (user) {
        //         token.accessToken = user.accessTokenAuth;
        //     }
        //     return token;
        // },
    },
};

export default NextAuth(authOptions);
