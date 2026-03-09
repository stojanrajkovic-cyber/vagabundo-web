import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const ALLOWED_PACES = ["relaxed", "balanced", "packed"] as const;

type Pace = (typeof ALLOWED_PACES)[number];

type DayPlan = {
  day: number;
  morning: string[];
  afternoon: string[];
  evening: string[];
};

type GeneratedPlan = {
  city: string;
  days: number;
  pace: Pace;
  itinerary: DayPlan[];
};

function isValidPace(value: unknown): value is Pace {
  return typeof value === "string" && ALLOWED_PACES.includes(value as Pace);
}

function sanitizeCity(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim();
}

function sanitizeDays(value: unknown): number | null {
  if (typeof value !== "number" || !Number.isInteger(value)) return null;
  if (value < 1 || value > 7) return null;
  return value;
}

function normalizeActivityList(value: unknown, fallback: string[]): string[] {
  if (!Array.isArray(value)) return fallback;

  const cleaned = value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 4);

  return cleaned.length > 0 ? cleaned : fallback;
}

function normalizeDayPlan(value: unknown, fallbackDay: number): DayPlan {
  const raw =
    typeof value === "object" && value !== null
      ? (value as Record<string, unknown>)
      : {};

  const day =
    typeof raw.day === "number" && Number.isInteger(raw.day)
      ? raw.day
      : fallbackDay;

  return {
    day,
    morning: normalizeActivityList(raw.morning, ["Explore the local area", "Visit a top landmark"]),
    afternoon: normalizeActivityList(raw.afternoon, ["Have lunch at a local spot", "Walk through the city center"]),
    evening: normalizeActivityList(raw.evening, ["Enjoy dinner", "Take an evening stroll"])
  };
}

function normalizeGeneratedPlan(
  value: unknown,
  fallbackCity: string,
  fallbackDays: number,
  fallbackPace: Pace
): GeneratedPlan | null {
  if (typeof value !== "object" || value === null) return null;

  const raw = value as Record<string, unknown>;
  const rawItinerary = Array.isArray(raw.itinerary) ? raw.itinerary : [];

  const normalizedDays =
    typeof raw.days === "number" &&
    Number.isInteger(raw.days) &&
    raw.days >= 1 &&
    raw.days <= 7
      ? raw.days
      : fallbackDays;

  const itinerary = rawItinerary.map((item, index) =>
    normalizeDayPlan(item, index + 1)
  );

  return {
    city:
      typeof raw.city === "string" && raw.city.trim()
        ? raw.city.trim()
        : fallbackCity,
    days: normalizedDays,
    pace: isValidPace(raw.pace) ? raw.pace : fallbackPace,
    itinerary
  };
}

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error("Missing OPENAI_API_KEY on server.");
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY on server." },
        { status: 500 }
      );
    }

    const body = await req.json();

    const city = sanitizeCity(body.city);
    const days = sanitizeDays(body.days);
    const pace = body.pace;

    if (!city) {
      return NextResponse.json(
        { error: "City is required." },
        { status: 400 }
      );
    }

    if (city.length > 100) {
      return NextResponse.json(
        { error: "City name is too long." },
        { status: 400 }
      );
    }

    if (days === null) {
      return NextResponse.json(
        { error: "Days must be an integer between 1 and 7." },
        { status: 400 }
      );
    }

    if (!isValidPace(pace)) {
      return NextResponse.json(
        { error: "Trip pace must be relaxed, balanced, or packed." },
        { status: 400 }
      );
    }

    const prompt = `
Create a travel itinerary for ${city}.

Days: ${days}
Trip pace: ${pace}

Return JSON only in this exact format:

{
  "city": "${city}",
  "days": ${days},
  "pace": "${pace}",
  "itinerary": [
    {
      "day": 1,
      "morning": ["Activity 1", "Activity 2"],
      "afternoon": ["Activity 1", "Activity 2"],
      "evening": ["Activity 1", "Activity 2"]
    }
  ]
}

Rules:
- Generate exactly ${days} day objects in "itinerary".
- Each day must have "morning", "afternoon", and "evening".
- Each segment must be an array of 2 to 4 short activities.
- Every activity must be short, concrete, and user-friendly.
- Activities should sound realistic for a tourist.
- Do NOT write long paragraphs.
- Do NOT include markdown.
- Do NOT include explanations outside JSON.
- Return valid JSON only.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-5-mini",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" }
    });

    const text = completion.choices[0]?.message?.content;

    if (!text) {
      console.error("OpenAI returned empty content.");
      return NextResponse.json(
        { error: "OpenAI returned an empty response." },
        { status: 502 }
      );
    }

    let parsed: unknown;

    try {
      parsed = JSON.parse(text);
    } catch (parseError) {
      console.error("Failed to parse OpenAI JSON:", parseError);
      console.error("Raw OpenAI response:", text);

      return NextResponse.json(
        {
          error: "Failed to parse OpenAI JSON response.",
          raw: text
        },
        { status: 502 }
      );
    }

    const normalized = normalizeGeneratedPlan(parsed, city, days, pace);

    if (!normalized) {
      return NextResponse.json(
        { error: "Generated plan has invalid structure." },
        { status: 502 }
      );
    }

    if (normalized.itinerary.length !== days) {
      return NextResponse.json(
        {
          error: "Generated plan does not contain the expected number of days.",
          raw: normalized
        },
        { status: 502 }
      );
    }

    return NextResponse.json(normalized, { status: 200 });
  } catch (error) {
    console.error("Generate route error:", error);

    return NextResponse.json(
      { error: "Something went wrong while generating the itinerary." },
      { status: 500 }
    );
  }
}