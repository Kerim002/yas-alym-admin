import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { url, cookies } = request;
  const hasToken = cookies.get("accessToken");
  const isLoginPage = url.includes("/login");

  if (isLoginPage && hasToken) {
    return NextResponse.redirect(new URL("/courses", url));
  }
  if (isLoginPage) {
    return NextResponse.next();
  }
  if (!hasToken) {
    return NextResponse.redirect(new URL("/login", url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login/:path*",
    "/courses/:path*",
    "/sections/:path*",
    "/units/:path*",
    "/lessons/:path*",
    "/exercises/:path*",
  ],
};
