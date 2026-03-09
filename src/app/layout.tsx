import type { Metadata } from "next";
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
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vagabundo | AI Travel Planner",
    description:
      "Generate smarter trip ideas with Vagabundo and explore city itinerary pages built for modern travel planning."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}