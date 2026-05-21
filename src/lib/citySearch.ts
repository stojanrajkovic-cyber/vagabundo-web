import data from "@/data/CountriesCities.json";

type RawCity = {
  name: string;
  lat: number;
  lon: number;
};

type RawCountry = {
  name: string;
  cities: RawCity[];
};

export type CityResult = {
  city: string;
  country: string;
  lat: number;
  lon: number;
};

let cities: CityResult[] = [];

export function initializeCities() {
  if (cities.length) return;

  (data as RawCountry[]).forEach((country) => {
    country.cities.forEach((city) => {
      cities.push({
        city: city.name,
        country: country.name,
        lat: city.lat,
        lon: city.lon
      });
    });
  });
}

export function searchCities(query: string): CityResult[] {
  if (!query) return [];

  const q = query.toLowerCase();

  return cities
    .filter((c) => c.city.toLowerCase().startsWith(q))
    .slice(0, 8);
}
