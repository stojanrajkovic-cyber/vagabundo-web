import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vagabundo.app"),
  title: {
    default: "Vagabundo | AI Travel Planner",
    template: "%s | Vagabundo"
  },
  description:
    "Vagabundo is an AI travel planner that helps you generate smarter trip ideas, explore city itineraries, and continue planning in the iOS app.",
  openGraph: {
    title: "Vagabundo | AI Travel Planner",
    description:
      "Generate smarter trip ideas with Vagabundo and explore city itinerary pages built for modern travel planning.",
    url: "https://www.vagabundo.app",
    siteName: "Vagabundo",
    type: "website",
    images: [{ url: "/app-preview/plan.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vagabundo | AI Travel Planner",
    description:
      "Generate smarter trip ideas with Vagabundo and explore city itinerary pages built for modern travel planning.",
    images: ["/app-preview/plan.png"]
  }
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") ?? "en";

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}