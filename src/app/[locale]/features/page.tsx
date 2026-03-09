import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { theme } from "@/lib/theme";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "bs"
      ? "Mogućnosti Vagabundo aplikacije | Vagabundo"
      : "Vagabundo app features | Vagabundo";

  const description =
    locale === "bs"
      ? "Saznaj kako Vagabundo pomaže da brže napraviš pametne planove putovanja uz AI, mape, city break ideje i iOS aplikaciju."
      : "Discover how Vagabundo helps you build smarter travel plans faster with AI itineraries, maps, city-break ideas, and the iOS app.";

  return {
    title,
    description
  };
}

function FeatureCard({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="rounded-3xl border p-6 shadow-sm"
      style={{
        backgroundColor: theme.surface,
        borderColor: theme.border,
        boxShadow: "0 12px 40px rgba(24, 50, 75, 0.06)"
      }}
    >
      <p
        className="mb-2 text-xs font-medium uppercase tracking-[0.2em]"
        style={{ color: theme.accent }}
      >
        {eyebrow}
      </p>

      <h3
        className="text-xl font-semibold"
        style={{ color: theme.textPrimary }}
      >
        {title}
      </h3>

      <p
        className="mt-3 leading-7"
        style={{ color: theme.textSecondary }}
      >
        {text}
      </p>
    </div>
  );
}

