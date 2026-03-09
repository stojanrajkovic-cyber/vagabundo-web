"use client";

import { useEffect, useState } from "react";
import { initializeCities } from "@/lib/citySearch";
import CityAutocomplete from "@/components/CityAutocomplete";
import { useRouter, useParams } from "next/navigation";
import { theme } from "@/lib/theme";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PopularDestinations from "@/components/PopularDestinations";
import Link from "next/link";

function HowItWorksCard({
  step,
  title,
  description
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="rounded-[24px] border p-6 shadow-sm"
      style={{
        backgroundColor: theme.surface,
        borderColor: theme.border,
        boxShadow: "0 12px 40px rgba(24, 50, 75, 0.06)"
      }}
    >
      <p
        className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
        style={{ color: theme.accent }}
      >
        {step}
      </p>

      <h3
        className="mb-3 text-xl font-semibold"
        style={{ color: theme.textPrimary }}
      >
        {title}
      </h3>

      <p
        className="leading-7"
        style={{ color: theme.textSecondary }}
      >
        {description}
      </p>
    </div>
  );
}

function AppFeatureCard({
  title,
  items
}: {
  title: string;
  items: string[];
}) {
  return (
    <div
      className="rounded-[24px] border p-6 shadow-sm"
      style={{
        backgroundColor: theme.surface,
        borderColor: theme.border,
        boxShadow: "0 12px 40px rgba(24, 50, 75, 0.06)"
      }}
    >
      <h3
        className="mb-4 text-xl font-semibold"
        style={{ color: theme.textPrimary }}
      >
        {title}
      </h3>

      <ul
        className="space-y-3 leading-7"
        style={{ color: theme.textSecondary }}
      >
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function AppPreviewSection({ locale }: { locale: string }) {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p
            className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
            style={{ color: theme.accent }}
          >
            Why install the app
          </p>

          <h2
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: theme.textPrimary }}
          >
            The web planner is a quick preview
          </h2>

          <p
            className="text-lg leading-8"
            style={{ color: theme.textSecondary }}
          >
            Vagabundo Web gives you a quick AI-generated itinerary. The full experience lives in the iOS app, where trip planning is much richer, more flexible, and built for real travel use.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AppFeatureCard
            title="What you get in the iPhone app"
            items={[
              "Interactive maps with routes and points of interest",
              "More detailed daily plans and richer travel suggestions",
              "Multiple AI-generated variants for each day",
              "Road trip planning and smarter trip tools",
              "Select your interests and activities you like for more personalized plans"
            ]}
          />

          <AppFeatureCard
            title="Why continue in Vagabundo"
            items={[
              "Save trips and revisit them later",
              "Share itineraries with friends and family",
              "Explore more travel options in one place",
              "Plan with a cleaner, more complete workflow",
              "Use your plans on the go with offline access and mobile convenience"
            ]}
          />
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

        <div className="mt-20">
          <div className="mb-6 max-w-2xl">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: theme.accent }}
            >
              App preview
            </p>

            <h3
              className="text-2xl font-bold tracking-tight"
              style={{ color: theme.textPrimary }}
            >
              See what the full experience looks like
            </h3>
          </div>

          <div className="grid justify-center gap-8 md:grid-cols-3">
            <div
              className="mx-auto w-[260px] overflow-hidden rounded-[36px] border shadow-sm"
              style={{
                backgroundColor: theme.surface,
                borderColor: theme.border,
                boxShadow: "0 20px 60px rgba(24,50,75,0.18)"
              }}
            >
              <img
                src="/app-preview/plan.png"
                alt="Vagabundo plan preview"
                className="h-full w-full object-cover"
              />
            </div>

            <div
              className="mx-auto w-[260px] overflow-hidden rounded-[36px] border shadow-sm"
              style={{
                backgroundColor: theme.surface,
                borderColor: theme.border,
                boxShadow: "0 20px 60px rgba(24,50,75,0.18)"
              }}
            >
              <img
                src="/app-preview/map.png"
                alt="Vagabundo map preview"
                className="h-full w-full object-cover"
              />
            </div>

            <div
              className="mx-auto w-[260px] overflow-hidden rounded-[36px] border shadow-sm"
              style={{
                backgroundColor: theme.surface,
                borderColor: theme.border,
                boxShadow: "0 20px 60px rgba(24,50,75,0.18)"
              }}
            >
              <img
                src="/app-preview/explore.png"
                alt="Vagabundo explore preview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [city, setCity] = useState("");
  const [days, setDays] = useState(3);
  const [pace, setPace] = useState("balanced");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const params = useParams();
  const locale = typeof params.locale === "string" ? params.locale : "en";

  useEffect(() => {
    initializeCities();
  }, []);

  async function handleGenerate() {
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          city,
          days,
          pace
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to generate plan.");
        setLoading(false);
        return;
      }

      sessionStorage.setItem("vagabundo_latest_plan", JSON.stringify(data));

      router.push(
        `/${locale}/result?city=${encodeURIComponent(city)}&days=${days}&pace=${pace}`
      );
    } catch (err) {
      console.error("Generation error:", err);
      setError("Unexpected error while generating the plan.");
    }

    setLoading(false);
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

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-16 pt-14 text-center md:pt-20">
        <div className="mb-12 max-w-3xl">
          <p
            className="mb-4 text-sm font-medium uppercase tracking-[0.25em]"
            style={{ color: theme.accent }}
          >
            Plan smarter
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            Plan your next trip with AI
          </h1>

          <p
            className="mx-auto max-w-2xl text-lg leading-8 md:text-xl"
            style={{ color: theme.textSecondary }}
          >
            Generate clean, day-by-day itineraries in seconds. Choose a city, set your pace, and let Vagabundo build your trip.
          </p>
        </div>

        <div
          className="w-full max-w-xl rounded-[28px] border p-6 shadow-sm md:p-8"
          style={{
            backgroundColor: theme.surface,
            borderColor: theme.border,
            boxShadow: "0 12px 40px rgba(24, 50, 75, 0.08)"
          }}
        >
          <div className="flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium"
                style={{ color: theme.textSecondary }}
              >
                City
              </label>

              <CityAutocomplete
                value={city}
                onChange={setCity}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium"
                style={{ color: theme.textSecondary }}
              >
                Days
              </label>

              <select
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="rounded-xl border px-4 py-3 text-lg outline-none transition"
                style={{
                  borderColor: theme.border,
                  backgroundColor: theme.surfaceSoft,
                  color: theme.textPrimary
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                  <option key={d} value={d}>
                    {d} {d === 1 ? "day" : "days"}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium"
                style={{ color: theme.textSecondary }}
              >
                Trip pace
              </label>

              <select
                value={pace}
                onChange={(e) => setPace(e.target.value)}
                className="rounded-xl border px-4 py-3 text-lg outline-none transition"
                style={{
                  borderColor: theme.border,
                  backgroundColor: theme.surfaceSoft,
                  color: theme.textPrimary
                }}
              >
                <option value="relaxed">Relaxed</option>
                <option value="balanced">Balanced</option>
                <option value="packed">Packed</option>
              </select>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!city || loading}
              className="mt-2 rounded-2xl py-4 text-lg font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50"
              style={{
                backgroundColor: theme.accent,
                boxShadow: "0 10px 24px rgba(198, 146, 20, 0.28)"
              }}
              onMouseEnter={(e) => {
                if (!loading && city) {
                  e.currentTarget.style.backgroundColor = theme.accentHover;
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.accent;
              }}
            >
              {loading ? "Generating..." : "Generate plan"}
            </button>

            {error && (
              <p
                className="text-sm"
                style={{ color: "#B42318" }}
              >
                {error}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p
              className="mb-3 text-sm font-medium uppercase tracking-[0.22em]"
              style={{ color: theme.accent }}
            >
              How it works
            </p>

            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: theme.textPrimary }}
            >
              From idea to itinerary in three steps
            </h2>

            <p
              className="text-lg leading-8"
              style={{ color: theme.textSecondary }}
            >
              Vagabundo keeps trip planning simple. Pick a destination, choose your travel style, and get a structured plan you can actually use.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <HowItWorksCard
              step="Step 1"
              title="Choose a city"
              description="Search for your destination and pick how many days you want to spend there."
            />

            <HowItWorksCard
              step="Step 2"
              title="Set the pace"
              description="Go relaxed, balanced, or packed depending on how you want your days to feel."
            />

            <HowItWorksCard
              step="Step 3"
              title="Get your itinerary"
              description="Receive a clean day-by-day plan with morning, afternoon, and evening activities."
            />
          </div>
        </div>
      </section>

      <PopularDestinations locale={locale} />

      <AppPreviewSection locale={locale}/>

      <SiteFooter />
    </main>
  );
}