import { NextResponse } from "next/server";

export const middleware = (req) => {
    const token = req.cookies.get('token')

    if(!token && req.nextUrl.pathname.startsWith('/transactions')){
        return NextResponse.redirect(new URL('/Auth', req.url))
    }
}

export const config = {
    matcher: ['/transactions/:path*']
}