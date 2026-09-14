import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/About") {
    return NextResponse.redirect(new URL("/about", request.url));
  }
  if (pathname === "/Stack") {
    return NextResponse.redirect(new URL("/stack", request.url));
  }
  if (pathname === "/Contact") {
    return NextResponse.redirect(new URL("/contact", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/About", "/Stack", "/Contact"],
};
