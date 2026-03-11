import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["en", "bs", "de", "fr", "it", "es"] as const;
const DEFAULT_LOCALE = "en";

function getPreferredLocale(request: NextRequest): string {
    const header = request.headers.get("accept-language");

    if (!header) return DEFAULT_LOCALE;

    const languages = header
        .split(",")
        .map((lang) => lang.split(";")[0].trim().toLowerCase());

    for (const lang of languages) {
        const base = lang.split("-")[0];

        if (SUPPORTED_LOCALES.includes(base as (typeof SUPPORTED_LOCALES)[number])) {
            return base;
        }
    }

    return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Ako korisnik otvori share link bez locale prefiksa, npr. /p/abc123
    // preusmjeri ga na /en/p/abc123 ili drugi preferirani jezik iz browsera.
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