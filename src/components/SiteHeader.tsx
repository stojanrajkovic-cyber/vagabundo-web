import Link from "next/link";
import { theme } from "@/lib/theme";

export default function SiteHeader({
  locale
}: {
  locale: string;
}) {
  return (
    <header className="px-6 pt-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-3"
        >
          <img
            src="/logo.svg"
            alt="Vagabundo logo"
            className="h-8 w-8 md:h-9 md:w-9"
          />

          <span
            className="text-sm font-semibold uppercase tracking-[0.28em]"
            style={{ color: theme.accent }}
          >
            Vagabundo
          </span>
        </Link>
        <Link
        href={`/${locale}/features`}
        className="text-sm font-medium transition"
        style={{ color: theme.textSecondary }}
        >
          {locale === "bs" ? "Saznaj više" : "Learn more"}
        </Link>
      </div>
    </header>
  );
}