function ScreenshotCard({
  title,
  text,
  imageSrc
}: {
  title: string;
  text: string;
  imageSrc: string;
}) {
  return (
    <div
      className="rounded-3xl border p-4 shadow-sm"
      style={{
        backgroundColor: theme.surface,
        borderColor: theme.border,
        boxShadow: "0 12px 40px rgba(24, 50, 75, 0.06)"
      }}
    >
      <div
        className="overflow-hidden rounded-2xl border"
        style={{ borderColor: theme.border }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="h-auto w-full object-cover"
        />
      </div>

      <h3
        className="mt-4 text-lg font-semibold"
        style={{ color: theme.textPrimary }}
      >
        {title}
      </h3>

      <p
        className="mt-2 leading-7"
        style={{ color: theme.textSecondary }}
      >
        {text}
      </p>
    </div>
  );
}

export default async function FeaturesPage({ params }: PageProps) {
  const { locale } = await params;
  const isBs = locale === "bs";

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: theme.background,
        color: theme.textPrimary
      }}
    >
      <SiteHeader locale={locale} />

      <section className="px-6 pt-12 pb-8">
        <div className="mx-auto max-w-6xl">
          <p
            className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
            style={{ color: theme.accent }}
          >
            {isBs ? "Vagabundo aplikacija" : "Vagabundo app"}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            {isBs
              ? "AI planer putovanja koji ti štedi sate planiranja"
              : "An AI travel planner that saves hours of planning"}
          </h1>

          <p
            className="mt-6 max-w-3xl text-lg leading-8"
            style={{ color: theme.textSecondary }}
          >
            {isBs
              ? "Vagabundo pomaže da iz nekoliko izbora dobiješ jasan plan putovanja po danima. Umjesto da skakućeš između blogova, mapa i bilješki, dobiješ strukturiran plan koji je lakše pratiti i kasnije proširiti u aplikaciji."
              : "Vagabundo helps you turn a few simple choices into a clear day-by-day trip plan. Instead of jumping between blogs, maps, and notes, you get a structured itinerary that is easy to follow and expand in the app."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white transition"
              style={{ backgroundColor: theme.accent }}
            >
              {isBs ? "Otvori planer" : "Open planner"}
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

      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard
            eyebrow={isBs ? "AI planovi" : "AI itineraries"}
            title={isBs ? "Plan po danima" : "Day-by-day structure"}
            text={
              isBs
                ? "Generiši jasan raspored po danima i segmentima dana, tako da odmah vidiš kako putovanje može izgledati."
                : "Generate a clear trip structure by day and time segment, so you can instantly see how the journey could flow."
            }
          />

          <FeatureCard
            eyebrow={isBs ? "Pametno planiranje" : "Smarter planning"}
            title={isBs ? "Manje haosa, više fokusa" : "Less chaos, more focus"}
            text={
              isBs
                ? "Umjesto ručnog skupljanja ideja sa više mjesta, Vagabundo ti daje početnu verziju plana koju je lakše doraditi."
                : "Instead of manually collecting ideas from many places, Vagabundo gives you a starting plan that is much easier to refine."
            }
          />

          <FeatureCard
            eyebrow={isBs ? "Više u aplikaciji" : "More in the app"}
            title={isBs ? "Punije iskustvo na iPhone-u" : "A richer iPhone experience"}
            text={
              isBs
                ? "iOS aplikacija donosi više detalja, bolje iskustvo planiranja i dodatne mogućnosti za stvarna putovanja."
                : "The iOS app adds more detail, a better planning flow, and extra tools that make the experience more useful for real trips."
            }
          />

          <FeatureCard
            eyebrow={isBs ? "Mape" : "Maps"}
            title={isBs ? "Bolja prostorna slika" : "A clearer spatial view"}
            text={
              isBs
                ? "Lakše razumiješ raspored aktivnosti i logiku dana kada plan ima jasniju strukturu i bolju povezanost sa lokacijama."
                : "It is easier to understand the day when the itinerary has a stronger structure and a clearer connection to places."
            }
          />

          <FeatureCard
            eyebrow={isBs ? "City break" : "City breaks"}
            title={isBs ? "Brzo za vikend putovanja" : "Fast for short trips"}
            text={
              isBs
                ? "Odlično za kratka putovanja kada nemaš vremena praviti plan od nule."
                : "Especially useful for short getaways when you do not want to build everything from scratch."
            }
          />

          <FeatureCard
            eyebrow={isBs ? "Konverzija u app" : "Continue in app"}
            title={isBs ? "Nastavi gdje web stane" : "Go beyond the web version"}
            text={
              isBs
                ? "Web je odličan za prvi korak i inspiraciju, a aplikacija je mjesto gdje Vagabundo pokazuje punu vrijednost."
                : "The web version is great for a first step and inspiration, while the app is where Vagabundo shows its full value."
            }
          />
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-3xl border p-8 shadow-sm md:p-10"
            style={{
              backgroundColor: theme.surface,
              borderColor: theme.border,
              boxShadow: "0 12px 40px rgba(24, 50, 75, 0.06)"
            }}
          >
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: theme.accent }}
            >
              {isBs ? "Zašto djeluje drugačije" : "Why it feels different"}
            </p>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
              {isBs
                ? "Vagabundo nije samo lista mjesta, nego okvir za stvarni plan"
                : "Vagabundo is not just a list of places, but a framework for a real trip"}
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold">
                  {isBs ? "Jasniji početak" : "A clearer starting point"}
                </h3>
                <p
                  className="mt-2 leading-7"
                  style={{ color: theme.textSecondary }}
                >
                  {isBs
                    ? "Dobiješ strukturu koja smanjuje mentalni napor i ubrzava donošenje odluka."
                    : "You get a structure that reduces mental load and helps you make decisions faster."}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  {isBs ? "Lakše dorade" : "Easier refinement"}
                </h3>
                <p
                  className="mt-2 leading-7"
                  style={{ color: theme.textSecondary }}
                >
                  {isBs
                    ? "Kada već imaš dobar nacrt, lakše je prilagoditi tempo, broj dana i prioritete."
                    : "Once you already have a good draft, it becomes much easier to adapt pace, trip length, and priorities."}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  {isBs ? "Bolji osjećaj vrijednosti" : "Better perceived value"}
                </h3>
                <p
                  className="mt-2 leading-7"
                  style={{ color: theme.textSecondary }}
                >
                  {isBs
                    ? "Korisnik brže vidi smisao proizvoda kada odmah dobije konkretan, pregledan rezultat."
                    : "Users understand the product faster when they immediately get a concrete and easy-to-scan result."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: theme.accent }}
            >
              {isBs ? "Prikaz aplikacije" : "App preview"}
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {isBs
                ? "Pogledaj kako Vagabundo izgleda u praksi"
                : "See how Vagabundo looks in practice"}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <ScreenshotCard
              imageSrc="/app-preview/vagabundo-1.png"
              title={isBs ? "Plan po danima" : "Day-by-day itinerary"}
              text={
                isBs
                  ? "Pregled dana i aktivnosti u formatu koji je lakše pratiti."
                  : "A clearer overview of each day in a format that is easier to scan."
              }
            />

            <ScreenshotCard
              imageSrc="/app-preview//vagabundo-2.png"
              title={isBs ? "Pametnije iskustvo planiranja" : "Smarter planning flow"}
              text={
                isBs
                  ? "Brže dođeš od ideje do korisnog plana putovanja."
                  : "Move from idea to a useful trip plan much faster."
              }
            />

            <ScreenshotCard
              imageSrc="/app-preview//vagabundo-3.png"
              title={isBs ? "Više detalja u aplikaciji" : "More depth in the app"}
              text={
                isBs
                  ? "Aplikacija nudi punije iskustvo od web verzije."
                  : "The app offers a richer experience than the web version."
              }
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div
            className="rounded-3xl border p-8 text-center shadow-sm md:p-10"
            style={{
              backgroundColor: theme.surface,
              borderColor: theme.border,
              boxShadow: "0 12px 40px rgba(24, 50, 75, 0.06)"
            }}
          >
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: theme.accent }}
            >
              {isBs ? "Spreman za dalje?" : "Ready to continue?"}
            </p>

            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {isBs
                ? "Isprobaj planner ili preuzmi aplikaciju"
                : "Try the planner or download the app"}
            </h2>

            <p
              className="mx-auto max-w-3xl text-lg leading-8"
              style={{ color: theme.textSecondary }}
            >
              {isBs
                ? "Počni na webu za brz primjer plana, a zatim nastavi u aplikaciji za punije iskustvo."
                : "Start on the web for a fast trip example, then continue in the app for a richer experience."}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white transition"
                style={{ backgroundColor: theme.accent }}
              >
                {isBs ? "Otvori planner" : "Open planner"}
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
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}