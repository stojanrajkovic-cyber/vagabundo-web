import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["en", "bs", "de", "fr", "it", "es"];

function getPreferredLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");

  if (!header) return "en";

  const languages = header
    .split(",")
    .map((lang) => lang.split(";")[0].trim().toLowerCase());

  for (const lang of languages) {
    const base = lang.split("-")[0];

    if (SUPPORTED_LOCALES.includes(base)) {
      return base;
    }
  }

  return "en";
}

export function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl;

  // Ako je link /p/token
  if (pathname.startsWith("/p/")) {

    const locale = getPreferredLocale(request);

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/p/:path*"]
};