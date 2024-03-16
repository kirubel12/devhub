import { NextResponse } from "next/server";
import { auth } from "./auth";
import { NextApiRequest, NextApiResponse } from "next";
export default async function middleware(req: NextApiRequest, res: NextApiResponse) {
    const session = await auth();

    if (session){
    return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/', req.url));

}

export const config = {
    matcher: ['/dashboard', '/project', '/message'],
}