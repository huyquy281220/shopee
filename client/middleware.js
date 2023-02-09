// import { NextResponse, NextRequest } from "next/server";
// import { getSession } from "next-auth/react";

// export async function middleware(NextRequest) {
//     const session = await getSession({ NextRequest });
//     const url = NextRequest.nextUrl.clone();
//     if (!session) {
//         url.pathName = "/auth/login";
//         return NextResponse.redirect(url);
//     }

//     return NextResponse.next();
// }
