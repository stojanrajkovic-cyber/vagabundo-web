import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { theme } from "@/lib/theme";
import {
  getCityBySlug,
  getStarterSeoCities,
  type SeoCity
} from "@/lib/citySeo";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export const dynamicParams = true;

function buildTitle(city: SeoCity) {
  return `${city.city} itinerary – AI travel planner | Vagabundo`;
}

function buildDescription(city: SeoCity) {
  return `Plan a trip to ${city.city}, ${city.country} with Vagabundo. Explore a sample itinerary and generate your own travel plan in seconds.`;
}

function buildExampleItinerary(city: SeoCity) {
  return [
    {
      day: 1,
      morning: [
        `Start with a relaxed walk through ${city.city}`,
        `Visit a historic area or landmark`
      ],
      afternoon: [
        `Enjoy lunch at a local restaurant`,
        `Explore museums, squares, or viewpoints`
      ],
      evening: [
        `Have dinner in a lively neighborhood`,
        `Take an evening stroll through the city`
      ]
    },
    {
      day: 2,
      morning: [
        `Discover another side of ${city.city}`,
        `Visit cafés, markets, or scenic streets`
      ],
      afternoon: [
        `Explore a top attraction at a comfortable pace`,
        `Pause for coffee or local dessert`
      ],
      evening: [
        `Enjoy dinner with a city view`,
        `Spend the evening in a popular district`
      ]
    },
    {
      day: 3,
      morning: [
        `Revisit a favorite part of ${city.city}`,
        `Keep the morning flexible for last-minute stops`
      ],
      afternoon: [
        `Have one final meal in the city`,
        `Leave room for spontaneous exploration`
      ],
      evening: [
        `End the trip with one more scenic stop`,
        `Wrap up your short city break`
      ]
    }
  ];
}

export async function generateStaticParams() {
  return getStarterSeoCities().flatMap((city) => [
    { locale: "en", slug: city.slug },
    { locale: "bs", slug: city.slug }
  ]);
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {
      title: "City itinerary | Vagabundo"
    };
  }

  return {
    title: buildTitle(city),
    description: buildDescription(city)
  };
}

function SectionCard({
  title,
  items
}: {
  title: string;
  items: string[];
}) {
  return (
    <div
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: theme.surfaceSoft,
        borderColor: theme.border
      }}
    >
      <h3
        className="mb-3 text-base font-semibold"
        style={{ color: theme.textPrimary }}
      >
        {title}
      </h3>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={`${title}-${index}-${item}`}
            className="flex items-start gap-3 leading-7"
            style={{ color: theme.textSecondary }}
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: theme.accent }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function CitySeoPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const itinerary = buildExampleItinerary(city);

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: theme.background,
        color: theme.textPrimary
      }}
    >
      <SiteHeader locale={locale || "en"} />

      <section className="px-6 pt-10 pb-6">
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
            style={{ color: theme.accent }}
          >
            Vagabundo city guide
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            {city.city} itinerary ideas with AI
          </h1>

          <p
            className="mt-5 max-w-3xl text-lg leading-8"
            style={{ color: theme.textSecondary }}
          >
            Planning a trip to {city.city}, {city.country}? Vagabundo helps you
            build day-by-day travel plans faster. Use this page for inspiration,
            then generate your own trip plan.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${locale || "en"}`}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white transition"
              style={{ backgroundColor: theme.accent }}
            >
              Generate a plan
            </Link>

            <Link
            href={`/${locale}/features`}
            className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-semibold transition"
            style={{
                borderColor: theme.border,
                color: theme.textPrimary,
                backgroundColor: theme.surface
            }}
            >
            {locale === "bs" ? "Saznaj više" : "Learn more"}
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

      <section className="px-6 py-6">
        <div className="mx-auto max-w-5xl">
          <div
            className="rounded-3xl border p-6 shadow-sm md:p-8"
            style={{
              backgroundColor: theme.surface,
              borderColor: theme.border,
              boxShadow: "0 12px 40px rgba(24, 50, 75, 0.06)"
            }}
          >
            <p
              className="mb-2 text-sm uppercase tracking-[0.2em]"
              style={{ color: theme.accent }}
            >
              Example itinerary
            </p>

            <h2 className="text-2xl font-bold md:text-3xl">
              Sample 3-day {city.city} itinerary
            </h2>

            <p
              className="mt-3 max-w-3xl leading-7"
              style={{ color: theme.textSecondary }}
            >
              This is a simple static example designed for inspiration and SEO.
              The actual generated plan in Vagabundo can be adjusted to your pace.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto max-w-5xl space-y-8">
          {itinerary.map((day) => (
            <section
              key={day.day}
              className="rounded-3xl border p-6 shadow-sm md:p-8"
              style={{
                backgroundColor: theme.surface,
                borderColor: theme.border,
                boxShadow: "0 12px 40px rgba(24, 50, 75, 0.06)"
              }}
            >
              <div className="mb-6">
                <p
                  className="mb-2 text-sm uppercase tracking-[0.2em]"
                  style={{ color: theme.accent }}
                >
                  Itinerary
                </p>

                <h2 className="text-2xl font-bold">Day {day.day}</h2>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <SectionCard title="Morning" items={day.morning} />
                <SectionCard title="Afternoon" items={day.afternoon} />
                <SectionCard title="Evening" items={day.evening} />
              </div>
            </section>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}