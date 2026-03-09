import Link from "next/link";
import { theme } from "@/lib/theme";
import { getSlugForCity } from "@/lib/citySeo";

type PopularDestinationsProps = {
  locale: string;
};

const POPULAR_DESTINATIONS: Array<{
  city: string;
  country: string;
  label: string;
}> = [
  { city: "Paris", country: "France", label: "Paris" },
  { city: "Rome", country: "Italy", label: "Rome" },
  { city: "Vienna", country: "Austria", label: "Vienna" },
  { city: "Barcelona", country: "Spain", label: "Barcelona" },
  { city: "Prague", country: "Czech Republic", label: "Prague" },
  { city: "Budapest", country: "Hungary", label: "Budapest" },
  { city: "Sarajevo", country: "Bosnia and Herzegovina", label: "Sarajevo" },
  { city: "Dubrovnik", country: "Croatia", label: "Dubrovnik" }
];

export default function PopularDestinations({
  locale
}: PopularDestinationsProps) {
  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p
            className="mb-2 text-sm font-medium uppercase tracking-[0.22em]"
            style={{ color: theme.accent }}
          >
            Popular destinations
          </p>

          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: theme.textPrimary }}
          >
            Explore city itinerary ideas
          </h2>

          <p
            className="mt-3 max-w-3xl text-lg leading-8"
            style={{ color: theme.textSecondary }}
          >
            Browse a few of the most searched city-break destinations and open a sample itinerary page before generating your own custom plan.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {POPULAR_DESTINATIONS.map((item) => {
            const slug = getSlugForCity(item.city, item.country);

            return (
              <Link
                key={`${item.city}-${item.country}`}
                href={`/${locale}/city/${slug}`}
                className="rounded-3xl border p-5 transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                  boxShadow: "0 12px 40px rgba(24, 50, 75, 0.06)"
                }}
              >
                <div className="flex h-full flex-col">
                  <p
                    className="mb-2 text-sm uppercase tracking-[0.18em]"
                    style={{ color: theme.accent }}
                  >
                    City guide
                  </p>

                  <h3
                    className="text-xl font-semibold"
                    style={{ color: theme.textPrimary }}
                  >
                    {item.label}
                  </h3>

                  <p
                    className="mt-2 text-sm leading-6"
                    style={{ color: theme.textSecondary }}
                  >
                    {item.country}
                  </p>

                  <div className="mt-5">
                    <span
                      className="inline-flex items-center text-sm font-medium"
                      style={{ color: theme.textPrimary }}
                    >
                      Open itinerary ideas →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}