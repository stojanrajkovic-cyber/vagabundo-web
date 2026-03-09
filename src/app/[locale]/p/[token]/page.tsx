import type { Metadata } from "next";
import Link from "next/link";
import { theme } from "@/lib/theme";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import OpenAppRedirect from "@/components/OpenAppRedirect";

type RouteParams = {
  locale: string;
  token: string;
};

type Props = {
  params: Promise<RouteParams>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale = "en", token } = await params;

  const isBs = locale === "bs";

  const title = isBs
    ? "Plan putovanja podijeljen s vama | Vagabundo"
    : "A travel plan was shared with you | Vagabundo";

  const description = isBs
    ? "Otvorite Vagabundo aplikaciju da vidite plan putovanja koji vam je prijatelj poslao."
    : "Open the Vagabundo app to view the travel plan your friend shared with you.";

  return {
    title,
    description,
    other: {
      "apple-itunes-app": `app-id=6754535676, app-argument=https://vagabundo.app/${locale}/p/${token}`
    }
  };
}

export default async function SharedPlanLanding({ params }: Props) {
  const { locale = "en", token } = await params;
  const isBs = locale === "bs";

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: theme.background,
        color: theme.textPrimary
      }}
    >
      <OpenAppRedirect token={token} />

      <SiteHeader locale={locale} />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="mb-3 text-sm uppercase tracking-[0.22em]"
            style={{ color: theme.accent }}
          >
            Vagabundo
          </p>

          <h1 className="mb-6 text-4xl font-bold tracking-tight">
            {isBs
              ? "Prijatelj vam je poslao plan putovanja"
              : "A friend shared a travel plan with you"}
          </h1>

          <p
            className="mx-auto max-w-xl text-lg leading-8"
            style={{ color: theme.textSecondary }}
          >
            {isBs
              ? "Da biste otvorili plan koji vam je poslan, potrebno je da instalirate Vagabundo aplikaciju na vaš iPhone."
              : "To open the travel plan that was shared with you, please install the Vagabundo iOS app."}
          </p>

          <p
            className="mt-4 text-lg leading-8"
            style={{ color: theme.textSecondary }}
          >
            {isBs
              ? "U aplikaciji ćete moći vidjeti detaljan plan putovanja, mape i dodatne prijedloge za istraživanje grada."
              : "Inside the app you can see the full itinerary, maps, and additional travel suggestions."}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/${locale}/features`}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white transition"
              style={{ backgroundColor: theme.accent }}
            >
              {isBs ? "Saznaj više" : "Learn more"}
            </Link>

            <a
              href="https://apps.apple.com/ba/app/vagabundo/id6754535676"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center"
            >
              <img
                src="/appstore-badge.svg"
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}