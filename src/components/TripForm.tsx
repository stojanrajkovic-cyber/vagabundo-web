"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CityAutocomplete from "@/components/CityAutocomplete";
import { initializeCities } from "@/lib/citySearch";
import { theme } from "@/lib/theme";

type Props = {
  locale: string;
};

export default function TripForm({ locale }: Props) {
  const [city, setCity] = useState("");
  const [days, setDays] = useState(3);
  const [pace, setPace] = useState("balanced");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city, days, pace })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to generate plan.");
        setLoading(false);
        return;
      }

      sessionStorage.setItem("vagabundo_latest_plan", JSON.stringify(data));
      router.push(`/${locale}/result?city=${encodeURIComponent(city)}&days=${days}&pace=${pace}`);
    } catch (err) {
      console.error("Generation error:", err);
      setError("Unexpected error while generating the plan.");
    }

    setLoading(false);
  }

  return (
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
          <label className="text-sm font-medium" style={{ color: theme.textSecondary }}>
            City
          </label>
          <CityAutocomplete value={city} onChange={setCity} />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" style={{ color: theme.textSecondary }}>
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
          <label className="text-sm font-medium" style={{ color: theme.textSecondary }}>
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
          <p className="text-sm" style={{ color: "#B42318" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
