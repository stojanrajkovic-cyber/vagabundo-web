import data from "@/data/CountriesCities.json";

export type SeoCity = {
  city: string;
  country: string;
  lat: number;
  lon: number;
  slug: string;
};

type RawCity = {
  name: string;
  lat: number;
  lon: number;
  stateCode?: string;
  stateName?: string;
};

type RawCountry = {
  code: string;
  name: string;
  capital: string;
  currency: string;
  population: number;
  cities: RawCity[];
};

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

let cachedCities: SeoCity[] | null = null;

export function getAllSeoCities(): SeoCity[] {
  if (cachedCities) return cachedCities;

  const countries = data as RawCountry[];

  cachedCities = countries.flatMap((country) =>
    country.cities.map((city) => ({
      city: city.name,
      country: country.name,
      lat: city.lat,
      lon: city.lon,
      slug: `${slugify(city.name)}-${slugify(country.name)}`
    }))
  );

  return cachedCities;
}

export function getCityBySlug(slug: string): SeoCity | null {
  const match = getAllSeoCities().find((item) => item.slug === slug);
  return match ?? null;
}

export function getSlugForCity(city: string, country: string): string {
  return `${slugify(city)}-${slugify(country)}`;
}

const STARTER_CITY_KEYS: Array<{ city: string; country: string }> = [
  { city: "Paris", country: "France" },
  { city: "Rome", country: "Italy" },
  { city: "Vienna", country: "Austria" },
  { city: "Sarajevo", country: "Bosnia and Herzegovina" },
  { city: "Barcelona", country: "Spain" },
  { city: "Madrid", country: "Spain" },
  { city: "Prague", country: "Czech Republic" },
  { city: "Budapest", country: "Hungary" },
  { city: "Amsterdam", country: "Netherlands" },
  { city: "Berlin", country: "Germany" },
  { city: "Munich", country: "Germany" },
  { city: "Lisbon", country: "Portugal" },
  { city: "Athens", country: "Greece" },
  { city: "Istanbul", country: "Turkey" },
  { city: "Mostar", country: "Bosnia and Herzegovina" },
  { city: "Dubrovnik", country: "Croatia" },
  { city: "Split", country: "Croatia" },
  { city: "Zagreb", country: "Croatia" },
  { city: "London", country: "United Kingdom" },
  { city: "New York City", country: "United States" }
];

export function getStarterSeoCities(): SeoCity[] {
  const allCities = getAllSeoCities();

  return STARTER_CITY_KEYS.map((entry) => {
    return (
      allCities.find(
        (item) =>
          item.city.toLowerCase() === entry.city.toLowerCase() &&
          item.country.toLowerCase() === entry.country.toLowerCase()
      ) ?? null
    );
  }).filter((item): item is SeoCity => item !== null);
}