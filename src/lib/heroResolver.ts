type HeroMap = Record<string, string>;

const cityHeroes: HeroMap = {
  paris: "/hero/cities/paris.jpg",
  rome: "/hero/cities/rome.jpg",
  london: "/hero/cities/london.jpg",
  barcelona: "/hero/cities/barcelona.jpg",
  madrid: "/hero/cities/madrid.jpg",
  vienna: "/hero/cities/vienna.jpg",
  prague: "/hero/cities/prague.jpg",
  amsterdam: "/hero/cities/amsterdam.jpg",
  tokyo: "/hero/cities/tokyo.jpg",
  "new-york": "/hero/cities/new-york.jpg",
  berlin: "/hero/cities/berlin.jpg"
};

const countryHeroes: HeroMap = {
  france: "/hero/countries/france.jpg",
  italy: "/hero/countries/italy.jpg",
  spain: "/hero/countries/spain.jpg",
  germany: "/hero/countries/germany.jpg",
  austria: "/hero/countries/austria.jpg",
  japan: "/hero/countries/japan.jpg",
  usa: "/hero/countries/usa.jpg",
  croatia: "/hero/countries/croatia.jpg",
  greece: "/hero/countries/greece.jpg",
  turkey: "/hero/countries/turkey.jpg"
};

const cityToCountryMap: Record<string, string> = {
  paris: "france",
  lyon: "france",
  nice: "france",

  rome: "italy",
  milan: "italy",
  venice: "italy",
  florence: "italy",
  naples: "italy",

  madrid: "spain",
  barcelona: "spain",
  seville: "spain",
  valencia: "spain",
  malaga: "spain",

  berlin: "germany",
  munich: "germany",
  hamburg: "germany",
  cologne: "germany",
  frankfurt: "germany",

  vienna: "austria",
  salzburg: "austria",
  innsbruck: "austria",
  graz: "austria",

  tokyo: "japan",
  kyoto: "japan",
  osaka: "japan",
  nara: "japan",

  athens: "greece",
  thessaloniki: "greece",
  santorini: "greece",
  mykonos: "greece",

  istanbul: "turkey",
  izmir: "turkey",
  antalya: "turkey",
  cappadocia: "turkey",

  dubrovnik: "croatia",
  split: "croatia",
  zagreb: "croatia",
  zadar: "croatia",
  pula: "croatia",

  "new-york": "usa",
  "los-angeles": "usa",
  chicago: "usa",
  miami: "usa",
  boston: "usa",
  "san-francisco": "usa",
  "las-vegas": "usa"
};

function normalizeKey(value?: string | null): string {
  if (!value) return "";

  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveCountryKey(cityKey: string, country?: string): string {
  const explicitCountryKey = normalizeKey(country);

  if (explicitCountryKey && countryHeroes[explicitCountryKey]) {
    return explicitCountryKey;
  }

  return cityToCountryMap[cityKey] || "";
}

function formatCountryLabel(countryKey: string): string {
  if (!countryKey) return "";

  if (countryKey === "usa") return "USA";

  return countryKey
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getResolvedCountryKey(city: string, country?: string): string {
  const cityKey = normalizeKey(city);
  return resolveCountryKey(cityKey, country);
}

export function getResolvedCountryLabel(city: string, country?: string): string {
  const countryKey = getResolvedCountryKey(city, country);
  return formatCountryLabel(countryKey);
}

export function getHeroImage(city: string, country?: string): string {
  const cityKey = normalizeKey(city);

  if (cityKey && cityHeroes[cityKey]) {
    return cityHeroes[cityKey];
  }

  const countryKey = resolveCountryKey(cityKey, country);

  if (countryKey && countryHeroes[countryKey]) {
    return countryHeroes[countryKey];
  }

  return "/hero/generic/default.jpg";
}