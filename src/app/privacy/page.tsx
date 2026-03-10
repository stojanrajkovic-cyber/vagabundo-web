import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";

const languages = [
  { name: "English", code: "en" },
  { name: "Bosanski, Hrvatski, Srpski", code: "hr" },
  { name: "Deutsch", code: "de" },
  { name: "Français", code: "fr" },
  { name: "Čeština", code: "cs" },
  { name: "Italiano", code: "it" },
  { name: "Norsk Bokmål", code: "no" },
  { name: "Polski", code: "pl" },
  { name: "Русский", code: "ru" },
  { name: "Español", code: "es" },
  { name: "Türkçe", code: "tr" }
];

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader locale={"en"} />

      <main className="mx-auto max-w-2xl px-6 py-20">

        <h1 className="text-3xl font-bold mb-6">
          Privacy Policy
        </h1>

        <p className="mb-8 text-gray-600">
          Select your language to read the Vagabundo Privacy Policy.
        </p>

        <ul className="space-y-4">
          {languages.map((lang) => (
            <li key={lang.code}>
              <Link
                href={`/privacy/${lang.code}`}
                className="block rounded-xl border px-5 py-4 hover:bg-gray-50 transition"
              >
                {lang.name}
              </Link>
            </li>
          ))}
        </ul>

      </main>
    </>
  );
}