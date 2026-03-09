"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import HeroBanner from "@/components/HeroBanner";
import { theme } from "@/lib/theme";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

type DayPlan = {
  day: number;
  morning: string[];
  afternoon: string[];
  evening: string[];
};

type GeneratedPlan = {
  city: string;
  days: number;
  pace: "relaxed" | "balanced" | "packed";
  itinerary: DayPlan[];
};

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isDayPlan(value: unknown): value is DayPlan {
  if (typeof value !== "object" || value === null) return false;

  const raw = value as Record<string, unknown>;

  return (
    typeof raw.day === "number" &&
    isStringArray(raw.morning) &&
    isStringArray(raw.afternoon) &&
    isStringArray(raw.evening)
  );
}

function isGeneratedPlan(value: unknown): value is GeneratedPlan {
  if (typeof value !== "object" || value === null) return false;

  const raw = value as Record<string, unknown>;

  return (
    typeof raw.city === "string" &&
    typeof raw.days === "number" &&
    (raw.pace === "relaxed" || raw.pace === "balanced" || raw.pace === "packed") &&
    Array.isArray(raw.itinerary) &&
    raw.itinerary.every(isDayPlan)
  );
}

function SectionBlock({
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

function AppCTASection({ locale }: { locale: string }) {
  return (
    <section
      className="rounded-3xl border p-8 text-center shadow-sm md:p-10"
      style={{
        backgroundColor: theme.surface,
        borderColor: theme.border,
        boxShadow: "0 12px 40px rgba(24, 50, 75, 0.06)"
      }}
    >
      <div className="mx-auto max-w-3xl">
        <p
          className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
          style={{ color: theme.accent }}
        >
          Continue in the app
        </p>

        <h2
          className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: theme.textPrimary }}
        >
          Want a more detailed trip plan?
        </h2>

        <p
          className="text-lg leading-8"
          style={{ color: theme.textSecondary }}
        >
          Install the Vagabundo iOS app for the full travel planning experience.
          Get interactive maps, more places to explore, and multiple AI plan variants for each day.
        </p>

        <p
          className="mt-4 text-lg leading-8"
          style={{ color: theme.textSecondary }}
        >
          Save trips, plan road journeys, and share your itineraries with friends.
        </p>

        <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
          <div
            className="rounded-2xl border p-5"
            style={{
              backgroundColor: theme.surfaceSoft,
              borderColor: theme.border
            }}
          >
            <h3
              className="mb-2 text-base font-semibold"
              style={{ color: theme.textPrimary }}
            >
              More features in the app
            </h3>

            <ul
              className="space-y-2 leading-7"
              style={{ color: theme.textSecondary }}
            >
              <li>• Interactive maps and richer trip details</li>
              <li>• Multiple AI plan variants for each day</li>
              <li>• Road trip planning and more travel tools</li>
            </ul>
          </div>

          <div
            className="rounded-2xl border p-5"
            style={{
              backgroundColor: theme.surfaceSoft,
              borderColor: theme.border
            }}
          >
            <h3
              className="mb-2 text-base font-semibold"
              style={{ color: theme.textPrimary }}
            >
              Keep planning on iPhone
            </h3>

            <ul
              className="space-y-2 leading-7"
              style={{ color: theme.textSecondary }}
            >
              <li>• Save trips and revisit them later</li>
              <li>• Share plans with friends and family</li>
              <li>• Build more complete travel itineraries</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`/${locale}/features`}
            className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-semibold transition"
            style={{
              borderColor: theme.border,
              color: theme.textPrimary,
              backgroundColor: theme.surfaceSoft
            }}
          >
            {locale === "bs" ? "Saznaj više" : "Learn more"}
          </Link>

          <a
            href="https://apps.apple.com/ba/app/vagabundo/id6754535676"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/appstore-badge.svg"
              alt="Download on the App Store"
              className="inline-flex h-14 items-center justify-center"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ResultPageClient() {
  const [plan, setPlan] = useState<GeneratedPlan | null>(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const locale = typeof params.locale === "string" ? params.locale : "en";

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("vagabundo_latest_plan");

      if (!raw) {
        setPlan(null);
        setLoading(false);
        return;
      }

      const parsed: unknown = JSON.parse(raw);

      if (!isGeneratedPlan(parsed)) {
        console.error("Invalid saved plan structure:", parsed);
        setPlan(null);
        setLoading(false);
        return;
      }

      setPlan(parsed);
    } catch (error) {
      console.error("Failed to read saved plan:", error);
      setPlan(null);
    }

    setLoading(false);
  }, []);

  const fallbackCity = useMemo(() => {
    return searchParams.get("city") || "your city";
  }, [searchParams]);

  if (loading) {
    return (
      <main
        className="min-h-screen px-6 py-12"
        style={{
          backgroundColor: theme.background,
          color: theme.textPrimary
        }}
      >
        <div className="mx-auto max-w-4xl">
          <div className="animate-pulse space-y-6">
            <div
              className="h-10 w-56 rounded"
              style={{ backgroundColor: "#E9E2D6" }}
            />
            <div
              className="h-24 rounded-2xl"
              style={{ backgroundColor: "#F3EDE2" }}
            />
            <div
              className="h-56 rounded-3xl"
              style={{ backgroundColor: "#F3EDE2" }}
            />
            <div
              className="h-56 rounded-3xl"
              style={{ backgroundColor: "#F3EDE2" }}
            />
          </div>
        </div>
      </main>
    );
  }

  if (!plan) {
    return (
      <main
        className="min-h-screen"
        style={{
          backgroundColor: theme.background,
          color: theme.textPrimary
        }}
      >
        <SiteHeader locale={locale} />

        <div className="px-6 py-12">
          <div className="mx-auto max-w-2xl">
            <div
              className="rounded-3xl border p-8 shadow-sm"
              style={{
                backgroundColor: theme.surface,
                borderColor: theme.border,
                boxShadow: "0 12px 40px rgba(24, 50, 75, 0.08)"
              }}
            >
              <p
                className="mb-3 text-sm uppercase tracking-[0.2em]"
                style={{ color: theme.accent }}
              >
                Vagabundo
              </p>

              <h1 className="mb-4 text-3xl font-bold">
                No saved plan found
              </h1>

              <p
                className="mb-6 leading-7"
                style={{ color: theme.textSecondary }}
              >
                We could not find a generated itinerary for {fallbackCity}. Please go back and generate a new trip plan.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/${locale}`}
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white transition"
                  style={{ backgroundColor: theme.accent }}
                >
                  Back to planner
                </Link>

                <button
                  onClick={() => router.back()}
                  className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-semibold transition"
                  style={{
                    borderColor: theme.border,
                    color: theme.textPrimary,
                    backgroundColor: theme.surfaceSoft
                  }}
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>

        <SiteFooter />
      </main>
    );
  }

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: theme.background,
        color: theme.textPrimary
      }}
    >
      <SiteHeader locale={locale} />

      <div className="px-6 pt-6">
        <HeroBanner
          city={plan.city}
          days={plan.days}
          pace={plan.pace}
          dailyPlansCount={plan.itinerary.length}
        />
      </div>

      <div className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center text-sm transition"
              style={{ color: theme.textSecondary }}
            >
              ← Back to planner
            </Link>
          </div>

          <div className="space-y-8">
            {plan.itinerary.map((day) => (
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

                  <h2 className="text-2xl font-bold">
                    Day {day.day}
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <SectionBlock title="Morning" items={day.morning} />
                  <SectionBlock title="Afternoon" items={day.afternoon} />
                  <SectionBlock title="Evening" items={day.evening} />
                </div>
              </section>
            ))}

            <AppCTASection locale={locale} />
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}