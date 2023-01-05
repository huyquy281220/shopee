import { withAuth } from "next-auth/middleware";

// export { default } from "next-auth/middleware";

export const config = { matcher: ["/products"] };


export default withAuth({
    matcher: ["/products"],
    pages: {
        signIn: "/auth/login",
        signUp: "/auth/register",
    }
});