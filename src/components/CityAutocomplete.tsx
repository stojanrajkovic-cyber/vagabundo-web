"use client";

import { useEffect, useRef, useState } from "react";
import { searchCities } from "@/lib/citySearch";
import { theme } from "@/lib/theme";

type CityResult = {
  city: string;
  country: string;
};

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function CityAutocomplete({ value, onChange }: Props) {
  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<CityResult[]>([]);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  function handleChange(val: string) {
    setQuery(val);

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      setResults(searchCities(val));
    }, 150);
  }

  function selectCity(city: string) {
    setQuery(city);
    onChange(city);
    setResults([]);
  }

  return (
    <div
      className="relative w-full"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setResults([]);
        }
      }}
    >
      <input
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search city..."
        className="w-full rounded-xl border px-4 py-3 text-lg outline-none transition"
        style={{
          borderColor: theme.border,
          backgroundColor: theme.surfaceSoft,
          color: theme.textPrimary
        }}
      />

      {results.length > 0 && (
        <div
          className="absolute z-10 mt-1 w-full overflow-hidden rounded-xl border shadow-sm"
          style={{
            backgroundColor: theme.surface,
            borderColor: theme.border
          }}
        >
          {results.map((r, i) => (
            <div
              key={i}
              tabIndex={-1}
              onClick={() => selectCity(r.city)}
              className="cursor-pointer px-4 py-3 transition"
              style={{ color: theme.textPrimary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.surfaceSoft;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {r.city}, {r.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
