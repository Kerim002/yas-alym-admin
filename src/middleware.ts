import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("accessToken");
  if (cookie) {
    NextResponse.redirect(new URL("/", request.url));
  } else {
    NextResponse.redirect(new URL("/login", request.url));
  }
}
