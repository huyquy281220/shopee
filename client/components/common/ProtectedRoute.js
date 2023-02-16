import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function ProtectedRoute({ children }) {
    const { data: session } = useSession();
    const router = useRouter();

    if (!session) {
        router.push("/auth/login");
    }

    return <div>{children}</div>;
}
