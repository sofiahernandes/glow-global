import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher:
    "/((?!api/auth|_next/static|_next/image|favicon.ico|public|png|images).*)",
};